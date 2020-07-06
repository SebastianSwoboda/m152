import Vue from 'vue';
import Router from 'vue-router';
import Impressum from "@/components/Impressum";
import CssAnimations from "@/components/animations/CssAnimations";
import HtmlMedia from "@/components/HtmlMedia";
import TimePlan from "@/components/TimePlan";
Vue.use(Router);

const router = [
    {
        path: '/impressum',
        name: 'impressum',
        title: 'Impressum',
        component: Impressum
    }, {
        path: '/cssAnimations',
        name: 'cssAnimations',
        title: 'CSS3 Animationen',
        component: CssAnimations
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
    },

    {
        path: '*',
        redirect: { name: 'cssAnimations' },
    },
];

export default new Router({
    routes: router,
});