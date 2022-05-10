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

  // 平滑运动-左右运动
  moveBetweenLeftAndRight() {
    const _this = this
    const swing = 190
    const { W, H, ctx } = this
    window.requestAnimationFrame(() => {
      _this.moveBetweenLeftAndRight()
    })

    ctx.clearRect(0, 0, W, H)
    this.x = W / 2 + Math.sin(this.angle) * swing
    this.angle += 0.05
    this.angle %= Math.PI * 2
    this.render()
    console.log(this.ctx)
  }

  // 线性运动-正旋波运动
  moveUpAndDown() {
    const _this = this
    const { W, H, ctx } = this
    const swing = 90
    window.requestAnimationFrame(() => {
      _this.moveUpAndDown()
    })
    ctx.clearRect(0, 0, W, H)
    this.x += 2
    this.y = H / 2 + Math.sin(this.angle) * swing
    this.angle += 0.05
    this.angle %= Math.PI * 2
    this.render()
  }

  // 脉冲运动-放大缩小
  scaleXY() {
    const _this = this
    const { W, H, ctx } = this
    const swing = 1

    window.requestAnimationFrame(() => {
      _this.scaleXY()
    })
    ctx.clearRect(0, 0, W, H)

    this.r += Math.sin(this.angle) * swing
    this.angle += 0.05
    this.angle %= Math.PI * 2
    this.render()
  }

  moveCircle() {
    const _this = this
    const { W, H, ctx, r } = this
    window.requestAnimationFrame(() => {
      _this.moveCircle()
    })
    ctx.clearRect(0, 0, W, H)

    this.x = W / 2 + 150 * Math.cos(this.angle)
    console.log(this.x)
    this.renderCircle()
    this.render()
    
  }
  renderCircle() {
    const { W, H, ctx } = this
    ctx.save()
    ctx.beginPath()
    ctx.arc(W / 2, H / 2, 150, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }
  renderEllipse() {}
  render() {
    const { ctx, x, y, r, fillStyle, strokeStyle, scaleX, scaleY } = this
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.scale(2, 3)
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}
