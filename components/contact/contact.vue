<template>
  <div class="contact">
    <div class="title-wrapper">
      <Title
        title="Let's keep in touch"
        color="dark-accent"
        position="center"
      />
    </div>
    <div class="links">
      <Image src="/contact/phone.png" alt="phone" @click="call()" />
      <Image
        src="/contact/linkedin.png"
        alt="linkedin"
        @click="openLinkedIn()"
      />
      <Image src="/contact/mail.png" alt="mail" @click="openMail()" />
    </div>
  </div>
</template>
<script>
import Title from "../shared/title";
import Image from "/components/shared/image.vue";

export default {
  components: { Title, Image },
  methods: {
    call() {
      window.open("tel:0527475755");
    },
    openLinkedIn() {
      window.open("https://www.linkedin.com/in/hasida-zohar/", "_blank");
    },
    openMail() {
      window.open("mailto:hasida.zohar@gmail.com");
    },
  },
};
</script>
<style lang="less" scoped>
.contact {
  margin-top: 2rem;
  .title-wrapper {
    max-width: 419px;
    margin: 0 auto 2rem auto;
  }

  .links {
    display: flex;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    margin-bottom: 115px;
    img {
      width: 16%;
      margin-right: 2rem;
      cursor: pointer;
    }

    img:last-child {
      margin-right: 0;
    }
  }
}
</style>