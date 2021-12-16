<template>
  <div class="persona">
    <div class="title">{{ title }}</div>
    <div class="image-and-text">
      <div class="image">
        <Image :src="image" :alt="title" />
      </div>
      <div class="text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Image from "../shared/image.vue";
export default {
  props: { title: String, image: String },
  components: { Image }
}
</script>
<style lang="less" scoped>
.persona {
  margin-bottom: 2.188rem;

  .title {
    color: #666666;
    font-size: 1.5rem;
    line-height: 2.043rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .image-and-text {
    display: flex;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    .image {
      margin-right: 1.25rem;
      &,
      img {
        width: 121px;
        height: 116px;
        min-width: 121px;
        min-height: 116px;
      }
    }

    .text {
      font-size: 1.25rem;
      line-height: 1.703rem;
      color: #666666;
    }
  }
}
</style>