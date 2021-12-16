<template>
  <div class="education">
    <Title1 color="accent" title="Education" />
    <b>UX Nanodegree 2021</b>
    <br />
    <b>Udacity</b> online programs- bootcamp.
    <br />
    <b>Graphic Designer 2019-2021</b>
    <br />
    <b>Shenkar</b> College of Engineering and Design, Tel Aviv.
    <br />
    <b>Economics and management 2011-2014</b>
    Ashkelon Academic College.
    <Title1 color="accent" title="Languages" />Hebrew, English and Russian.
    <Title1 color="accent" title="Contact" />
    <a href="tel: 052-7475755">052-7475755</a>
    <br />
    <a href="mailto: hasida.zohar@gmail.com">hasida.zohar@gmail.com</a>
    <br />
    <a href="https://www.linkedin.com/in/hasida.zohar">www.linkedin.com/in/hasida.zohar</a>
  </div>
</template>
<script>
import Title1 from "../../shared/title.vue";

export default {
  components: { Title1 }
}
</script>
<style scoped lang="less">
.education {
  max-width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 535px;
  }
  font-size: 1.5rem;
  line-height: 2.043rem;
  color: #747474;
  b {
    color: #323232;
  }
}
</style>