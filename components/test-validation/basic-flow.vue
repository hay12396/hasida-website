<template>
  <div class="basic-flow">
    <Title1 title="Basic user flow" color="dark-accent" />
    <div class="image">
      <Image src="/Desk_research/Basic_user_flow.png" alt="Basic user flow" />
    </div>
  </div>
</template>
<script>
import Title1 from "../shared/title.vue";
import Image from "../shared/image.vue";
export default {
  components: { Title1, Image }
}
</script>
<style lang="less" scoped>
.basic-flow {
  margin-top: 2.688rem;

  .image {
    max-width: 100%;
    margin-top: 2rem;
  }
}
</style>