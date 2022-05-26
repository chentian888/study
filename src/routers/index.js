import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Sf from '../views/Sf.vue'
import Createjs from '../views/Createjs.vue'
import Run from '../views/Run.vue'
import Canvas from '../views/Canvas/index.vue'
import Ball from '../views/Canvas/ball.vue'
import Bound from '../views/Canvas/bound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/sf', component: Sf },
  { path: '/createjs', component: Createjs },
  { path: '/run', component: Run },
  {
    path: '/canvas',
    component: Canvas,
    children: [
      { path: 'atan', component: Ball },
      { path: 'ball', component: Ball },
      { path: 'smooth', component: Ball },
      { path: 'linear', component: Ball },
      { path: 'pulse', component: Ball },
      { path: 'circle', component: Ball },
      { path: 'ellipse', component: Ball },
      { path: 'vector', component: Ball },
      { path: 'velocity', component: Ball },
      { path: 'gravity', component: Ball },
      { path: 'arrow', component: Ball },
      { path: 'rotate', component: Ball },
      { path: 'flowMouse', component: Ball },
      {
        path: 'bound',
        component: Bound,
        children: [
          { path: 'remove', component: Ball },
          { path: 'reset', component: Ball },
          { path: 'switch', component: Ball },
          { path: 'bounce', component: Ball }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
