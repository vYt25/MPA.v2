<template>
<div align="center">
    <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64" color="black" width="1"></v-progress-circular>
    </v-overlay>
    <v-card align="center" style="width: 98%;" height="90vh" class="mt-2 rounded-md" justify="middle">
        <v-row>
            <v-col cols="12" md="4" sm="4">
                <v-text-field
                    class="ml-3"
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    v-model="search"
                    dense
                    hide-details
                    outlined
                    clearable
                ></v-text-field>
            </v-col>
        </v-row>
            <v-simple-table fixed-header height="75vh" style="width:98%"  class="table table--custom" >
                <thead>
                    <tr >
                        <th>#</th>
                        <th>Payer Code</th>
                        <th>DC Code</th>
                        <th>Accounting Code</th>
                        <th>Department Name(Eng)</th>
                        <th>Department Name(Jap)</th>
                        <th>MC Adviser Emails</th>
                        <th>MC Staff Emails</th>
                        <th>Production Adviser Emails</th>
                        <th>Production Head Emails</th>
                        <th>FA Custotian Emails</th>
                        <th>Accounting Emails</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(dept,i) in FilterDepartments" :key="i" >
                        <td>{{i+1}}</td>
                        <td>{{dept.PayerCode}}</td>
                        <td>{{dept.DcCode}}</td>
                        <td>{{dept.AccountingCode}}</td>
                        <td>{{dept.DepartmentNameEng}}</td>
                        <td>{{dept.DepartmentNameJap}}</td>
                        <td>
                            <ul v-if="dept.McJaEmails != null">
                                <li class="text-nowrap" v-for="(email,ind) in dept.McJaEmails.split(',')" :key="ind">
                                    {{email}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul v-if="dept.McStaffEmails != null">
                                <li class="text-nowrap" v-for="(email,ind) in dept.McStaffEmails.split(',')" :key="ind">
                                    {{email}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul v-if="dept.ProductionJaEmails != null">
                                <li class="text-nowrap" v-for="(email,ind) in dept.ProductionJaEmails.split(',')" :key="ind">
                                    {{email}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul v-if="dept.ProductionStaffEmails != null">
                                <li class="text-nowrap" v-for="(email,ind) in dept.ProductionStaffEmails.split(',')" :key="ind">
                                    {{email}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul v-if="dept.FaCustotianEmails != null">
                                <li class="text-nowrap" v-for="(email,ind) in dept.FaCustotianEmails.split(',')" :key="ind">
                                    {{email}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul v-if="dept.AccountingEmails != null">
                                <li class="text-nowrap" v-for="(email,ind) in dept.AccountingEmails.split(',')" :key="ind">
                                    {{email}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <v-btn icon color="blue darken-3" @click="editRow(dept)" class="mx-2 my-10">
                                <v-icon>mdi-pencil-circle</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
    </v-card>
    <v-dialog v-model="EditDeptDialog" persistent max-width="1000px" scrollable max-height="90vh">
        <v-card>
            <v-toolbar dense dark color="teal darken-4">
                <v-btn icon dark medium @click="EditDeptDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Edit Department</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="UpdateDepartment()" :loading="UpdateButton" :disabled="saveBtnState">
                        Update
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Payer Code*" v-model="edit.PayerCode" :rules="[requiredRule]"  dense></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-combobox
                                v-model="edit.DcCode"
                                label="DC Code"
                                multiple
                                small-chips
                                deletable-chips
                                hide-details
                                ></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Accounting Code*" v-model="edit.AccountingCode" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Department Name(Eng)*" v-model="edit.DepartmentNameEng" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Department Name(Jap)*" v-model="edit.DepartmentNameJap" :rules="[requiredRule]" hide-details dense></v-text-field>
                        </v-col>
                        <v-row style="min-height: 100px">
                            <v-col cols="12" sm="4">
                                <v-combobox
                                v-model="edit.McJaEmails"
                                label="MC Adviser Emails"
                                multiple
                                small-chips
                                deletable-chips
                                :rules="[emailRule]"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-combobox
                                v-model="edit.ProductionJaEmails"
                                label="Production Adviser Emails"
                                multiple
                                small-chips
                                deletable-chips
                                :rules="[emailRule]"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-combobox
                                v-model="edit.AccountingEmails"
                                label="Accounting Emails"
                                multiple
                                small-chips
                                deletable-chips
                                :rules="[emailRule]"
                                ></v-combobox>
                            </v-col>
                        </v-row>
                        <v-row style="min-height: 100px">
                            
                            <v-col cols="12" sm="4">
                                <v-combobox
                                v-model="edit.FaCustotianEmails"
                                label="FA Custodian Emails"
                                multiple
                                small-chips
                                deletable-chips
                                :rules="[emailRule]"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-combobox
                                v-model="edit.McStaffEmails"
                                label="MC Staff Emails"
                                multiple
                                small-chips
                                deletable-chips
                                :rules="[emailRule]"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-combobox
                                v-model="edit.ProductionStaffEmails"
                                label="Production Head Emails"
                                multiple
                                small-chips
                                deletable-chips
                                :rules="[emailRule]"
                                ></v-combobox>
                            </v-col>
                        </v-row>
                    </v-row>
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
            departments: [],
            EditDeptDialog: false,
            edit: {},
            overlay: true,
            saveBtnState: false,
            search: '',
            UpdateButton: false
        }
    },
    computed:{
        FilterDepartments(){
            if(!!this.search){
                return this.departments.filter(rec => {
                    return rec.DepartmentNameEng.toLowerCase().includes(this.search) || rec.DepartmentNameJap.toLowerCase().includes(this.search)
                })
            }else{
                return this.departments
            }
        },
    },
    watch:{
        edit:{
            handler(val){
                setTimeout(() => {
                    this.saveBtnState = $('.error--text').length > 0
                }, 50);
                
            },
            deep: true
        }
    },
    created() {
        this.getDepartment()
    },
    methods: {
        UpdateDepartment(){
            this.UpdateButton = true
            if($('.error--text').length == 0){
                setTimeout(()=>{
                    axios.post('/api/UpdateDepartment',this.edit)
                    .then(res=>{
                        this.getDepartment()
                        this.EditDeptDialog = false
                        this.edit = {}
                        this.UpdateButton = false

                    })
                },200)
            }
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
            // if(!value === undefined){
                value.forEach(rec=>{
                    if(!/.+@.+/.test(rec)){
                        ctr++
                    }
                })                
            //  }
             return ctr != 0 ? (false || 'E-mail must be valid') : true 
        },
        editRow(dept) {
            var i = this.departments.findIndex(rec=>rec.id == dept.id)

            this.EditDeptDialog = true

            this.edit = JSON.parse(JSON.stringify(this.departments[i]))

            this.edit.DcCode = (this.edit.DcCode != "" && this.edit.DcCode != null) ? this.edit.DcCode.split(',') : null

            this.edit.McJaEmails = this.edit.McJaEmails != null ? this.edit.McJaEmails.split(',') : null
            this.edit.McStaffEmails = this.edit.McStaffEmails != null ? this.edit.McStaffEmails.split(',') : null
            this.edit.ProductionJaEmails = this.edit.ProductionJaEmails != null ? this.edit.ProductionJaEmails.split(',') : null
            this.edit.ProductionStaffEmails = this.edit.ProductionStaffEmails != null ? this.edit.ProductionStaffEmails.split(',') : null
            this.edit.FaCustotianEmails = this.edit.FaCustotianEmails != null ? this.edit.FaCustotianEmails.split(',') : null
            this.edit.AccountingEmails = this.edit.AccountingEmails != null ? this.edit.AccountingEmails.split(',') : null
            // this.edit.AccountingEmails = this.edit.fa_custodian != null ? this.edit.fa_custodian.split(',') : null
            // this.edit.accounting = this.edit.accounting != null ? this.edit.accounting.split(',') : null
        },
        getDepartment() {
            axios.get('/api/GetDepartment')
                .then(res => {
                    this.departments = res.data
                    this.overlay = false
                })
        }
    }
}
</script>

<style>
.table--custom th {
  background-color: #004D40 !important;
  color: white !important;
  /* font-size: 18px  !important; */
  font-weight: normal !important;
}
</style>
