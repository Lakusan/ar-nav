import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import SignUp from '@/views/SignUp.vue'
import MainMenu from '@/views/MainMenu.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home' 
  },
  {
    path: '/signup',
    name: 'registernewuser',
    component: SignUp
  },
  {
    path: '/MainMenu',
    name: 'MainMenu',
    component: MainMenu
  },

    
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
