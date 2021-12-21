<template>
  <div class="wrapper" :class="getClass()">
    <div class="text">
      <NumberedTitle :color="color" :number="number" :title="title" />
      <slot></slot>
    </div>
    <div class="figure" :style="figureStyle">
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
    figureStyle: String,
    figureSide: "left" | "right",
  },
  methods: {
    getImageUrl() {
      return "/personas/" + this.figure + ".png";
    },
    getClass() {
      return this.class + " " + this.figureSide;
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    &.left {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }

  .figure,
  .figure img {
    width: 152px;
    margin-left: -0.5rem;
    @media screen and (min-width: 768px) {
      width: 182px;
      height: 192px; 
      margin-left: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .d-pl-1 {
    padding-left: 2.5rem;
  }
}
</style>