<template>
  <div class="wrapper">
    <ResumeInfoExperience1 />
    <ResumeInfoEducation1 />
  </div>
</template>
<script>
import Title from "../../shared/title.vue";
import ResumeInfoExperience1 from "./resume-info-experience.vue";
import ResumeInfoEducation1 from "./resume-info-education.vue";
export default {
  components: { Title, ResumeInfoExperience1, ResumeInfoEducation1 }
}
</script>
<style scoped lang="less">
.wrapper {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
</style>