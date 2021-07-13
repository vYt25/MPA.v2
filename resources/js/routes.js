import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
Vue.use(VueRouter)





const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            components: {
                default: () => import('./components/pages/Application'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {

                store.state.isLoggedIn && store.state.user.AccessLevel != 3 ? next() : next('/application_list')
            }
        },
        {
            path: '/application_list',
            name: 'application_list',
            components: {
                default: () => import('./components/pages/ApplicationList'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                store.state.isLoggedIn ? next() : next('/')
            }
        },
        {
            path: '/',
            name: 'login',
            component: () => import('./components/pages/Login'),
            beforeEnter(to, from, next) {
                store.state.isLoggedIn ? next('/home') : next()
            }
        },
        {
            path: '/maintainance/department',
            name: 'department',
            components: {
                default: () => import('./components/pages/Department'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                if (store.state.isLoggedIn) {
                    if (store.state.user.AccessLevel == 1 && store.state.user.Department == '経理') {
                        next()
                    } else {
                        next('/')
                    }
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/maintainance/users_management',
            name: 'users_management',
            components: {
                default: () => import('./components/pages/Users'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                if (store.state.isLoggedIn) {
                    if (store.state.user.AccessLevel == 1 && store.state.user.Department == '経理') {
                        next()
                    } else {
                        next('/')
                    }
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/manual',
            name: 'manual',
            components: {
                default: () => import('./components/pages/Manual'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                if (store.state.isLoggedIn) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/incoterms',
            name: 'incoterms',
            components: {
                default: () => import('./components/pages/Incoterms'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                if (store.state.isLoggedIn) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/data_extraction',
            name: 'data_extraction',
            components: {
                default: () => import('./components/pages/DataExtraction'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                if (store.state.isLoggedIn) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/manual',
            name: 'manual',
            components: {
                default: () => import('./components/pages/Manual'),
                header: () => import('./components/pages/NavBar')
            },
            beforeEnter(to, from, next) {
                if (store.state.isLoggedIn) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '*',
            components: {
                default: () => import('./components/pages/NotFound'),
            },
        },
        // {
        //     path: '/emails',
        //     name: 'emails',
        //     components: {
        //         default: () => import('./components/Emails'),
        //         header: () => import('./components/NavBar')
        //     }
        // },
    ],
})

router.beforeEach((to, from, next) => {
    // console.log(window.location)
    if (window.location.pathname == "/application_list" && window.location.search != '') {
        store.commit('PATH', window.location.href)
    }
    next();
});

export default router;

