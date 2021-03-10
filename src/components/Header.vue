<template>
	<div class="h-content">
		<div class="h-title">欢迎MarkerHub的博客</div>
		<div class="h-pic">
			<img src="../assets/default_header.png" />
			<div class="h-user">{{ username }}</div>
		</div>
		<div class="h-set">
			<el-link>主页</el-link>
			<el-divider direction="vertical"></el-divider>
			<el-link type="success">发表文章</el-link>
			<el-divider direction="vertical"></el-divider>
			<el-link type="warning">退出</el-link>
		</div>
	</div>
</template>

<script>
import userUtils from '@/util/userUtils.js';
export default {
	name: 'Header',
	data() {
		return {
			username: 'Tom'
		};
	},
	created() {
		this.inits();
	},
	methods: {
		inits() {
			this.username = userUtils.getUserName() ? userUtils.getUserName() : 'Tom';
		}
	}
};
</script>

<style scoped="scoped">
.h-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
}
.h-title {
	font-weight: bolder;
	font-size: 30px;
}
.h-pic {
	margin: 20px 0 20px 0;
}
.h-pic img {
	width: 30%;
	height: 30%;
}
.h-user {
	font-size: 9px;
	color: #5b4324;
	font-weight: 300;
	margin-top: 3px;
}
.h-set {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 20px;
}
</style>
