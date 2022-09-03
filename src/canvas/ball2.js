import C from './utils'
export default class Ball2 {
  constructor(props) {
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.r = 30
    this.fillStyle = 'rgba(57,119,224)'
    this.strokeStyle = 'rgba(0,0,0,0)'
    this.scaleX = 1
    this.scaleY = 1
    this.angle = 0
    Object.assign(this, props)
  }

  isPoint({ x, y }) {
    console.log(this.x - x, this.y - y)
    return this.r >= Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2))
  }

  render(ctx) {
    const { x, y, r, fillStyle, strokeStyle } = this
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    // ctx.scale(2, 3)
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}
