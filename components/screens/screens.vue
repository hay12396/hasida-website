<template>
  <div class="screens" ref="screens">
    <NumberedTitle title="Screens" color="white" number="10" />
    <div class="images">
      <div class="purple purple1"></div>
      <div class="purple purple2"></div>
      <div class="purple purple3"></div>
      <div class="circle"></div>

      <div class="image image1">
        <ScreenNumberTitle number="01" title="Sign in" textAlign="center" />
        <Image src="/Color_mockups/sign_in.png" alt="Sign in" />
      </div>

      <div class="image image2">
        <Image src="/Color_mockups/sign_up.png" alt="Sign up" />
      </div>
      <div class="title2">
        <ScreenNumberTitle number="02" title="Sign up" textAlign="left" />
      </div>

      <div class="image image3">
        <Image src="/Color_mockups/choose_your_favorite.png" alt="Favorite" />
      </div>
      <div class="title3">
        <ScreenNumberTitle number="03" title="Favorite" textAlign="right" />
      </div>

      <div class="image image4">
        <Image src="/Color_mockups/orange.png" alt="Orange shake" />
      </div>
      <div class="title4">
        <ScreenNumberTitle number="04" title="Shake" textAlign="left" />
      </div>

      <div class="image image5">
        <Image src="/Color_mockups/green_reco.png" alt="Recommended shakes" />
      </div>
      <div class="title5">
        <ScreenNumberTitle number="05" title="Recommended" textAlign="right" />
      </div>

      <div class="image image6">
        <Image src="/Color_mockups/my_cart.png" alt="My cart" />
      </div>
      <div class="title6">
        <ScreenNumberTitle number="06" title="My cart" textAlign="left" />
      </div>

      <div class="image image7">
        <Image src="/Color_mockups/check_out.png" alt="Checkout" />
      </div>
      <div class="title7">
        <ScreenNumberTitle number="07" title="Checkout" textAlign="right" />
      </div>
    </div>
  </div>
</template>
<script>
import NumberedTitle from "../shared/numbered-title.vue";
import Image from "../shared/image.vue";
import ScreenNumberTitle from "./screen-number-title.vue";
export default {
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.$refs.screens.classList.add("mobile");
      //init some library here
    }
  },
  components: { NumberedTitle, Image, ScreenNumberTitle }
}
</script>
<style lang="less" scoped>
.screens {
  position: relative;
  height: 4200px;
  background-color: #d3e1fd;
  border-radius: 200px;
  padding: 2.125rem 8.188rem;
  margin-top: -300px;

  .images {
    margin-top: 2rem;

    img {
      width: 383px;
      height: 774px;
      z-index: 1;
    }

    .image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;

      img {
        margin-top: 3.25rem;
      }

      &.image1 {
        left: 50%;
        transform: translateX(-50%);
        top: 30px;
      }
    }

    .image2 {
      top: 1044px;
      left: 135px;
    }
    .title2 {
      z-index: 1;
      position: absolute;
      left: 521px;
      top: 1268px;
    }

    .image3 {
      top: 1132px;
      left: 844px;
    }
    .title3 {
      z-index: 1;
      position: absolute;
      right: 516px;
      top: 1673px;
    }

    .image4 {
      top: 1975px;
      left: 135px;
    }
    .title4 {
      z-index: 1;
      position: absolute;
      left: 518px;
      top: 2184px;
    }

    .image5 {
      top: 2157px;
      left: 837px;
    }
    .title5 {
      z-index: 1;
      position: absolute;
      right: 517px;
      top: 2710px;
    }

    .image6 {
      top: 2972px;
      left: 131px;
    }
    .title6 {
      z-index: 1;
      position: absolute;
      left: 514px;
      top: 3176px;
    }

    .image7 {
      top: 3299px;
      left: 844px;
    }
    .title7 {
      z-index: 1;
      position: absolute;
      right: 516px;
      top: 3728px;
    }

    .circle {
      position: absolute;
      background-color: #eaf0fc;
      border-radius: 100%;
      width: 600px;
      height: 600px;
      top: 292px;
      left: 50%;
      transform: translateX(-50%);
    }

    .purple {
      background-color: #d4dbf9;
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;

      &.purple1 {
        top: 761px;
        height: 630px;
      }

      &.purple2 {
        top: 1907px;
        height: 607px;
      }

      &.purple3 {
        top: 3124px;
        height: 675px;
      }
    }
  }
}
</style>