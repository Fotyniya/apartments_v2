import ErrorPage from '../src/pages/ErrorPage'
import VueRouter from 'vue-router'
import store from './store'

const HomePage = () => import('./pages/HomePage');
const ApartmentPage = () => import('./pages/ApartmentPage');
const LoginPage = () => import('./pages/LoginPage');
const RegistrationPage = () => import('./pages/RegistrationPage');
const MyOrdersPage = () => import('./pages/MyOrders');

const routes = [
    {
        path:'/',
        component: HomePage,
        name: 'homepage'
    },
    {
        path:'/apartments/:id',
        component: ApartmentPage,
        name: 'apartment',
        meta: {
            requiresAuth: true,
        },
    },
    {
        path:'/my-orders',
        component: MyOrdersPage,
        name: 'my-orders',
        meta: {
            requiresAuth: true,
        },
    },
    {
        path:'/login',
        component: LoginPage,
        name: 'login-page',
        meta: {
            hideForAuth: true,
        },
    },
    {
        path:'/registration',
        component: RegistrationPage,
        name: 'registration-page',
        meta: {
            hideForAuth: true,
        },
    },
    {
        path: '*',
        component: ErrorPage,
        name: 'error-page'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['auth/isLoggedIn'];
  
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        next({ name: 'login-page' });
      }
    }
  
    if (to.matched.some((record) => record.meta.hideForAuth)) {
      if (isLoggedIn) {
        next({ name: 'homepage' });
      }
    }
  
    next();
});

export default router