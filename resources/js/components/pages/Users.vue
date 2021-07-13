<template>
<div>
    <v-btn fab fixed color="success" small bottom right @click="AddUserDialog = true">
        <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-alert text color="teal" border="left" class="mx-5 my-1" prominent dense>
        <span style="font-size:15px" class="ml-1">{{$t('userManagement')}}</span>
    </v-alert>
    <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64" color="black" width="1"></v-progress-circular>
    </v-overlay>
    <v-row class="mx-3">
        <v-col cols="12" sm="4" md="4">
            <v-text-field :label="$t('employeeid')" outlined dense hide-details clearable v-model="search.EmployeeID"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="4">
            <v-text-field :label="$t('firstName')" outlined dense hide-details clearable v-model="search.FirstName"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="4">
            <v-text-field :label="$t('lastName')" outlined dense hide-details clearable v-model="search.LastName"></v-text-field>
        </v-col>
    </v-row>
    <div class="tableFixHead mx-2" style="border-bottom: 0.5px solid  #f2f2f2">
        <v-simple-table fixed-header height="73vh" class="table-bordered" >
            <thead >
                <tr>
                    <th>{{$t('employeeid')}}</th>
                    <th>{{$t('firstNameEng')}}</th>
                    <th>{{$t('lastNameEng')}}</th>
                    <th>{{$t('firstNameJap')}}</th>
                    <th>{{$t('lastNameJap')}}</th>
                    <th>{{$t('dept')}}</th>
                    <th>{{$t('email')}}</th>
                    <th>Account Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in FilteredUsers" :key="index">
                    <td>{{user.EmployeeID}}</td>
                    <td>{{user.FirstNameEng}}</td>
                    <td>{{user.LastNameEng}}</td>
                    <td>{{user.FirstNameJap}}</td>
                    <td>{{user.LastNameJap}}</td>
                    <td>{{user.Department}}</td>
                    <td>{{user.Email}}</td>
                    <td>{{user.AccessName}}</td>
                    <td class="text-center">
                        <v-btn :disabled="user.AccessLevel == 1" icon x-small @click="edit(user)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>
    <v-dialog v-model="EditUserDialog" persistent max-width="600px" scrollable max-height="90vh">
        <v-card>
            <v-toolbar dense dark color="teal darken-4">
                <v-btn icon dark medium @click="EditUserDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Edit User</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn :disabled="OnEdit.deleted_at != null" dark text @click="UpdateUser()" >
                        Update
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="First Name(Eng)*" v-model="OnEdit.FirstNameEng" :rules="[requiredRule]"  dense></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="Last Name(Eng)*" v-model="OnEdit.LastNameEng" :rules="[requiredRule]"  dense></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="First Name(Jap)*" v-model="OnEdit.FirstNameJap" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field label="Last Name(Jap)*" v-model="OnEdit.LastNameJap" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-col cols="12"  sm="12" md="12">
                            <v-text-field label="Department Name*" v-model="OnEdit.Department" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-col cols="12"  sm="12" md="12">
                            <v-text-field label="Email*" v-model="OnEdit.Email" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-col cols="12"  sm="12" md="12">
                            <v-select
                            :items="Access"
                            label="Account Type*"
                            dense
                            hide-details
                            item-text="Name"
                            item-value="id"
                            v-model="OnEdit.AccessLevel"
                            ></v-select>
                        </v-col>
                        <v-col cols="12"  sm="6" md="6">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn small block v-on="on" v-bind="attrs" color="green" @click="RestoreUser()" :disabled="OnEdit.deleted_at == null">
                                        <v-icon>mdi-delete-restore</v-icon>
                                    </v-btn>
                                </template>
                                <span>Restore</span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="12"  sm="6" md="6">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn small block v-on="on" v-bind="attrs" color="red" @click="DeleteUser()" :disabled="OnEdit.deleted_at != null">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </template>
                                <span>Delete</span>
                            </v-tooltip>
                        </v-col>
                        <!-- <v-col cols="12"  sm="6" md="6" v-if="OnEdit.deleted_at == null">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn  small block v-on="on" v-bind="attrs" color="blue" @click="AppointAsAdmin()" :disabled="OnEdit.AccessLevel == 1">
                                        Appoint As Admin
                                    </v-btn>
                                </template>
                                <span>Appoint As Admin</span>
                            </v-tooltip>
                        </v-col> -->
                        <!-- <v-col cols="12"  sm="6" md="6"  v-if="OnEdit.deleted_at == null">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn small block v-on="on" v-bind="attrs" color="gray" @click="AppointAsUser()" :disabled="OnEdit.AccessLevel != 1">
                                        Appoint As User
                                    </v-btn>
                                </template>
                                <span>Appoint As User</span>
                            </v-tooltip>
                        </v-col> -->
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="AddUserDialog" persistent max-width="700px" scrollable max-height="90vh">
        <v-card>
            <v-toolbar dense dark color="teal darken-4">
                <v-btn icon dark medium @click="AddUserDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Add User</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="AddUser(add)" :loading="AddUserLoading" >
                        Submit
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-form ref="addForm">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Employee Code*" v-model="add.EmployeeID" :rules="[requiredRule]"  dense></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Department*" v-model="add.Department" :rules="[requiredRule]"  dense></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Firstname(Eng)*" v-model="add.FirstNameEng" :rules="[requiredRule]"  dense></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Lastname(Eng)*" v-model="add.LastNameEng" :rules="[requiredRule]"  dense></v-text-field>
                            </v-col>                        
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Firstname(Jap)" v-model="add.FirstNameJap" dense></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Lastname(Jap)" v-model="add.LastNameJap" dense></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Email" v-model="add.Email" :rules="[requiredRule]" dense></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                :items="Access"
                                label="Account Type*"
                                dense
                                hide-details
                                item-text="Name"
                                item-value="id"
                                v-model="add.AccessLevel"
                                :rules="[requiredRule]"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            add: {
                EmployeeID: null,
                Department: null,
                FirstNameEng: null,
                LastNameEng:null,
                FirstNameJap:null,
                LastNameJap: null,
                Email: null,
                AccessLevel: null
            },
            search:{},
            Access:[
                {
                    id: 1,
                    Name: 'Administrator'
                },
                {
                    id: 2,
                    Name: 'User'
                }
            ],
            users: [],
            overlay: true,
            OnEdit:{},
            EditUserDialog: false,
            AddUserDialog: false,

            
            AddUserLoading: false,
        }
    },
    created() {
        this.GetUsers()
    },
    computed:{
        FilteredUsers(){
            // return this.users.filter(rec=>{
            //     if(!this.search.EmployeeID && !this.search.FirstName && !this.search.LastName){
            //         return rec
            //     }else{
            //         if(!!this.search.EmployeeID){
            //             return  rec.EmployeeID.includes(this.search.EmployeeID)
            //         }

            //         if(!!this.search.FirstName){
            //             return rec.FirstNameEng.toLowerCase().includes(this.search.FirstName.toLowerCase()) || rec.FirstNameJap.includes(this.search.FirstName)
            //         }

            //         if(!!this.search.LastName){
            //             return rec.LastNameEng.toLowerCase().includes(this.search.LastName.toLowerCase()) || rec.LastNameJap.includes(this.search.LastName)
            //         }
            //     }
            // })
            
            return this.users.filter(rec=>{
                if(!!this.search.EmployeeID){
                    return  rec.EmployeeID.includes(this.search.EmployeeID)
                }else{
                    return rec
                }
            }).filter(rec=>{
                if(!!this.search.FirstName){
                    return rec.FirstNameEng.toLowerCase().includes(this.search.FirstName.toLowerCase()) || rec.FirstNameJap.includes(this.search.FirstName)
                }else{
                    return rec
                }
            }).filter(rec=>{
                if(!!this.search.LastName){
                    return rec.LastNameEng.toLowerCase().includes(this.search.LastName.toLowerCase()) || rec.LastNameJap.includes(this.search.LastName)
                }else{
                    return rec
                }
            })
        },
    },
    methods: {
        Notify(msg, msg1, type){
            this.$swal.fire(
                msg,
                msg1,
                type
            )
        },
        AddUser(val){
            this.AddUserLoading = true
            if(this.$refs.addForm.validate()){
                axios.post('/api/AddNewUser',val)
                .then(res=>{
                    this.AfterModifyFunctions()
                    this.AddUserLoading = false
                    this.Notify('Success','Registered!','success')
                }).catch(err=>{
                    console.log(err)
                    this.AddUserLoading = false
                })
            }else{
                setTimeout(()=>{
                    this.AddUserLoading = false
                    // alert('Please Fill-up Required Fields')
                    this.Notify('Warning','Please Fill-up Required Fields!','warning')

                },200)
            }
           
        },
        AfterModifyFunctions(){
            this.AddUserDialog = false;
            this.add = {
                EmployeeID: null,
                Department: null,
                FirstNameEng: null,
                LastNameEng:null,
                FirstNameJap:null,
                LastNameJap: null,
                Email: null,
                AccessLevel: null
            }
            this.GetUsers()
            this.overlay = false
            this.EditUserDialog = false
            this.OnEdit = {}
        },
        DeleteUser(){
            this.overlay = true
            axios.post('/api/DeleteUser',this.OnEdit)
            .then(res=>{
                this.AfterModifyFunctions()
                    this.Notify('','Account Revoked!','info')

            })
        },
        RestoreUser(){
            axios.post('/api/RestoreUser',this.OnEdit)
            .then(res=>{
                this.AfterModifyFunctions()
                this.Notify('','Account Reactivated!','info')

            })
        },
        requiredRule(value){
            
            if (value instanceof Array && value.length == 0) {
                return 'Required.';
            }else{
                return !!value || 'Required.';
            }
            
        },
        emailRule(value) {
            var ctr = 0;
            value.forEach(rec=>{
                if(!/.+@.+/.test(rec)){
                    ctr++
                }
            })
            return ctr != 0 ? (false || 'E-mail must be valid') : true 
        },
        UpdateUser(){
            this.overlay = true
            axios.post('/api/UpdateUser',this.OnEdit)
            .then(res=>{
                this.AfterModifyFunctions()
            })
        },
        edit(user) {
            this.OnEdit = JSON.parse(JSON.stringify(user))
            this.EditUserDialog= true
        },
        remove(user) {
            alert()
        },
        GetUsers() {
            axios.get('/api/GetUsers')
            .then(res => {
                this.users = res.data
                this.users.forEach(rec=>{
                    if(rec.FirstNameJap == null ){
                        rec.FirstNameJap = ""
                    }
                     if(rec.LastNameJap == null ){
                        rec.LastNameJap = ""
                    }
                })
                this.overlay = false
            }).catch(err => {
                console.log(err)
            })
        },
    }

}
</script>

<style scoped>
/* .tableFixHead {
    overflow-y: auto;
    max-height: 75vh;
}

.tableFixHead thead th {
    position: sticky;
    top: 0;
    z-index: 100;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 8px 16px;
    border: 1px solid #ddd !important;
} 


.tabletable tr:nth-child(even) {
    background-color: #f2f2f2;
}

.table tr:hover {
    background-color: #ddd;
}*/



th {
    background-color: #004D40 !important;
    color: white !important;
}
</style>
