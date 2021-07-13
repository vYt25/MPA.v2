<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-if="(getCookies('approver') == 0)" link @click="gotoCreate()">
          <v-list-item-action>
            <v-icon>mdi-note-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('createMpa')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="gotoList()">
          <v-list-item-action>
            <v-icon>mdi-clipboard-list</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('listOfPurchaseApplication')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <strong>{{$t('mpaSystem')}}</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu :close-on-content-click="true" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mr-5" rounded dark v-bind="attrs" v-on="on" small icon>
            <img v-if="$store.state.language == 'japanese'" height="25" width="35" style="border:1px solid black" src="images/japan.jpg" >
            <img v-else height="25" width="35" style="border:1px solid black" src="images/us.png" >
          </v-btn>
        </template>
        <v-card color="teal"  width="95px">
          <v-card-text><p style="font-size:12px;color:white"><strong>Language:</strong></p>
          <!-- <v-card-actions> -->
              <v-btn @click="changeToUS()" style="border:1px solid black;" small >
                  <img height="25" width="35" style="border:1px solid black" src="images/us.jpg" >
              </v-btn>

              <v-btn @click="changeToJapanese()" style="border:1px solid black" class="mt-1" small >
                  <img height="25" width="35" style="border:1px solid black" src="images/japan.jpg" >
              </v-btn>
          <!-- </v-card-actions> -->
          </v-card-text>
        </v-card>
      </v-menu>

      <v-menu :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded dark v-bind="attrs" v-on="on" x-large icon>
            <v-icon x-large color="white darken-2">mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-card height="160px" style="min-width:350px" width="350px">
          <v-card-title class="mt-n2">
            <strong>{{language == 'US' ? this.english : this.japanese}}</strong>
            <v-spacer></v-spacer>
            <v-avatar>
              <img src="images/avatar.jpg" alt="pic" />
            </v-avatar>
            <v-card-text class="mt-n5">{{email}}</v-card-text>
          </v-card-title>

          <v-divider class="mt-n5"></v-divider>
          <v-card-actions>
            <v-btn
              @click="editProfile(),dialog = true"
              rounded
              color="teal lighten-2"
              text
              class="mt-n3"
            >
              <strong>
                <v-icon>mdi-pencil</v-icon>{{$t('editProfile')}}
              </strong>
            </v-btn>
            <br />
            <v-btn rounded color="teal lighten-2" text @click="logOut()" class="ml-10 mt-n3">
              <strong>
                <v-icon>mdi-logout</v-icon>{{$t('signOut')}}
              </strong>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

      <v-dialog v-model="dialog" width="500" persistent>
        <v-card height="600px">
          <v-card-title class="headline" style="background-color:teal;color:white" primary-title>
            <strong>{{$t('editProfile')}}</strong>
          </v-card-title>

          <v-card-text>
            <v-simple-table dense>
              <tr>
                <td>
                  <strong>{{$t('firstName')}}</strong>
                </td>
                <td>
                  <v-text-field
                    v-model="first"
                    placeholder="Firstname"
                    class="mt-3"
                    outlined
                    dense
                    readonly
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{{$t('lastName')}}</strong>
                </td>
                <td>
                  <v-text-field
                    v-model="last"
                    :placeholder="$t('lastName')"
                    class="mt-3"
                    outlined
                    dense
                    readonly
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{{$t('dept')}}</strong>
                </td>
                <td>
                  <v-text-field
                    v-model="department"
                    :placeholder="$t('dept')"
                    class="mt-3"
                    outlined
                    dense
                    readonly
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{{$t('email')}}</strong>
                </td>
                <td>
                  <v-text-field
                    v-model="editEmail"
                    :placeholder="$t('email')"
                    class="mt-3"
                    outlined
                    dense
                    readonly
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{{$t('newPassword')}}</strong>
                </td>
                <td>
                  <v-text-field
                    v-model="newPassword"
                    :placeholder="$t('newPassword')"
                    type="password"
                    class="mt-3"
                    outlined
                    dense
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{{$t('confirmPassword')}}</strong>
                </td>
                <td>
                  <v-text-field
                    v-model="confirmPassword"
                    :placeholder="$t('confirmPassword')"
                    type="password"
                    class="mt-3"
                    outlined
                    dense
                  ></v-text-field>
                </td>
              </tr>
            </v-simple-table>
          </v-card-text>

          <v-divider class="mt-n5"></v-divider>

          <v-card-actions style="height:50px">
            <v-spacer></v-spacer>
            <v-btn
              color="teal"
              style="color:white"
              class="mb-4"
              width="80px"
              @click="validateEdit()"
            >
              <strong>{{$t('save')}}</strong>
            </v-btn>
            <v-btn color="primary" @click="dialog = false;draftName = ''" class="mb-4" width="80px">
              <strong>{{$t('cancel')}}</strong>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </div>
</template>

<script>
import i18n from '../../plugins/i18n';

export default {
  props: {
    source: String,
  },
  data: () => ({
    english: '',
    japanese: '',
    language: '',
    dialog: false,
    drawer: false,
    email: null,
    first: null,
    last: null,
    department: null,
    editEmail: null,
    newPassword: "",
    confirmPassword: "",
    option: {
      timeout: 2000,
      position: "bottomRight",
      transitionIn : "bounceInRight",
      transitionOut : "fadeOutDown"
    },
  }),
  created() {
    
  },
  methods: {
  },
};
</script>
