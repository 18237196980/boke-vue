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
	config.headers.Authorization = window.localStorage.getItem('jwt')
	return config
})
// 响应预处理
axios.interceptors.response.use(response => {
	return response.data
}, (err) => {
	return response.data
});

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Element)

router.beforeEach((to, from, next) => {
	console.log(to)
	if (to.path === '/') {
		next()
	} else {
		if (window.localStorage.getItem('jwt')) {
			next()
		} else {
			next({
				path: '/'
			})
		}
	}

})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
