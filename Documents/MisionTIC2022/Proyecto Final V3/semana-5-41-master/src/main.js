import Vue from 'vue'
//import './plugins/axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
/*
const axiosConfig = {
  baseUrl: 'https://glacial-everglades-74306.herokuapp.com',
  timeout:3000,
}

Vue.prototype.$axios = axios.create(axiosConfig)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

**/
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

