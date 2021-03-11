import {
  getAction,
  postAction
} from '@/api/manage'

const login = (params) => postAction('/boke/user/login', params)
const blogs = (params) => postAction('/boke/blog/list', params)
const addEditBlog = (params) => postAction('/boke/blog/addEditBlog', params)
const getBolgById = (params) => getAction('/boke/blog/getBolgById', params)


export default {
  login,
  blogs,
  addEditBlog,
  getBolgById
  
}
