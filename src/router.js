import Vue from 'vue';
import Router from 'vue-router';
import Impressum from "@/components/Impressum";
import HelloWorld from "@/components/HelloWorld";
import CssAnimations from "@/components/animations/CssAnimations";
Vue.use(Router);

const router = [
    {
        path: '/impressum',
        name: 'impressum',
        title: 'Impressum',
        component: Impressum
    }, {
        path: '/test',
        name: 'test',
        title: 'test',
        component: HelloWorld
    },{
        path: '/cssAnimations',
        name: 'cssAnimations',
        title: 'CSS3 Animationen',
        component: CssAnimations
    },

    {
        path: '*',
        redirect: { name: 'test' },
    },
];

export default new Router({
    routes: router,
});