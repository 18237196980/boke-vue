<template>
	<div class="index-content">
		<Header></Header>
		<div class="content">
			<el-timeline>
				<el-timeline-item timestamp="2018/4/12" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/12 20:46</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/3" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/3 20:46</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/2" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/2 20:46</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
import api from '@/api/index.js';
import Header from '@/components/Header';
export default {
	name: 'Index',
	components: {
		Header
	},
	data() {
		return {
			blogs: []
		};
	},
	created() {
		this.initBlogs();
	},
	methods: {
		initBlogs() {
			
		}
	}
};
</script>
<style scoped="scoped">
.index-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.content {
	width: 60%;
	margin: 40px 0 20px -50px;
}
</style>
