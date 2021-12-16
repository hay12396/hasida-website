<template>
  <div class="screen-number-title" :class="textAlign">
    <div class="number">{{ number }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: { number: String, title: String, textAlign: "left" | "center" | "right" }
}
</script>
<style lang="less" scoped>
.screen-number-title {
  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }

  .number {
    color: #007aff;
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 4rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 3.375rem;
    color: black;
  }
}
</style>