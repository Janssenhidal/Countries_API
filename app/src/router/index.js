/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'
import CountryDetails from "../views/CountryDetails";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/country/:countryName',
        name: 'Country Details',
        component: CountryDetails,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router
