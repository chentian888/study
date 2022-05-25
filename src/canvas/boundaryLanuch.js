// 超出边界重置
import Ball2 from './ball2'
import C from './utils'
let ctx = null
let W = 0
let H = 0
let ballList = []
let g = 0.05
export function init() {
  const canvas = document.getElementById('stage')
  ctx = canvas.getContext('2d')
  W = canvas.width = 800
  H = canvas.height = 600

  for (let i = 0; i < 150; i++) {
    // const r = Math.random() > 0.9 ? C.random([20, 50]) : C.random([10, 30])
    ballList.push(
      new Ball2({
        x: W / 2,
        y: H,
        r: Math.random() > 0.9 ? C.random([30, 50]) : C.random([15, 30]),
        fillStyle: C.color(),
        vx: C.random([-3, 3]),
        vy: C.random([0, -10])
      })
    )
  }
}

function ballMove(ball) {
  ball.x += ball.vx
  ball.y += ball.vy
  ball.vy += g
  if (ball.x - ball.r >= W || ball.x + ball.r <= 0 || ball.y - ball.r >= H || ball.Y + ball.r <= 0) {
    ball.x = W / 2
    ball.y = H
    ball.vx = C.random([-3, 3])
    ball.vy = C.random([0, -10])
  }
  ball.render(ctx)
}

function boundaryRemove() {
  window.requestAnimationFrame(() => {
    boundaryRemove()
  })
  ctx.clearRect(0, 0, W, H)
  ballList.forEach(ballMove)
}
export default boundaryRemove
