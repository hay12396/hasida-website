<template>
  <div class="screens" ref="screens">
    <NumberedTitle title="Screens" color="white" number="10" v-if="isMobile()" />
    <div class="images screen-images" v-if="!isMobile()">
      <div class="purple purple1"></div>
      <div class="purple purple2"></div>
      <div class="purple purple3"></div>
      <div class="circle"></div>

      <div class="image image1">
        <ScreenNumberTitle number="01" title="Sign in" textAlign="center" />
        <Image src="/Color_mockups/sign_in.png" alt="Sign in" />
      </div>

      <div class="title title2">
        <ScreenNumberTitle number="02" title="Sign up" textAlign="left" />
      </div>
      <div class="image image2">
        <Image src="/Color_mockups/sign_up.png" alt="Sign up" />
      </div>

      <div class="title title3">
        <ScreenNumberTitle number="03" title="Favorite" textAlign="right" />
      </div>
      <div class="image image3">
        <Image src="/Color_mockups/choose_your_favorite.png" alt="Favorite" />
      </div>

      <div class="title title4">
        <ScreenNumberTitle number="04" title="Shake" textAlign="left" />
      </div>
      <div class="image image4">
        <Image src="/Color_mockups/orange.png" alt="Orange shake" />
      </div>

      <div class="title title5">
        <ScreenNumberTitle number="05" title="Recommended" textAlign="right" />
      </div>
      <div class="image image5">
        <Image src="/Color_mockups/green_reco.png" alt="Recommended shakes" />
      </div>

      <div class="title title6">
        <ScreenNumberTitle number="06" title="My cart" textAlign="left" />
      </div>
      <div class="image image6">
        <Image src="/Color_mockups/my_cart.png" alt="My cart" />
      </div>

      <div class="title title7">
        <ScreenNumberTitle number="07" title="Checkout" textAlign="right" />
      </div>
      <div class="image image7">
        <Image src="/Color_mockups/check_out.png" alt="Checkout" />
      </div>
    </div>

    <div class="mobile-images" v-if="isMobile()">
      <div class="carousel gallery">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Image src="/Color_mockups/sign_in.png" alt="Sign in" />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/sign_up.png" alt="Sign up" />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/choose_your_favorite.png" alt="Favorite" />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/orange.png" alt="Orange shake" />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/green_reco.png" alt="Recommended shakes" />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/my_cart.png" alt="My cart" />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/check_out.png" alt="Checkout" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
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
    if (this.isMobile()) {
      this.$refs.screens.classList.add("mobile");
      //init some library here
      debugger;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";

      script.onload = () => {

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

      }


      let link = document.createElement('link');
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/swiper/swiper-bundle.min.css";

      document.head.append(link);

      document.head.append(script);
    }
  },
  methods: {
    isMobile() {
      return typeof window !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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

    .title {
      z-index: 1;
      position: absolute;
    }

    .image2 {
      top: 1044px;
      left: 135px;
    }
    .title2 {
      left: 521px;
      top: 1268px;
    }

    .image3 {
      top: 1132px;
      left: 844px;
    }
    .title3 {
      right: 516px;
      top: 1673px;
    }

    .image4 {
      top: 1975px;
      left: 135px;
    }
    .title4 {
      left: 518px;
      top: 2184px;
    }

    .image5 {
      top: 2157px;
      left: 837px;
    }
    .title5 {
      right: 517px;
      top: 2710px;
    }

    .image6 {
      top: 2972px;
      left: 131px;
    }
    .title6 {
      left: 514px;
      top: 3176px;
    }

    .image7 {
      top: 3299px;
      left: 844px;
    }
    .title7 {
      right: 516px;
      top: 3842px;
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
  .mobile-images {
    img {
      margin: 0 0 2rem;
      max-height: 800px;
    }
  }
  &.mobile {
    padding: 1.75rem;
    border-radius: 0;
    margin-top: 0;
    height: auto;
    .swiper-slide {
      display: flex;
      justify-content: center;
    }
    .images {
      display: none;
    }
  }
}
</style>