// 超出边界回弹
import Ball2 from './ball2'
import C from './utils'
let ctx = null
let W = 0
let H = 0
let ballList = []
export function init() {
  const canvas = document.getElementById('stage')
  ctx = canvas.getContext('2d')
  W = canvas.width = 800
  H = canvas.height = 600

  for (let i = 0; i < 20; i++) {
    // const r = Math.random() > 0.9 ? C.random([20, 50]) : C.random([10, 30])
    ballList.push(
      new Ball2({
        x: C.random([0, W]),
        y: C.random([0, H]),
        r: C.random([30, 70]),
        fillStyle: C.color(),
        vx: C.random([5, -5]),
        vy: C.random([10, -10])
      })
    )
  }
}

function ballMove(ball) {
  if (ball.x + ball.r >= W) {
    ball.x = W - ball.r
    ball.vx *= -1
  }
  if (ball.x - ball.r <= 0) {
    ball.x = ball.r
    ball.vx *= -1
  }
  if (ball.y + ball.r >= H) {
    ball.y = H - ball.r
    ball.vy *= -1
  }
  if (ball.y - ball.r <= 0) {
    ball.y = ball.r
    ball.vy *= -1
  }
  ball.x += ball.vx
  ball.y += ball.vy
  ball.render(ctx)
}

export function move() {
  window.requestAnimationFrame(() => {
    move()
  })
  ctx.clearRect(0, 0, W, H)
  ballList.forEach(ballMove)
}
