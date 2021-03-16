import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jwt: '',
		user: {}
	},
	mutations: {
		addJwt(state, jwt) {
			state.jwt = jwt
		},
		addUser(state, user) {
			state.user = user
		},
		removeJwt(state) {
			state.jwt = ''
		}
	},
	actions: {
		
	},
	modules: {
		
	},
	getters: {
		getJwt: state => {
			return state.jwt
		},
		getUser: state => {
			return state.user
		}
	}
})
