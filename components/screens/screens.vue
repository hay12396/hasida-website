<template>
  <div class="screens" ref="screens">
    <div class="title-wrapper">
      <Title title="Screens" color="white" position="center" />
    </div>
    <div class="images screen-images" v-if="!isMobile()">
      <div class="purple purple1"></div>
      <div class="purple purple2"></div>
      <div class="purple purple3"></div>
      <div class="circle"></div>

      <div class="image image1">
        <ScreenNumberTitle number="01" title="Sign in" textAlign="center" />
        <Image src="/Color_mockups/sign_in.png" alt="Sign in" />
      </div>

      <div class="image image2">
        <ScreenNumberTitle number="02" title="Sign up" textAlign="center" />
        <Image src="/Color_mockups/sign_up.png" alt="Sign up" />
      </div>

      <div class="image image3">
        <ScreenNumberTitle number="03" title="Favorite" textAlign="center" />
        <Image src="/Color_mockups/choose_your_favorite.png" alt="Favorite" />
      </div>

      <div class="image image4">
        <ScreenNumberTitle number="04" title="Shake" textAlign="center" />
        <Image src="/Color_mockups/orange.png" alt="Orange shake" />
      </div>

      <div class="image image5">
        <ScreenNumberTitle number="05" title="Recommended" textAlign="center" />
        <Image src="/Color_mockups/green_reco.png" alt="Recommended shakes" />
      </div>

      <div class="image image6">
        <ScreenNumberTitle number="06" title="My cart" textAlign="center" />
        <Image src="/Color_mockups/my_cart.png" alt="My cart" />
      </div>

      <div class="image image7">
        <ScreenNumberTitle number="07" title="Checkout" textAlign="center" />
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
              <Image
                src="/Color_mockups/choose_your_favorite.png"
                alt="Favorite"
              />
            </div>
            <div class="swiper-slide">
              <Image src="/Color_mockups/orange.png" alt="Orange shake" />
            </div>
            <div class="swiper-slide">
              <Image
                src="/Color_mockups/green_reco.png"
                alt="Recommended shakes"
              />
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
import Image from "../shared/image.vue";
import ScreenNumberTitle from "./screen-number-title.vue";
import Title from "../shared/title.vue";

export default {
  mounted() {
    if (this.isMobile()) {
      this.$refs.screens.classList.add("mobile");
      //init some library here
      let script = document.createElement("script");
      script.type = "text/javascript";
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
      };

      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/swiper/swiper-bundle.min.css";

      document.head.append(link);

      document.head.append(script);
    }
  },
  methods: {
    isMobile() {
      return (
        typeof window !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    },
  },
  components: { Image, ScreenNumberTitle, Title },
};
</script>
<style lang="less" scoped>
.screens {
  position: relative;
  height: 4400px;
  background-color: #d3e1fd;
  border-radius: 200px;
  padding: 2.125rem 8.188rem;
  margin-top: -300px;

  .title-wrapper {
    @media screen and (min-width: 768px) {
      margin-top: 0.5rem;
      h3 {
        font-size: 4.375rem;
        line-height: 5.996rem;
      }
    }
  }

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
        margin-top: 0.5rem;
      }

      &.image1 {
        left: 50%;
        transform: translateX(-50%);
        top: 170px;
      }
    }

    .title {
      z-index: 1;
      position: absolute;
    }

    .image2 {
      top: 1189px;
      left: 13%;
    }

    .image3 {
      top: 1277px;
      right: 13%;
    }

    .image4 {
      top: 2120px;
      left: 13%;
    }

    .image5 {
      top: 2302px;
      right: 13%;
    }

    .image6 {
      top: 3117px;
      left: 13%;
    }

    .image7 {
      top: 3444px;
      right: 13%;
    }

    .circle {
      position: absolute;
      background-color: #eaf0fc;
      border-radius: 100%;
      width: 600px;
      height: 600px;
      top: 393px;
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
        top: 806px;
        height: 630px;
      }

      &.purple2 {
        top: 2300px;
        height: 650px;
      }

      &.purple3 {
        top: 3763px;
        height: 675px;
        border-radius: 0px 0px 200px 200px;
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

  .swiper-pagination {
    bottom: 0;
  }
}
</style>
