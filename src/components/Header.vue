<template>
	<div class="h-content">
		<div class="h-title">欢迎MarkerHub的博客</div>
		<div>消息：{{ msg }}</div>
		<div class="h-pic">
			<img src="../assets/default_header.png" />
			<div class="h-user">{{ username }}</div>
		</div>
		<div class="h-set">
			<el-link href="/index">主页</el-link>
			<el-divider direction="vertical"></el-divider>
			<el-link type="success" href="/addBlog">发表文章</el-link>
			<el-divider direction="vertical"></el-divider>
			<el-link type="warning" @click="logout">退出</el-link>
		</div>
	</div>
</template>

<script>
import userUtils from '@/util/userUtils.js';
export default {
	name: 'Header',
	data() {
		return {
			username: 'Tom',
			msg: ''
		};
	},
	created() {
		this.initWebSocket();
		this.inits();
	},
	methods: {
		initWebSocket() {
			var that = this;
			var userId = window.localStorage.getItem('id');
			var socket;
			// 判断当前浏览器是否支持websocket
			if (window.WebSocket) {
				socket = new WebSocket('ws://localhost:8899/websocket/' + userId);
				// 建立连接
				socket.onopen = function(ev) {
					console.log('建立连接...');
				};

				// 收到服务端回复的消息
				socket.onmessage = function(ev) {
					console.log('浏览器收到服务端的消息:' + ev.data);
					that.$message({
						message: ev.data,
						type: 'success'
					});
					// that.msg = ev.data;
				};

				// 连接断开
				socket.onclose = function(ev) {
					console.log('连接断开...');
				};

				// socket通信发生错误
				socket.onerror = function(ev) {
					console.log('socket通信发生错误...');
				};

				socket.onbeforeunload = function(ev) {
					console.log('onbeforeunload...');
					socket.close();
				};
			} else {
				console.log('不支持websocket');
			}
		},
		inits() {
			this.username = userUtils.getUserName() ? userUtils.getUserName() : 'Tom';
		},
		logout() {
			console.log('退出');
			window.localStorage.setItem('jwt', '');
			this.$router.push('/');
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
