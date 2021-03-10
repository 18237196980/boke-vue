
const getUserName = (self) => {
	let username = ''
	let l_name = window.localStorage.getItem("username")
	if (l_name) {
		username = l_name
	}
	return username
}

const getAvatar = () => {
	let avatar = ''
	let l_avatar = window.localStorage.getItem("avatar")
	if (l_avatar) {
		avatar = l_avatar
	}
	return avatar
}

const getJwt = () => {
	let jwt = ''
	let l_jwt = window.localStorage.getItem("jwt")
	if (l_jwt) {
		jwt = l_jwt
	}
	return jwt
}

export default {
	getUserName,
	getAvatar,
	getJwt
}
