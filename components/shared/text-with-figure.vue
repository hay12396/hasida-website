<template>
  <div class="wrapper" :class="getClass()">
    <div class="text" :class="titleClass">
      <NumberedTitle :color="color" :number="number" :title="title" />
      <slot></slot>
    </div>
    <div class="figure">
      <Image :src="getImageUrl()" :alt="figure" />
    </div>
  </div>
</template>
<script>
import NumberedTitle from "./numbered-title.vue";
import Image from "./image.vue";
export default {
  components: { NumberedTitle, Image },
  props: {
    number: String,
    title: String,
    figure: String,
    color: String,
    class: String,
    titleClass: String,
    figureSide: "left" | "right",
  },
  methods: {
    getImageUrl() {
      return "/personas/" + this.figure + ".png";
    },
    getClass() {
      return this.class + " " + this.figureSide;
    }
  }

}
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  &.left {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .figure,
  .figure img {
    width: 252px;
    height: 256px;
  }
}

@media screen and (min-width: 768px) {
  .d-pl-1 {
    padding-left: 2.5rem;
  }
}
</style>