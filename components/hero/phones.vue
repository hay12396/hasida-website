<template>
  <div class="wrapper">
    <div class="background"></div>
    <div class="phone phone1">
      <Image
        src="/Color_mockups/orange_reco.png"
        alt="Recommended shake"
        class="img"
      />
    </div>
    <div class="phone phone2">
      <Image
        src="/Color_mockups/choose_your_favorite.png"
        alt="Favorites"
        class="img"
      />
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
.wrapper {
  width: 821px;
  height: 1267px;
  position: relative;

  .background {
    background-color: #d3e1fd;
    border-radius: 100px 0px 0px 100px;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 77%;
  }

  .phone {
    position: absolute;
    transform: translateY(-50%);

    width: 392px;
    height: 792px;
  }
  .phone1 {
    top: 60%;
    left: 40%;
  }

  .phone2 {
    top: 50%;
    left: 0%;
  }

  @media screen and (min-width: 768px) {
    .phone2 {
      left: 8%;
    }
  }

  @media screen and (min-width: 768px) {
    .phone2 {
      left: 0%;
    }
  }
}
</style>