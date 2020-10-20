import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  Bus from "./plugin"
Vue.use(Bus)

import Storage from "./plugin/Storage";
Vue.use(Storage)

import Dialog from "./plugin/Dialog"
Vue.use(Dialog)
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
