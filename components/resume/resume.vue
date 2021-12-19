<template>
  <div class="resume">
    <ResumeImage />
    <!-- <ResumeInfo /> -->
  </div>
</template>
<script>
import ResumeImage from "./resume-image.vue";
import ResumeInfo from "./resume-info/resume-info.vue";
export default {
  components: { ResumeImage, ResumeInfo }
}
</script>
<style lang="less" scoped>
.resume {
  padding: 0 3.25rem;
  @media screen and (min-width: 768px) {
    padding: 0 6.25rem 5rem;
  }
}
</style>