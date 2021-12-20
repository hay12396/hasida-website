<template>
  <Resume />
  <Hero />
  <TextWithFiguresBig />
  <TextWithFiguresSmall />
  <DeskResearch />
  <DesignConcepts />
  <TestValidation />
  <Screens />
  <!-- <Contact /> -->
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
  },
};
</script>

<style>
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
</style>
