import Vue from 'vue'
import App from './App.vue'

import Menubar from 'primevue/menubar';
import router from './router'


//Register component
Vue.component('Menubar', Menubar);

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
