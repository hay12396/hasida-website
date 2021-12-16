<template >
  <h3 :class="color">{{ title }}</h3>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: String,
    "color": "white" | "accent" | "dark-accent"
  }
}
</script>
<style scoped>
h3 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 3.064rem;
  margin: 0 0 1rem 0;
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