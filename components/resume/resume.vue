<template>
  <div class="resume">
    <ResumeImage />
    <ResumeInfo />
  </div>
</template>
<script>
import ResumeImage from "./resume-image.vue";
import ResumeInfo from "./resume-info/resume-info.vue";
export default {
  components: { ResumeImage, ResumeInfo }
}
</script>
<style scoped>
.resume {
  padding: 0 6.25rem;
}
</style>