import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import YjDaod from '../views/YjDaod/index.vue'
import Canvas from '../views/Canvas/index.vue'
import Ball from '../views/Canvas/ball.vue'
import Atan from '../views/Canvas/atan.vue'
import Smooth from '../views/Canvas/smooth.vue'
import Linear from '../views/Canvas/linear.vue'
import Pulse from '../views/Canvas/pulse.vue'
import Circle from '../views/Canvas/circle.vue'
import Ellipse from '../views/Canvas/ellipse.vue'
import Vector from '../views/Canvas/vector.vue'
import Velocity from '../views/Canvas/velocity.vue'
import Gravity from '../views/Canvas/gravity.vue'
import Arrow from '../views/Canvas/arrow.vue'
import Rotate from '../views/Canvas/rotate.vue'
import FlowMouse from '../views/Canvas/flowMouse.vue'

import Bound from '../views/Canvas/bound.vue'
import BoundRemove from '../views/Canvas/boundRemove.vue'
import BoundReset from '../views/Canvas/boundReset.vue'
import BoundSwitch from '../views/Canvas/boundSwitch.vue'
import BoundBounce from '../views/Canvas/boundBounce.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/yjdaod', component: YjDaod },
  {
    path: '/canvas',
    component: Canvas,
    children: [
      { path: 'atan', component: Atan },
      { path: 'ball', component: Ball },
      { path: 'smooth', component: Smooth },
      { path: 'linear', component: Linear },
      { path: 'pulse', component: Pulse },
      { path: 'circle', component: Circle },
      { path: 'ellipse', component: Ellipse },
      { path: 'vector', component: Vector },
      { path: 'velocity', component: Velocity },
      { path: 'gravity', component: Gravity },
      { path: 'arrow', component: Arrow },
      { path: 'rotate', component: Rotate },
      { path: 'flowMouse', component: FlowMouse },
      {
        path: 'bound',
        component: Bound,
        children: [
          { path: 'remove', component: BoundRemove },
          { path: 'reset', component: BoundReset },
          { path: 'switch', component: BoundSwitch },
          { path: 'bounce', component: BoundBounce }
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
