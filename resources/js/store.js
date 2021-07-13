import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        isLoggedIn: false,
        language: 'japanese',
        languageList: [
            {
                name: "Eng",
                locale: 'english'
            },
            {
                name: "Jap",
                locale: 'japanese'
            }
        ],
        user: {},
        path: '',
    },
    actions: {},
    mutations: {
        REMOVE_PATH(state) {
            state.path = ""
        },
        PATH(state, path) {
            state.path = path
        },
        LOGOUT(state, data) {
            state.user = {}
            state.isLoggedIn = false
            window.location.href = `${window.location.protocol}//${window.location.host}`
        },
        SET_USER_DATA(state, data) {
            state.user = data;
            state.isLoggedIn = true;
            if (state.user.AccessLevel == 1) {
                if (state.path == "") {
                    window.location.href = `${window.location.protocol}//${window.location.host}/application_list`
                } else {
                    window.location.href = state.path
                }
            } else {
                window.location.href = `${window.location.protocol}//${window.location.host}/home`

            }
        },
        CHANGE_LANGUAGE(state, data) {
            state.language = data.locale;
        }
    },
    getters: {}
})