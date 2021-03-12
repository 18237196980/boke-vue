import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8899'
const err = (error) => {
    if (error.response) {
        let data = error.response.data
        const token = window.localStorage.getItem('jwt')
        console.log('------异常响应------', token)
        console.log('------异常响应code------', error.response.data.code)
        console.log('------异常响应------', error.response.status)
        switch (error.response.status) {
        case 403:
            window.localStorage.setItem('jwt', '');
            window.location.reload()
            break
        case 500:
            window.localStorage.setItem('jwt', '');
			window.location.reload()
            break
        case 404:
            
            break
        case 504:
            
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
	config.headers.Authorization = window.localStorage.getItem('jwt')
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
    return response.data
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
