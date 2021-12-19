<template>
  <div class="number" :class="color">{{ number }}</div>
  <Title1 :color="color" :title="title" :position="position" />
</template>
<script>
import Title1 from "./title.vue";
export default {
  props: {
    number: String,
    title: String,
    color: "white" | "accent" | "dark-accent",
    position: "center" | "left" | "right"
  },
  components: { Title1 }
}
</script>
<style scoped lang="less">
.number {
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.625rem;
  margin: 0;
  padding: 0;
}
.white {
  color: white;
}
.accent {
  color: #d1c6fe;
}
.dark-accent {
  color: #9e95bf;
}
</style>