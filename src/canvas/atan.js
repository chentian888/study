import C from './utils'
export default class MathAtant {
  constructor(props) {
    this.w = 0
    this.h = 0
    this.stage = null
    this.pos = {}
    Object.assign(this, props)
    this.pos = C.getOffset(this.stage)
  }

  drawCoord(ctx) {
    const { w, h } = this
    ctx.save()
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, h / 2)
    ctx.lineTo(w, h / 2)
    ctx.moveTo(w / 2, 0)
    ctx.lineTo(w / 2, h)
    ctx.stroke()
    ctx.restore()
    return this
  }

  addMouseMoveEvent(ctx) {
    this.stage.addEventListener('mousemove', (ev) => {
      const { w, h } = this
      const { x, y } = this.pos
      const dx = x - w / 2
      const dy = y - h / 2
      //   const angle = C.toAngle(Math.atan(dy/dx))
      const angle = C.toAngle(Math.atan2(dy, dx))
      ctx.clearRect(0, 0, w, h)
      this.drawCoord(ctx)
      ctx.beginPath()
      ctx.lineTo(w / 2, h / 2)
      ctx.lineTo(x, y)
      ctx.stroke()
      ctx.fillText(angle, x, y)
    })
    return this
  }
}
