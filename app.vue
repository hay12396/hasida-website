<template>
  <div class="header">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>
    <img src="/images/name-logo.png" alt="Hasida Zohar" />
  </div>
  <Hero />
  <TextWithFiguresSmall />
  <DeskResearch />
  <DesignConcepts />
  <TestValidation />
  <Screens />
</template>

<script>
import Resume from "./components/resume/resume.vue";
import Hero from "./components/hero/hero.vue";
import TextWithFiguresBig from "./components/text-and-figures/text-and-figures-big.vue";
import TextWithFiguresSmall from "./components/text-and-figures/text-and-figures-small.vue";
import DeskResearch from "./components/desk-research/desk-research.vue";
import DesignConcepts from "./components/design-concepts/design-concepts.vue";
import TestValidation from "./components/test-validation/text-validation.vue";
import Screens from "./components/screens/screens.vue";
import Contact from "./components/contact/contact.vue";
import Shenkar from "./components/shenkar/shenkar.vue";

export default {
  mounted() {
    let w = window.screen.width;
    let old = document.querySelector("meta[name='viewport']");
    if (old) {
      old.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";

      if (w >= 768 && w < 1360) {
        old.content =
          "width=1360, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
      }
    }
  },
  components: {
    Resume,
    Hero,
    TextWithFiguresBig,
    TextWithFiguresSmall,
    DeskResearch,
    DesignConcepts,
    TestValidation,
    Screens,
    Contact,
    Shenkar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open%20Sans&display=swap");

* {
  font-family: "Open Sans";
}

html,
body {
  padding: 0;
  margin: 0 auto;
  max-width: 100%;
  border: 1px solid #d1c6fe22;
  font-size: 14px;
}

body {
  overflow-x: hidden;
}

@media screen and (min-width: 768px) {

  html,
  body {
    max-width: 768px;
  }
}

@media screen and (min-width: 1280px) {

  html,
  body {
    max-width: 1280px;
  }
}

@media screen and (min-width: 1360px) {

  html,
  body {
    font-size: 16px;
    max-width: 1360px;
  }
}

ul {
  padding-left: 1.5rem;
}

.header {
  text-align: center;
}

.header img {
  height: 7.92vh;
  margin: 6vh 0 0.67vh;
}

@media screen and (min-width:768px) {
  .header img {
    height: 16.92vh;
    margin: 23.04vh 0 10.67vh;
  }
}

.header {
  padding: 4vw;
  max-width: 100%;
  overflow-x: hidden;
}

@media screen and (min-width:768px) {
  .header {
    padding: 0 12.6vh 0;
  }
}

.header .circle {
  border-radius: 100%;
  position: absolute;
  z-index: 1;
  display: none;
}

@media screen and (min-width:768px) {
  .header .circle {
    display: block;
  }
}

.header .circle1 {
  background-color: rgba(211, 225, 253, 0.69);
  width: 9.7vw;
  height: 9.7vw;

  left: 2.64vw;
  top: 5.3vh;

  z-index: 2;
}

.header .circle2 {
  background-color: rgba(211, 225, 253, 0.37);
  width: 9.7vw;
  height: 9.7vw;

  left: 7.42vw;
  top: 15.1vh;
}

.header .circle3 {
  background-color: rgba(209, 198, 254, 0.19);
  width: 12.64vw;
  height: 12.64vw;

  left: 25.44vw;
  top: 11.32vh;
}

.header .circle4 {
  background-color: rgba(211, 225, 253, 0.37);
  width: 9.7vw;
  height: 9.7vw;

  right: 3.3vw;
  top: 3.38vh;
}

.header .circle5 {
  background-color: rgba(209, 198, 254, 0.4);
  width: 12.64vw;
  height: 12.64vw;

  right: 11.69vw;
  top: 21.85vh;
}

.header img {
  cursor: pointer;
}
</style>
