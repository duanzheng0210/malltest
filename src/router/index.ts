import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Sort = () => import('../views/sort/Sort.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/my/My.vue')
const Detail = () => import('../views/detail/Detail.vue')


const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sort',
      name: 'Sort',
    component: Sort
    },
    {
      path: '/cart',
      name: 'Cart',
    component: Cart
    },
    {
      path: '/my',
      name: 'My',
    component: My
    },
    {
      path: '/detail/:iid',
      name: 'Detail',
    component: Detail
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
