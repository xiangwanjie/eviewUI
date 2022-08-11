<template>
  <div class="e-card" :style="width ? {width: width + 'px'} : {}">
    <div class="e-card-img" :style="imgHeight ? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="e-card-summary">{{summary}}</div>
    <div v-else class="e-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ECard",
  props: {
    // 卡片宽度
    width: {
      type: Number,
      default: 0,
    },
    // 图片资源路径
    imgSrc: {
      type: String,
      default: "",
      require: true,
    },
    // 图片高度
    imgHeight: {
      type: Number,
      default: 0,
    },
    // 卡片概要
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
