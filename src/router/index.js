import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import AddBlog from '../views/AddBlog.vue'
import DetailBlog from '../views/DetailBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/addBlog',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/detailBlog',
    name: 'DetailBlog',
    component: DetailBlog
  },
  /* {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
