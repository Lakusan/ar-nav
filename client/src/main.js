import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import axios from 'axios'
import vuex from 'vuex'


Vue.config.productionTip = false




axios.defaults.baseURL = 'http://127.0.0.1:3005'





new Vue({
  vuetify,
  router,
  store,
  axios,
  vuex,

  render: h => h(App)
}).$mount('#app')

