import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HomePage from '../components/Home.vue'
import HomePage from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
{
  path: '/contact',
  name: 'contact',
  component: Contact
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router