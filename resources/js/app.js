/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import Routes from './routes'
import App from './components/template/App';
import store from './store'
import ElementUI from 'element-ui'
import VueSweetalert2 from 'vue-sweetalert2';
import VueIziToast from 'vue-izitoast';
import i18n from './plugins/i18n';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(VueSweetalert2);
Vue.use(VueIziToast);
Vue.use(ElementUI)
Vue.use(Vuetify)

Vue.prototype.$EventBus = new Vue();

window.md5 = require('md5');



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    i18n,
    store,
    router: Routes,
    vuetify: new Vuetify(),
    render: h => h(App)
});
