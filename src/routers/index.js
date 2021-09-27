import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Sf from '../views/Sf.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/sf', component: Sf }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
