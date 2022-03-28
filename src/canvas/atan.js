import C from './utils'
export default class MathAtant {
  constructor() {
    this.W = 800
    this.H = 600
    this.ctx = null
    this.canvas = null
    this.pos = {}
  }
  init() {
    this.canvas = document.getElementById('stage')
    this.canvas.width = this.W
    this.canvas.height = this.H
    this.ctx = this.canvas.getContext('2d')
    this.pos = C.getOffset(canvas)
    this.drawCoord()
    this.addMouseMoveEvent()
  }

  drawCoord() {
    this.ctx.save()
    this.ctx.lineWidth = 1.5
    this.ctx.beginPath()
    this.ctx.moveTo(0, this.H / 2)
    this.ctx.lineTo(this.W, this.H / 2)
    this.ctx.moveTo(this.W / 2, 0)
    this.ctx.lineTo(this.W / 2, this.H)
    this.ctx.stroke()
    this.ctx.restore()
  }

  addMouseMoveEvent() {
    this.canvas.addEventListener('mousemove', (ev) => {
      const { x, y } = this.pos
      const dx = x - this.W / 2
      const dy = y - this.H / 2
      //   const angle = C.toAngle(Math.atan(dy/dx))
      const angle = C.toAngle(Math.atan2(dy, dx))
      this.ctx.clearRect(0, 0, this.W, this.H)
      this.drawCoord()
      this.ctx.beginPath()
      this.ctx.lineTo(this.W / 2, this.H / 2)
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
      this.ctx.fillText(angle, x, y)
    })
  }
}
