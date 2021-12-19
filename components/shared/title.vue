<template >
  <h3 :class="getClass()">{{ title }}</h3>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: String,
    "color": "white" | "accent" | "dark-accent",
    position: "center" | "left" | "right"
  },
  methods: {
    getClass() {
      return this.color + " " + this.position;
    }
  }
}
</script>
<style lang="less" scoped>
h3 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 3.064rem;
  margin: 0 0 1rem 0;
  padding: 0;

  &.center {
    text-align: center;
  }

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
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