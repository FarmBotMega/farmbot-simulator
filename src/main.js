import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueFullPage);

import {
  Row,
  Column
} from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')