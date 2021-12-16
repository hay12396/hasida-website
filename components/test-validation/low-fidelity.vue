<template>
  <div class="low-fidelity">
    <Title1 title="Low fidelity prototype" color="dark-accent" />
    <div class="images" ref="images">
      <Image src="/Low_fidelity_mockups/check_out.png" alt="Check out" />
      <Image src="/Low_fidelity_mockups/choose_your_favorite.png" alt="Choose your favorites" />
      <Image src="/Low_fidelity_mockups/favorite.png" alt="Favorite" />
      <Image src="/Low_fidelity_mockups/live_chat.png" alt="Live chat" />
      <Image src="/Low_fidelity_mockups/my_cart.png" alt="My cart" />
      <Image src="/Low_fidelity_mockups/sign_in-.png" alt="Sign in" />
      <Image src="/Low_fidelity_mockups/sign_up.png" alt="Sign up" />
      <Image src="/Low_fidelity_mockups/recommended.png" alt="recommended" />
    </div>
  </div>
</template>
<script>
import Title1 from "../shared/title.vue";
import Image from "../shared/image.vue";
export default {
  components: { Title1, Image },
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.$refs.images.classList.add("mobile");
      //init some library here
    }
  },
}
</script>
<style lang="less" scoped>
.low-fidelity {
  margin: 2.688rem 0 20rem;

  .images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    img {
      margin-right: 3%;
      width: 22.7%;
      margin-bottom: 2rem;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
    &.mobile {
    }
  }
}
</style>