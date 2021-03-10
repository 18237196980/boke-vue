import {
  getAction,
  postAction
} from '@/api/manage'

const login = (params) => postAction('/boke/user/login', params)
const blogs = (params) => postAction('/boke/blogs/list', params)


export default {
  login,
  blogs
  
}
