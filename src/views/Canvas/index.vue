<template>
  <div class="wrapper">
    <div class="menu">
      <hr />
      <h1>一.运动和三角函数</h1>
      <router-link to="/canvas/atan">atan和antan2的区别</router-link><br />
      <router-link to="/canvas/ball">绘制圆球</router-link><br />
      <router-link to="/canvas/smooth">平滑运动</router-link><br />
      <router-link to="/canvas/linear">线性运动</router-link><br />
      <router-link to="/canvas/pulse">脉冲运动</router-link><br />
      <router-link to="/canvas/circle">圆周运动</router-link><br />
      <router-link to="/canvas/ellipse">椭圆运动</router-link><br />
      <router-link to="/canvas/vector">向量</router-link><br />
      <router-link to="/canvas/velocity">加速度</router-link><br />
      <router-link to="/canvas/gravity">重力加速度</router-link><br />
      <router-link to="/canvas/arrow">绘制箭头</router-link><br />
      <router-link to="/canvas/rotate">箭头跟随鼠标方向转动</router-link><br />
      <router-link to="/canvas/flowMouse">箭头跟随鼠标</router-link><br />
      <hr />
      <h1>二.边界和摩擦</h1>
      <router-link to="/canvas/bound/remove">边界移除</router-link><br />
      <router-link to="/canvas/bound/reset">边界重置</router-link><br />
      <router-link to="/canvas/bound/round">边界环绕</router-link><br />
      <router-link to="/canvas/bound/bounce">边界回弹</router-link><br />
      <router-link to="/canvas/bound/Frictional">摩擦力</router-link><br />
      <h1>三.鼠标和绘制对象的交互</h1>
      <router-link to="/canvas/mouse/drag">拖拽绘制对象</router-link><br />
      <router-link to="/canvas/mouse/draganimate">带运动的拖拽动画</router-link><br />
      <router-link to="/canvas/mouse/throwing">投掷动画</router-link><br />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.menu {
  padding: 30px;
  width: 300px;
}
.content {
  flex: 1;
}
</style>
