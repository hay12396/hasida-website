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
  background: linear-gradient(179deg, #d1c6fe40, #d3e1fd7d);
  padding: 0 3.25rem 1rem;
  margin-bottom: -1rem;
  @media screen and (min-width: 768px) {
    padding: 0 6.25rem 5rem;
    margin-bottom: 0;
    background: transparent;
  }
}
</style>