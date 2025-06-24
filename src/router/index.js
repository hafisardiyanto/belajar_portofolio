import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
    },
    
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router