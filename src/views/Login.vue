<template>
	<div class="login">
		<div class="login-pic"><img src="https://www.markerhub.com/dist/images/logo/markerhub-logo.png" /></div>
		<div class="login-form">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username"><el-input v-model="ruleForm.username"></el-input></el-form-item>
				<el-form-item label="密码" prop="password"><el-input type="password" v-model="ruleForm.password"></el-input></el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import api from '@/api/index.js';
export default {
	name: 'Login',
	data() {
		return {
			ruleForm: {
				username: 'admin',
				password: '1234'
			},
			rules: {
				username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
			}
		};
	},
	methods: {
		async submitForm(formName) {
			const that = this;
			this.$refs[formName].validate(async valid => {
				if (valid) {
					const res = await api.login(that.ruleForm);
					if (res.code === 1) {
						// 登录成功。存jwt及用户信息，然后跳转到首页
						that.saveUser(res.data);
						that.$router.push('/index')
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		saveUser(data) {
			window.localStorage.setItem('id', data.id);
			window.localStorage.setItem('username', data.username);
			window.localStorage.setItem('avatar', data.avatar);
			window.localStorage.setItem('jwt', data.jwt);
			// 触发mutation
			this.$store.commit('addJwt',data.jwt);
			this.$store.commit('addUser',data);
			
			// const ss = this.$store.getters.getJwt;
		}
	}
};
</script>
<style scoped="scoped">
.login {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.login-pic {
	background-color: #b3c0d1;
	width: 100%;
}
.login-pic img {
	width: 20%;
	height: 5%;
	margin-top: 20px;
}
.login-form {
	margin-top: 30px;
	width: 20%;
}
</style>
