import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8899'
// 请求预处理
axios.interceptors.request.use(config => {
  /* NProgress.start()
  showLoading()
  config.headers.token = window.localStorage.getItem('token')
  config.headers.uid = window.localStorage.getItem('id') */
  return config
})
// 响应预处理
axios.interceptors.response.use(response => {
  console.log(JSON.stringify(response.headers))
  return response.data
}, (err) => {
  return response.data
});

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
