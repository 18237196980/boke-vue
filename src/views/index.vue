<template>
	<div class="index-content">
		<Header></Header>
		<div class="content">
			<el-timeline>
				<el-timeline-item :timestamp="item.createTime" placement="top" v-for="item in blogs">
					<el-card>
						<router-link :to="{ path: 'detailBlog', query: { id: item.id } }">
							<h4>{{ item.title }}</h4>
						</router-link>
						<p>{{ item.description }}</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
			<el-pagination background layout="prev, pager, next" @current-change="pageChange" :current-page="pageNo" :page-size="pageSize" :total="total"></el-pagination>
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
			blogs: [],
			pageNo: 1,
			pageSize: 3,
			total: 0,
		};
	},
	created() {
		this.initBlogs();
	},
	methods: {
		async pageChange(pageNo) {
			console.log(pageNo);
			this.pageNo = pageNo;
			this.initBlogs();
		},
		async initBlogs() {
			let param = {
				pageNo: this.pageNo,
				pageSize: this.pageSize
			};
			let res = await api.blogs(param);
			if (res.code === 1) {
				this.blogs = res.rows;
				this.total = res.total;
			}
		}
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
	width: 50%;
	margin: 40px 0 20px -50px;
}
</style>
