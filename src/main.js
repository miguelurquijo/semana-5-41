import Vue from 'vue'
//import './plugins/axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

const base = axios.create({
  baseURL: 'http://localhost:3000/api'
})

Vue.prototype.$http = base;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
