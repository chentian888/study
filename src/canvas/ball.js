import C from './utils'
export default class Ball {
  constructor(props) {
    this.W = 800
    this.H = 600
    this.x = this.W / 2
    this.y = this.H / 2
    this.vx = 0
    this.vy = 0
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

  // 圆周运动
  moveCircle() {
    const _this = this
    const { W, H, ctx, r } = this
    window.requestAnimationFrame(() => {
      _this.moveCircle()
    })
    ctx.clearRect(0, 0, W, H)

    this.x = W / 2 + 150 * Math.cos(this.angle)
    this.y = H / 2 + 150 * Math.sin(this.angle)
    this.renderCircle()
    this.render()
    this.angle += 0.02
    this.angle %= Math.PI * 2
  }

  // 椭圆运动
  moveEllipse() {
    const _this = this
    const { W, H, ctx } = this
    window.requestAnimationFrame(() => {
      _this.moveEllipse()
    })
    const rx = 200,
      ry = 80
    ctx.clearRect(0, 0, W, H)
    this.x = W / 2 + rx * Math.cos(this.angle)

    this.y = H / 2 + ry * Math.sin(this.angle)
    this.renderEllipse()
    this.render()
    this.angle += 0.02
    this.angle %= Math.PI * 2
  }

  // 向量
  vector() {
    const _this = this
    const { W, H, ctx } = this
    const v = 2,
      angle = 30
    const radian = (30 * Math.PI) / 180
    window.requestAnimationFrame(() => {
      _this.vector()
    })
    ctx.clearRect(0, 0, W, H)
    this.x += v * Math.cos(radian)
    this.y += v * Math.sin(radian)
    this.render()
  }

  // 加速度 ax是加速度 v+=vx vx+=ax
  velocity() {
    const _this = this
    const { W, H, ctx, vx, vy } = this
    window.requestAnimationFrame(() => {
      _this.velocity()
    })
    ctx.clearRect(0, 0, W, H)
    const angle = 30,
      a = 0.2
    const radian = C.toRad(angle)
    const ax = a * Math.cos(radian)
    const ay = a * Math.sin(radian)

    this.x += vx
    this.y += vy
    this.vx += ax
    this.vy += ay
    this.render()
  }

  // 重力加速度
  jump() {
    const _this = this
    const { W, H, ctx, vy } = this
    const id = window.requestAnimationFrame(() => {
      _this.jump()
    })
    ctx.clearRect(0, 0, W, H)
    const ay = 0.2

    this.y += vy
    this.vy += ay
    if (this.y + this.r >= H) {
      this.y = H - this.r
      const i = Math.abs(this.vy.toFixed(2))
      console.log(i)
      if (i === 1.56) {
        window.cancelAnimationFrame(id)
      }
      this.vy *= -0.8
    }
    this.render()
  }

  // 绘制圆环
  renderCircle() {
    const { W, H, ctx } = this
    const R = 150
    ctx.save()
    ctx.beginPath()
    ctx.arc(W / 2, H / 2, R, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

  // 绘制椭圆环
  renderEllipse() {
    const { W, H, ctx } = this
    const rx = 200,
      ry = 80
    ctx.save()
    ctx.translate(W / 2, H / 2)
    ctx.beginPath()
    ctx.scale(1, 0.4)
    ctx.arc(0, 0, rx, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

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
