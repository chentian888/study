// 超出边界移除
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

  for (let i = 0; i < 10; i++) {
    // const r = Math.random() > 0.9 ? C.random([20, 50]) : C.random([10, 30])
    ballList.push(
      new Ball2({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 20 + 30,
        fillStyle: C.color(),
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3
      })
    )
  }
}

function ballMove(ball, index) {
  ball.x += ball.vx
  ball.y += ball.vy

  if (ball.x - ball.r >= W || ball.x + ball.r <= 0 || ball.y - ball.r >= H || ball.Y + ball.r <= 0) {
    ballList.splice(index, 1)
    console.log('移除', index, ball)
  }
  ball.render(ctx)
}

export function boundaryRemove() {
  window.requestAnimationFrame(() => {
    boundaryRemove()
  })
  ctx.clearRect(0, 0, W, H)
  // let len = ballList.length
  // while (len--) {
  //   ballMove(ballList[len], len)
  // }
  ballList.forEach(ballMove)
}
