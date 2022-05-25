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
  vr = 0,
  a = 0

window.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode
  switch (keyCode) {
    // up
    case 38:
      vr = -5
      break

    // down
    case 40:
      vr = 5
      break

    // left
    case 37:
      a = -0.1
      break

    // right
    case 39:
      a = 0.1
      break
  }
})
window.addEventListener('keyup', (e) => {
  vx = 0
  vy = 0
  vr = 0
  a = 0
})

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
  arrow.rotation += C.toRad(vr)
  let angle = arrow.rotation
  const ax = a * Math.cos(angle)
  const ay = a * Math.sin(angle)
  vx += ax
  vy += ay

  arrow.x += vx
  arrow.y += vy

  if (arrow.x - arrow.w / 2 >= W) {
    arrow.x = -arrow.w / 2
  } else if (arrow.x + arrow.w / 2 <= 0) {
    arrow.x = W + arrow.w / 2
  }

  if (arrow.y - arrow.w / 2 >= H) {
    arrow.y = -arrow.w / 2
  } else if (arrow.y + arrow.w / 2 <= 0) {
    arrow.y = H + arrow.w / 2
  }
  arrow.render(ctx)
}

function boundaryRound() {
  window.requestAnimationFrame(() => {
    boundaryRound()
  })
  ctx.clearRect(0, 0, W, H)
  ballMove()
}
export default boundaryRound
