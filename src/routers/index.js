import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Sf from '../views/Sf.vue'
import Createjs from '../views/Createjs.vue'
import Run from '../views/Run.vue'
import Canvas from '../views/Canvas.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/sf', component: Sf },
  { path: '/createjs', component: Createjs },
  { path: '/run', component: Run },
  { path: '/canvas', component: Canvas },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
