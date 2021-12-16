<template>
  <div class="wrapper">
    <div class="hero">
      <div class="title">Mr. Pro Shake</div>
      <div class="sub-title">
        The new way to order protein shakes,
        <br />
        <b>discover</b> a new taste every day.
      </div>
    </div>
    <Steps />
    <div class="phones-wrapper">
      <Phones />
    </div>
  </div>
</template>
<script>
import Steps from "./steps.vue";
import Phones from "./phones.vue";

export default {
  components: { Steps, Phones }
}
</script>
<style scoped lang="less">
.wrapper {
  position: relative;
  .hero {
    padding: 9rem 6.25rem 0 6.25rem;
    .title {
      margin-top: 1.375rem;
      font-size: 3rem;
      color: #9e95bf;
      font-weight: bold;
    }

    .sub-title {
      color: #9e95bf;
      font-size: 1.5rem;
      line-height: 2.043rem;
      margin-bottom: 144px;
    }
  }

  .phones-wrapper {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>