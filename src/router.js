import Vue from 'vue';
import Router from 'vue-router';
import Impressum from "./views/Impressum";
import HtmlMedia from "./views/HtmlMedia";
import TimePlan from "./views/TimePlan";
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
        redirect: { name: 'animations' },
    },
];

export default new Router({
    routes: router,
    mode: 'history',
    base: process.env.BASE_URL

});