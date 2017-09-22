import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'bulma/css/bulma.css'
import '@/assets/font-awesome/css/font-awesome.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
