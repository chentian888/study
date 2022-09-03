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

import Bound from '../views/Canvas/bound/index.vue'
import BoundRemove from '../views/Canvas/bound/boundRemove.vue'
import BoundReset from '../views/Canvas/bound/boundReset.vue'
import boundaryRound from '../views/Canvas/bound/boundaryRound.vue'
import BoundBounce from '../views/Canvas/bound/boundBounce.vue'
import Frictional from '../views/Canvas/bound/frictional.vue'

import Mouse from '../views/Canvas/mouse/index.vue'
import MouseDrag from '../views/Canvas/mouse/drag.vue'
import MouseDragAnimate from '../views/Canvas/mouse/draganimate.vue'
import MouseThrowing from '../views/Canvas/mouse/throwing.vue'

import Tween from '../views/Canvas/tween/index.vue'
import TweenBase from '../views/Canvas/tween/base.vue'
import TweenCase1 from '../views/Canvas/tween/case1.vue'
import TweenCase2 from '../views/Canvas/tween/case2.vue'
import TweenBounce from '../views/Canvas/tween/bounce.vue'
import TweenRubberBand from '../views/Canvas/tween/rubberBand.vue'
import TwoBounce from '../views/Canvas/tween/twoBounce.vue'
import TweenManyBounce from '../views/Canvas/tween/manyBounce.vue'

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
          { path: 'round', component: boundaryRound },
          { path: 'bounce', component: BoundBounce },
          { path: 'frictional', component: Frictional }
        ]
      },
      {
        path: 'mouse',
        component: Mouse,
        children: [
          { path: 'drag', component: MouseDrag },
          { path: 'draganimate', component: MouseDragAnimate },
          { path: 'throwing', component: MouseThrowing }
        ]
      },
      {
        path: 'tween',
        component: Tween,
        children: [
          { path: 'base', component: TweenBase },
          { path: 'case1', component: TweenCase1 },
          { path: 'case2', component: TweenCase2 },
          { path: 'bounce', component: TweenBounce },
          { path: 'rubberBand', component: TweenRubberBand },
          { path: 'twoBounce', component: TwoBounce },
          { path: 'manyBounce', component: TweenManyBounce }
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
