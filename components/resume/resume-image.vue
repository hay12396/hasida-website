<template>
  <div class="hero">
    <div class="uxui">
      UX
      <span>UI</span>
    </div>
    <div class="info">
      <div class="image">
        <Image src="/shared/me.png" alt="Me" />
        <div class="circle"></div>
      </div>
      <div class="titles">
        <div class="portfolio">PORTFOLIO</div>
        <div class="name">Hasida Zohar</div>
        <div class="title">User Experience Designer</div>
      </div>
    </div>
  </div>
</template>
<script>
import Image from "../shared/image.vue";
export default {
  components: { Image }
}
</script>
<style scoped lang="less">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 1000px;
  }

  > div {
    flex: 1 0 100%;
    @media screen and (min-width: 768px) {
      flex: 1 0 50%;
    }
  }

  .uxui {
    font-size: 21.875rem;
    color: black;
    span {
      color: #d1c6fe;
    }
    @media screen and (min-width: 768px) {
      transform: rotate(90deg);
      position: absolute;
      top: 250px;
      left: -27%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
      margin-left: 25%;
      padding-top: 15%;
    }

    .image {
      position: relative;
      img {
        width: 340px;
        height: 400px;
        z-index: 1;
        position: relative;
      }
      .circle {
        position: absolute;
        left: 47.5%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 340px;
        height: 340px;
        background-color: #d1c6fe;
        border-radius: 100%;
        z-index: 0;
      }
    }

    .titles {
      text-align: left;

      .portfolio {
        font-size: 5.625rem;
        line-height: 7.625rem;
      }
      .name {
        font-size: 3rem;
        line-height: 4.063rem;
      }
      .title {
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 3.375rem;
      }
    }
  }
}
</style>