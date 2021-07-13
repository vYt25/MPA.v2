<template>
<div id="inspire" style="background-color:lightgrey">
    <v-navigation-drawer v-model="drawer" color="#ECEFF1" app>
        <v-list dense shaped>
            <v-list-item style="padding-top: 5px; padding-bottom:5px">
                <v-col cols="12" align="center" style="padding-top: 5px; padding-bottom:5px; height: 75px">
                    <v-list-item-avatar size="90">  
                        <v-img src="/images/avatar.png"></v-img>
                    </v-list-item-avatar>
                </v-col>
            </v-list-item>
            <v-list-item>
                <v-list-item-content style="padding-top: 5px; padding-bottom:5px">
                    <v-list-item-title style="font-size: 15px; font-weight: 300; padding-top: 5px; padding-bottom:5px">
                        <v-col cols="12" align="center" style=" padding-top: 5px; padding-bottom:5px">
                            {{ UserFullName }}
                            <v-btn icon small @click="AccountDetailsDialog = true">
                                <v-icon>mdi-square-edit-outline</v-icon>
                            </v-btn><br/>
                            {{ UserAccessName }}
                        </v-col>
                    </v-list-item-title>
                    <!-- <v-list-item-subtitle>
                        <v-col cols="12" align="center">
                            {{ UserAccessName }}
                        </v-col>
                    </v-list-item-subtitle> -->
                </v-list-item-content>

                <!-- <v-list-item-action>
                        <v-icon>mdi-account-edit</v-icon>
                    </v-list-item-action> -->
            </v-list-item>

            <v-divider></v-divider>
            <template v-for="(item,index) in items" :to="item.to">
                <div :key="index">
                    <v-divider v-show="index == 2 && $store.state.user.Department == '経理'"></v-divider>
                    <v-subheader v-show="index == 2 && $store.state.user.Department == '経理'">Settings</v-subheader>
                </div>
                <v-row v-if="item.heading" :key="item.heading" align="center">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <a href="#!" class="body-2 black--text">EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group v-else-if="item.children" :key="item.text" @click="collapse(index)" v-model="item.model" color="teal" v-show="navigationShow(item)" :prepend-icon="item.icon" :append-icon="item['icon-alt']" :to="item.to">
                    <!-- <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.text_en != 'Hinban' ? (item.model ? item.icon : item['icon-alt']) : item.icon" :append-icon="item.text_en == 'Hinban' ? item['icon-alt'] :  item.icon" :to="item.to"> -->
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{ $store.state.language == 'english' ? item.text_en : item.text_jp }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.to" v-model="child.model" color="teal" v-show="navigationShow(child)">

                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ $store.state.language == 'english' ? child.text_en : child.text_jp }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.text" link :to="item.to" @click="collapse(index)" v-model="item.model" color="teal" v-show="navigationShow(item)">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $store.state.language == 'english' ? item.text_en : item.text_jp }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
        <!-- sidebar bottom part append -->
        <template v-slot:append>
        </template>
    </v-navigation-drawer>

    <v-app-bar dense color="teal"  app>
        <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 600px" class="ml-0 pl-4">
            <v-row>
                <v-img conatain max-width="100" src="/images/mpav2.png" @click="$router.push('/home')"></v-img>
                <span class="hidden-sm-and-down text-white my-2 mr-1">{{$t('mpa')}}</span>
            </v-row>
        </v-toolbar-title>

        <v-spacer />

        <!-- <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="100" offset-x>
            <template v-slot:activator="{ on }"> -->

        <v-menu v-model="NotificationMenu" :close-on-content-click="false" :nudge-width="250" left absolute offset-x>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon small dark v-on="on" v-bind="attrs" @click="NotificationMenu = !NotificationMenu" class="mx-5">
                    <v-badge color="red lighten-1" v-show="TotalNotifications > 0" :content="TotalNotifications" dense overlap>

                        <v-icon>mdi-bell</v-icon>
                    </v-badge>

                </v-btn>
            </template>
            <v-card style="z-index:9999">
                <v-list dense>
                    <v-list-item>

                        <v-list-item-content>
                            Notifications
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item link>
                        <v-list-item-title>On-Going Applications</v-list-item-title>
                        <v-spacer></v-spacer>
                        <span style="color:teal; font-weight:bold;">{{Notifications.Applicant}}</span>
                    </v-list-item>

                    <v-list-item link v-if="$store.state.user.AccessLevel == 1">
                        <v-list-item-title>For Approval</v-list-item-title>
                        <v-spacer></v-spacer>
                        <span style="color:teal; font-weight:bold;">{{Notifications.Approver}}</span>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>

        <v-menu offset-y transition="slide-y-transition" bottom rounded>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon small style="margin-right: 15px">
                    <v-img aspect-ratio="16/9" width="30" height="20" :src="$store.state.language == 'english' ? '/images/Us.jpg' : '/images/Japan.jpg'"></v-img>
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

        <v-menu offset-y transition="slide-y-transition" bottom rounded>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon small style="margin-right:5px">
                    <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list color="#ECEFF1">
                <v-list-item link @click="logout()">
                    <span style="font-size: 12px">{{$t('Logout')}}</span>

                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
    <v-dialog v-model="AccountDetailsDialog" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Account Details</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="AccountForm">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="First Name (Eng)*" v-model="user.FirstNameEng" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Last Name (Eng)*" v-model="user.LastNameEng" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="First Name (Jap)*" v-model="user.FirstNameJap" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Last Name (Jap)*" v-model="user.LastNameJap" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Department(Jap)*" v-model="user.Department" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Access Type" :value="UserAccessName" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Password*" type="password" v-model="user.Password" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Confirm Password*" type="password" v-model="user.ConfirmPassword" :rules="[requiredRule]"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="AccountDetailsDialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="SubmitAccountDetails()">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import i18n from '../../plugins/i18n'
export default {
    props: {
        source: String
    },
    data: () => ({
        AccountDetailsDialog: false,
        item: {
            model: 0
        },
        dialog: false,
        drawer: false,
        fab: true,
        menu: false,
        message: false,
        hints: true,
        items: [{
                icon: "mdi-pencil-plus",
                text_en: "Create MPA",
                text_jp: "機械設備購入申請書作成",
                accessibleBy: [1, 2],
                to: "/home",
                model: false,
            },
            {
                icon: "mdi-format-list-text",
                text_en: "Purchase Application List",
                text_jp: "購入申請一覧",
                accessibleBy: [1, 2, 3, 4],
                to: "/application_list",
                model: false,
            },
            {
                icon: "mdi-file-document-outline",
                text_en: "Incoterms ",
                text_jp: "インコタームズ",
                accessibleBy: [1, 2, 3, 4],
                to: "/incoterms",
                model: false,
            },
            {
                icon: "mdi-file-document-outline",
                text_en: "Data Extraction ",
                text_jp: "データ抽出",
                accessibleBy: [1, 2, 3, 4],
                to: "/data_extraction",
                model: false,
            },
            {
                icon: "mdi-file-document-outline",
                text_en: "Manual",
                text_jp: "マニュアル",
                accessibleBy: [1, 2, 3, 4],
                to: "/manual",
                model: false,
            },
            {
                icon: "mdi-format-list-bulleted",
                text_en: "Maintainance",
                text_jp: "メンテナンス",
                accessibleBy: ['経理'],

                model: false,
                children: [{
                        icon: "mdi-blank",
                        text_en: "Department",
                        text_jp: "部署",
                        to: "/maintainance/department",
                        accessibleBy: ['経理'],
                        model: false
                    }, {
                        icon: "mdi-blank",
                        text_en: "User Management",
                        text_jp: "ユーザー設定",
                        to: "/maintainance/users_management",
                        accessibleBy: ['経理'],
                        model: false
                    },
                ],
            },
            

        ],
        NotificationMenu: false,
        user: {},
        JessUsers: [],
        Notifications: {},
    }),
    computed: {
        TotalNotifications() {
            if (this.Notifications.Applicant !== undefined && this.Notifications.Approver !== undefined) {
                return parseInt(this.Notifications.Applicant) + parseInt(this.Notifications.Approver)
            }
        },
        UserFullName() {
            return this.$store.state.language == 'english' ? `${this.$store.state.user.FirstNameEng} ${this.$store.state.user.LastNameEng}` : `${this.$store.state.user.LastNameJap} ${this.$store.state.user.FirstNameJap}`
        },
        UserAccessName() {
            if (this.$store.state.language == 'english') {
                return this.$store.state.user.AccessLevel == 1 ? 'Administrator' : 'User'
            } else {
                return this.$store.state.user.AccessLevel == 1 ? '管理者' : 'ユーザー'
            }
        }
    },
    created() {
        i18n.locale = this.$store.state.language
        this.user = JSON.parse(JSON.stringify(this.$store.state.user))
        this.testFunction()

        this.GetNotifications()

        this.$EventBus.$on('GET_NOTIFICATIONS', () => {
            this.GetNotifications()
        })
    },
    methods: {
        GetNotifications() {
            axios.post('/api/GetNotifications', {
                    EmployeeID: this.$store.state.user.EmployeeID
                })
                .then(res => {
                    this.Notifications = res.data
                })
        },
        testFunction2() {
            axios.post('/api/test', {
                    data: this.JessUsers
                })
                .then(res => {
                    console.log(res.data)
                })
        },
        testFunction() {
            let apiKey = {
                headers: {
                    "x-api-key": 'JUe7mHXOhR6ziaSDHXUDJ310nTfdsH8s1ph44z2q'
                }
            }

            delete axios.defaults.headers.common['X-Requested-With'];

            axios.get('https://1ze9v428i9.execute-api.us-east-2.amazonaws.com/prod/getUsers', apiKey)
                .then(res => {
                    this.JessUsers = res.data
                }).catch(err => {
                    console.log(err)
                })

        },
        requiredRule(value) {

            if (value instanceof Array && value.length == 0) {
                return 'Required.';
            } else {
                return !!value || 'Required.';
            }

        },
        SubmitAccountDetails() {
            this.$refs.AccountForm.validate()
            if (this.user.Password != this.user.ConfirmPassword) {
                alert('Password Does Not Match')
            } else {
                if ($('.error--text').length == 0) {
                    axios.post('/api/UpdateUserAccount', this.user)
                        .then(res => {
                            this.AccountDetailsDialog = false
                            this.$swal.fire(
                                'Your Account Details Updated!',
                                'Please relogin your account to take effect.',
                                'success'
                            )
                        }).catch(err => {
                            console.log(err)
                        })
                }
            }

        },
        // GetNotifications() {
        //     axios.post('/api/GetNotifications', {
        //             EmployeeID: this.$store.state.user.EmployeeID
        //         })
        //         .then(res => {
        //         }).catch(err => {
        //             cosole.log(err)
        //         })
        // },
        collapse(index) {
            this.items.forEach(rec => {
                rec.model = false
            })

            this.items[index].model = true
        },
        navigationShow(item) {
                if(item.accessibleBy.includes(this.$store.state.user.AccessLevel)){
                    return true
                }
                if(item.accessibleBy.includes(this.$store.state.user.Department)){
                    return true
                }
            
                return false
                


        },
        handleChangeLanguage(obj) {
            this.$store.commit("CHANGE_LANGUAGE", obj);

            i18n.locale = obj.locale;
        },
        logout() {
            this.$store.commit('LOGOUT')
        },
        // checkNotifications() {
        //     axios
        //         .get("api/notification", {
        //             headers: {
        //                 Authorization: `Bearer ${this.$store.state.user.token}`
        //             }
        //         })
        //         .then(res => {
        //             this.$store.state.notifications = res.data;
        //             this.notifications = res.data;
        //         });
        // },
        notice(notice) {
            this.$toast.show(notice, 'Notice!', {
                id: 'haduken',
                theme: 'dark',
                icon: 'icon-contacts',
                timeout: 10000,
                // title: 'Hey',
                displayMode: 2,
                // message: 'This is Layout <b>2</b> example',
                position: 'topCenter',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
                progressBarColor: 'rgb(0, 255, 184)',
                image: 'img/mail.png',
                imageWidth: 70,
                layout: 2,
                iconColor: 'rgb(0, 255, 184)'
            })
        },
    },
    mounted() {}
};
</script>

<style>
</style>
