import Vue from 'vue';
import Router from 'vue-router';
import Impressum from "@/components/Impressum";
import HtmlMedia from "@/components/HtmlMedia";
import TimePlan from "@/components/TimePlan";
import Concept from "./views/Concept";
import Animations from "./views/Animations";
Vue.use(Router);

const router = [
    {
        path: '/impressum',
        name: 'impressum',
        title: 'Impressum',
        component: Impressum
    }, {
        path: '/animations',
        name: 'animations',
        title: 'Animationen',
        component: Animations
    },{
        path: '/htmlMedia',
        name: 'htmlMedia',
        title: 'HTML und Media',
        component: HtmlMedia
    },{
        path: '/zeitplan',
        name: 'zeitplan',
        title: 'Zeitplan',
        component: TimePlan
    },{
        path: '/konzept',
        name: 'konzept',
        title: 'Konzept',
        component: Concept
    },


    {
        path: '/',
        redirect: { name: 'cssAnimations' },
    },
];

export default new Router({
    routes: router,
    mode: 'history',
    base: process.env.BASE_URL

});