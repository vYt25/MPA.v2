<template>
    
    <v-container fluid fill-height>
        <v-row>
            <v-spacer></v-spacer>
            <v-menu offset-y transition="slide-y-transition" bottom rounded >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn  v-bind="attrs" v-on="on" icon >
                        <div style="border-style:solid;border-width:thin;">
                            <v-img aspect-ratio="16/9" width="30" height="20" :src="$store.state.language == 'english' ? '/images/Us.jpg' : '/images/Japan.jpg'" ></v-img>
                        </div>
                    </v-btn>
                </template>
                <v-list color="#ECEFF1">
                    <v-list-item v-for="(flag, i) in $store.state.languageList" :key="i" @click="handleChangeLanguage(flag)">
                        <v-list-item-title>
                            <v-img aspect-ratio="16/9" width="30" height="20" :src="i == 0 ? '/images/Us.jpg' : '/images/Japan.jpg'" :alt="flag.name"></v-img>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-row>
        
        <v-layout align-center justify-center>
            <v-card class="mx-auto elevation-20 pl-3 pr-3" style="border-radius: 10px;" max-width="700px" > 
                <v-row>
                    <v-col cols="12" md="7" sm="7" style="background-color:#80CBC4; border-radius: 10px 0px 0px 10px; border-bottom: 20px solid #80CBC4; border-top: 20px solid #80CBC4;">
                        <v-row>
                            <v-col class="mt-4">
                                <v-img src="images/mpav2.png" alt="lagyan mo img"></v-img>
                            </v-col>
                        </v-row>

                        <div  style="width: 100%; text-align:center; font-style: italic; text-decoration: underline;">
                            {{$t('mpa')}}
                        </div>
                    </v-col>

                    <v-col cols="12"  md="5" sm="5" style="text-align:center">
                        <v-card-title class="mt-3 text-center" style="display:inherit; font-size: 20px; font-weight: bold" col="12">
                            {{$t('login')}}
                        </v-card-title>
                        <v-card-text class="text--primary mt-5 mx-2">
                            <v-text-field prepend-icon="mdi-email" type="text" :error="error.email" v-model="username" :error-messages="error.email ? 'Invalid Email' : null" :label="$t('email')" @keyup.enter="login()"></v-text-field>
                            <v-text-field id="password" :label="$t('password')" :error="error.password" prepend-icon="mdi-lock" type="password" :error-messages="error.password ? 'Invalid Password' : null" v-model="password" @keyup.enter="login()"></v-text-field>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn raised :loading="loading" :disabled="!username || !password"  color="#80CBC4" width="120" @click="login()">{{$t('login')}}</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>

        </v-layout>
    </v-container>
</div>

</template>

<script>
import Vue from 'vue'
import i18n from '../../plugins/i18n'
export default {
    data() {
        return {
            loading: false,
            username: "",
            password: "",
            csrf: null,
            error: {
                email: false,
                password: false
            }

        };
    },
    created() {
        this.getCsrf()
        i18n.locale = this.$store.state.language
    },
    methods: {
        handleChangeLanguage(obj) {
            this.$store.commit("CHANGE_LANGUAGE", obj);

            i18n.locale = obj.locale;
        },
        login() {
            if(!this.username && !this.password){
                return false
            }else{
                this.loading = true
                axios.post('api/MPALogin', {
                    email: this.username,
                    password: this.password,
                    Password: md5(this.password)
                }).then(res => {
                    // console.log(res.data.email !== undefined && res.data.password !== undefined)
                    // console.log(res.data.email !== undefined)
                    // console.log(res.data.password !== undefined)

                    if (res.data.email !== undefined && res.data.password !== undefined) {
                        this.error.email = true
                        this.error.password = true
                    } else if (res.data.email !== undefined  || res.data == 'Invalid Email') {
                        this.error.password = false
                        this.error.email = true
                    } else if (res.data.password !== undefined || res.data == 'Invalid Password') {
                        this.error.password = true
                        this.error.email = false
                    } else{
                        this.error.email = false
                        this.error.password = false

                        axios.defaults.headers = {
                            Authorization: `Bearer ${res.data.token}`
                        }
                    

                        var x = res.data
                        delete x.token
                        this.$store.commit("SET_USER_DATA",res.data)

                        
                        //  if(res.data.AccessLevel == 1){
                        //     window.location.href = `${window.location.protocol}//${window.location.host}/appplication_list`

                        // }else{
                        //     // window.location.href = `${window.location.protocol}//${window.location.host}/home`
                        // }
                        
                    }
                    setTimeout(()=>{
                        this.loading = false
                        
                    },200)
                    
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        getCsrf() {
            this.csrf = document.querySelector('meta[name="csrf-token"]').content
        }
    },
};
</script>
