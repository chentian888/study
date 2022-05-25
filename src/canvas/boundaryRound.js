// 屏幕环绕
import Arrow from './arrow2'
import C from './utils'

let ctx = null
let W = 0
let H = 0
// let ballList = []
let arrow = null
let vx = 0,
  vy = 0,
  vr = 0

export function init() {
  const canvas = document.getElementById('stage')
  ctx = canvas.getContext('2d')
  W = canvas.width = 800
  H = canvas.height = 600
  arrow = new Arrow({
    x: W / 2,
    y: H / 2,
    w: 46,
    h: 20
  }).render(ctx)
}

function ballMove() {
  // ball.x += ball.vx
  arrow.y += arrow.vy

  if (arrow.x - arrow.r >= W) {
    arrow.x = -arrow.r
  } else if (arrow.x + arrow.r <= 0) {
    arrow.x = W + arrow.r
  }

  if (arrow.y - arrow.r >= H) {
    arrow.y = -arrow.r
  } else if (arrow.y + arrow.r <= 0) {
    arrow.y = H + arrow.r
  }
  arrow.render(ctx)
}

function boundaryRound() {
  // window.requestAnimationFrame(() => {
  //   boundaryRound()
  // })
  // ctx.clearRect(0, 0, W, H)
  // ballMove()
}
export default boundaryRound
