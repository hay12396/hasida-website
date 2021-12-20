<template>
  <div class="contact">
    <div class="title-wrapper">
      Let's keep in touch
    </div>
    <div class="image-wrapper">
      <Image src="/contact/contact.png" alt="Contact me" />
    </div>

    <div class="ctas">
      <div class="cta cta1">052-7475755</div>
      <div class="cta cta1">hasida.zohar@gmail.com</div>
      <div class="cta cta1">Linkedin</div>
    </div>
  </div>
</template>
<script>
import Title from "../shared/title";
import Image from "/components/shared/image.vue";

export default {
  components: { Title, Image },
};
</script>
<style lang="less" scoped>
.contact {
  margin-top: 4.875rem;

  .title-wrapper {
    padding-left: 13%;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.086rem;
    color: #9E95BF;
    margin-bottom: 3rem;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;

    img {
      width: 700px;
      max-width: 100%;
    }
  }

  .ctas {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
      margin-top: 5rem;
    }

    .cta {
      max-width: 100%;
      width: 500px;

      background-color: #e9f1f7;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 35px;

      color: #002751;
      font-size: 3rem;
      line-height: 4.086rem;

      padding: 1.5rem;
      text-align: center;

      margin-top: 4.5rem;

      &:first-child {
        margin-top: 0;
      }

      &:last-child{
        margin-bottom: 15rem;
      }
    }
  }
}
</style>