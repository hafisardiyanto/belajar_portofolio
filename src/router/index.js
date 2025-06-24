import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HomePage from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'HomePage',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router