export default class Ball {
  constructor(props) {
    this.W = 800
    this.H = 600
    this.x = this.W / 2
    this.y = this.H / 2
    this.r = 30
    this.fillStyle = 'rgba(57,119,224)'
    this.strokeStyle = 'rgba(0,0,0,0)'
    this.scaleX = 1
    this.scaleY = 1
    this.angle = 0
    this.SWING = 190
    this.ctx = null
    this.canvas = null
    Object.assign(this, props)
    this.initCanvas()
  }
  initCanvas() {
    this.canvas = document.getElementById('stage')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = this.W
    this.canvas.height = this.H
    return this
  }

  moveBetweenLeftAndRight() {
    const _this = this
    const { W, H, SWING, ctx } = this
    window.requestAnimationFrame(() => {
      _this.moveBetweenLeftAndRight()
    })

    ctx.clearRect(0, 0, W, H)
    this.x = W / 2 + Math.sin(this.angle) * SWING
    this.angle += 0.05
    this.angle %= Math.PI * 2
    this.render()
    console.log(this.ctx)
  }
  render() {
    const { ctx, x, y, r, fillStyle, strokeStyle, scaleX, scaleY } = this
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.scale(scaleX, scaleY)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}
