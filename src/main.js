import Vue from 'vue'
import App from './App.vue'

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import FullCalendar from 'primevue/fullcalendar';

import router from './router'
import LoadScript from 'vue-plugin-load-script';

import AOS from 'aos'
import 'aos/dist/aos.css'



//Register component
Vue.component('Menubar', Menubar);
Vue.component('Button', Button);
Vue.component('FullCalendar', FullCalendar)
Vue.use(LoadScript);

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false


new Vue({
    created () {
        AOS.init()
    },
    render: h => h(App),
    router
}).$mount('#app')
