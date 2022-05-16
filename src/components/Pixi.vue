<template></template>

<script setup lang="ts">
import {
  Application,
  Loader,
  Texture,
  AnimatedSprite,
  Sprite,
  Graphics,
  Rectangle,
  Container,
} from "pixi.js";
const app = new Application();
document.body.appendChild(app.view);
// 用来存放外星人
let count = 0;
const aliens = [];
const alienFrames = [
  "eggHead.png",
  "flowerTop.png",
  "helmlok.png",
  "skully.png",
];

app.loader.add("src/assets/img/sprite/monsters.json").load(onAssetsLoaded);

const container = new Container();
container.x = 400;
container.y = 300;
app.stage.interactive = true;
app.stage.addChild(container);
app.ticker.add(() => {
  count += 0.01;
  for (let j = 0; j < aliens.length; j++) {
    const alien = aliens[j];
    alien.rotation += 0.1;
  }
  container.scale.x = Math.sin(count);
  container.scale.y = Math.sin(count);
  container.rotation += 0.01;
});
app.stage.on("click", () => {
  container.cacheAsBitmap = !container.cacheAsBitmap;
});
function onAssetsLoaded() {
  for (let i = 0; i < 100; i++) {
    const aliensSprite = Sprite.from(alienFrames[i % 4]);
    // aliensSprite.x = Math.random() * 400;
    // aliensSprite.y = Math.random() * 300;
    aliensSprite.x = Math.random() * 800 - 400;
    aliensSprite.y = Math.random() * 600 - 300;
    aliensSprite.tint = Math.random() * 0xffffff;
    aliensSprite.anchor.set(0.5);
    aliens.push(aliensSprite);
    container.addChild(aliensSprite);
  }
}
</script>
