<template>
  <div class="figures-wrapper" :key="hackForRerendering">
    <TextWithFigure
      class="mb-1"
      figure="persona_challenge"
      number="04"
      title="Challenges"
      color="dark-accent"
      :figureStyle="getFirstFigureStyle()"
    >
      <div class="mx-1 description">
        We want the platform to be easy to use, fast and efficient for the
        trainees so that they can order during their break and the shake will
        arrive at the end of the workout.
      </div>

      <div class="mx-1 description mt-1">
        The goal of all participants training is physical growth. Shake protein
        is very important for their training. 80% of the participants want to be
        able to change the base of the shake in the app. Also, they would like
        to choose a protein shake from the list of recommendation ones.
      </div>
    </TextWithFigure>
    <TextWithFigure
      figureSide="left"
      class="mb-1"
      titleClass="d-pl-1"
      figure="persona_hypothesis"
      number="05"
      title="Hypothesis generation"
      color="dark-accent"
      :figureStyle="getSecondFigureStyle()"
    >
      <ul class="description">
        <li>Simple and intuative for the users to understand and use.</li>
        <li>
          One application which should do multiple tasks and cater all the major
          needs.
        </li>
        <li>the trainee can choose a different shake each day.</li>
        <li>
          The trainee doesn’t need to make the shake and he can use it
          instantly.
        </li>
      </ul>
    </TextWithFigure>
    <TextWithFigure
      class="m-mb-1"
      figure="persona_research"
      number="06"
      title="User research"
      color="dark-accent"
      :figureStyle="getThirdFigureStyle()"
    >
      <div class="mx-1 description">
        Conducting user research helps in understanding user’s needs,
        experiences, behaviors and goals. Creating personas helps to step out of
        ourself. It helps to recognise that different people have different
        requirements and expectations and also helps to identify for whom we are
        designing for.
      </div>
    </TextWithFigure>
  </div>
</template>
<script>
import TextWithFigure from "../shared/text-with-figure.vue";
export default {
  data: ()=>{
    return {
      hackForRerendering: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.hackForRerendering = "."
    });
  },
  components: { TextWithFigure },
  methods: {
    getFirstFigureStyle() {
      return this.isMobile() ? "margin-top:1.5rem" : "margin-top: 5rem;margin-left: 2rem;";
    },
    getSecondFigureStyle() {
      return this.isMobile() ? "" : "margin-top: 3rem;margin-right: 2rem";
    },
    getThirdFigureStyle() {
      return this.isMobile() ? "" : "margin-top: 3rem;";
    },
    isMobile() {
      return (
        typeof window !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    },
  },
};
</script>
<style lang="less" scoped>
.figures-wrapper {
  padding: 1.75rem;
  @media screen and (min-width: 768px) {
    padding: 1.75rem 6.25rem 0 6.25rem;
  }
}
.mx-1 {
  max-width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 840px;
  }
}
.mb-1,
.m-mb-1 {
  margin-bottom: 2.938rem;
}
@media screen and (min-width: 768px) {
  .m-mb-1 {
    margin-bottom: 0;
  }
}

.mt-1 {
  margin-top: 1rem;
}
.description {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.703rem;
  color: #666666;
  margin-block-end: 0;
  @media screen and (min-width: 768px) {
    margin-block-end: 1em;
  }
}
</style>
