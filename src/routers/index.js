import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Game from '../views/game.vue'
import Sf from '../views/sf.vue'

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
