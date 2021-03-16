import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8899'
const err = (error) => {
	console.log(error.response)
	if (error.response) {
		let data = error.response.data
		const token = window.localStorage.getItem('jwt')
		const err_msg = error.response.data.message
		console.log('------异常响应------', error.response.status)
		console.log('------异常响应提示------', err_msg)
		switch (error.response.status) {
			case 500:
				setTimeout(()=>{
					router.replace({
						path: '/',
					})
					window.localStorage.setItem('jwt', '');
				},500)
				Element.Message({
					message: err_msg.split(":")[1],
					type: 'warning'
				});
				break
			case 401:
				break
			default:
				break
		}
	}
	return Promise.reject(error)
}

// 请求预处理
axios.interceptors.request.use(config => {
	config.headers.authorization = window.localStorage.getItem('jwt')
	return config
})
// 响应预处理
/* axios.interceptors.response.use(response => {
	// console.log('response.data:'+JSON.stringify(response.data))
	return response.data
}, (err) => {
	return response.data
}); */

axios.interceptors.response.use((response) => {
	const auth = response.headers.authorization
	if (auth) {
		window.localStorage.setItem('jwt', auth);
	}
	const res = response.data;
	switch (res.code) {
		case -1:
			Element.Message({
				message: res.message,
				type: 'warning'
			});
			window.localStorage.setItem('jwt', '');
			router.replace({
				path: '/',
			})
			break
		default:
			break
	}
	return res
}, err)

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Element)

router.beforeEach((to, from, next) => {
	// console.log(to)
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
