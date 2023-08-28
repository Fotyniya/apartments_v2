import HomePage from '../src/pages/HomePage'
import ApartmentPage from '../src/pages/ApartmentPage'
import ErrorPage from '../src/pages/ErrorPage'
import LoginPage from '../src/pages/LoginPage'
import RegistrationPage from '../src/pages/RegistrationPage'
import VueRouter from 'vue-router'

const routes = [
    {
        path:'/',
        component: HomePage,
        name: 'homepage'
    },
    {
        path:'/apartments/:id',
        component: ApartmentPage,
        name: 'apartment'
    },
    {
        path:'/login',
        component: LoginPage,
        name: 'login-page'
    },
    {
        path:'/registration',
        component: RegistrationPage,
        name: 'registration-page'
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
})

export default router