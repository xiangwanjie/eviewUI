<template>
  <div>
    <e-demo></e-demo>
    <e-card imgSrc="./assets/1.jpeg" summary="vue3.0实现todolist"></e-card>
    <br />
    <e-card imgSrc="./assets/2.jpeg">0到1快速构建自己的后台管理系统</e-card>
    <br />
    <e-card imgSrc="./assets/3.jpeg" summary="快速入门Web阅读器开发">
      <template v-slot:footer>
        <p class="one">进阶 · 25236人报名</p>
        <p class="two">
          <span class="l">免费</span>
          <span class="r">收藏</span>
        </p>
      </template>
    </e-card>
    <br />
    <e-card :width="370" :imgHeight="90" imgSrc="./assets/4.png"
      >路线专为想学Vue却无从下手的人群设计，以实际项目为例，逐层深入，学透Vue。</e-card
    >
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
