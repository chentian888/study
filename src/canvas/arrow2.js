import C from './utils'
export default class Arrow {
  constructor(props) {
    this.x = 0
    this.y = 0
    this.w = 180
    this.h = 60
    this.fillStyle = 'rgba(57,119,224)'
    this.strokeStyle = 'rgba(0,0,0,0)'
    this.rotation = 0
    this.canvas = null
    this.rotateSpeed = 1
    Object.assign(this, props)
  }

  drawArrow(ctx) {
    const { w, h } = this
    ctx.beginPath()
    ctx.moveTo(-w / 2, -h / 2)
    ctx.lineTo(w / 10, -h / 2)
    ctx.lineTo(w / 10, -h)
    ctx.lineTo(w / 2, 0)
    ctx.lineTo(w / 10, h)
    ctx.lineTo(w / 10, h / 2)
    ctx.lineTo(-w / 2, h / 2)

    ctx.closePath()
    return this
  }

  render(ctx) {
    const { x, y, fillStyle, rotation } = this
    ctx.save()
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = fillStyle
    ctx.translate(x, y)
    ctx.rotate(rotation)
    this.drawArrow(ctx)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}
