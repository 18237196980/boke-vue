<template>
	<div class="index-content">
		<Header></Header>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="标题" prop="title"><el-input v-model="ruleForm.title"></el-input></el-form-item>
				<el-form-item label="描述" prop="description"><el-input type="textarea" v-model="ruleForm.description"></el-input></el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import api from '@/api/index.js';
import Header from '@/components/Header';
export default {
	name: 'AddBlog',
	components: {
		Header
	},
	data() {
		return {
			ruleForm: {
				title: '',
				description: ''
			},
			rules: {
				title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
				description: [{ required: true, message: '请输入描述', trigger: 'blur' }]
			}
		};
	},
	created() {
	},
	methods: {
		async submitForm(formName) {
			const that = this;
			this.$refs[formName].validate(async valid => {
				if (valid) {
					const res = await api.addEditBlog(that.ruleForm);
					if (res.code === 1) {
						// 登录成功。然后跳转到首页
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
	}
};
</script>
<style scoped="scoped">
.index-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.content {
	width: 30%;
	margin: 40px 0 20px -50px;
}
</style>
