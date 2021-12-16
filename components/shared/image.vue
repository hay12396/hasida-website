<template>
  <img v-if="isMounted" :alt="alt" :src="getImageSrc()" />
</template>
<script>
export default {
  props: { src: String, alt: String, class: String },
  data() {
    return {
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    getImageSrc() {
      return (screen.width < 768 ? "/images/mobile" : "/images") + this.src;
    }
  }
}
</script>
<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>