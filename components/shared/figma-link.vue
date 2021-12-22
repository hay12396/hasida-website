<template>
  <div class="figma-link">
    <div>
      <slot></slot>
    </div>
    <div>
      <Image src="/shared/figma.png" alt="Figma" />
    </div>
  </div>
</template>

<script>
import Image from "../shared/image.vue";
export default {
  components: { Image },
};
</script>

<style lang="less" scoped>
.figma-link {
  cursor: pointer;
  font-size: 0.625rem;
  line-height: 0.8rem;
  text-align: center;

  b {
    font-weight: 700;
  }

  img {
    margin-top: 0.5rem;
    width: 64px;
    height: 64px;
  }
}
</style>
