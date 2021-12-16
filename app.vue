<template>
  <Resume />
  <Hero />
  <TextWithFiguresBig />
  <TextWithFiguresSmall />
  <DeskResearch />
  <DesignConcepts />
  <TestValidation />
  <Screens />
  <Contact />
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
  components: {
    Resume,
    Hero,
    TextWithFiguresBig,
    TextWithFiguresSmall,
    DeskResearch,
    DesignConcepts,
    TestValidation,
    Screens,
    Contact
  }
}
</script>

<style>
* {
  font-family: "Open Sans";
}
html,
body {
  padding: 0;
  margin: 0 auto;
  max-width: 1360px;
  border: 1px solid #d1c6fe22;
}

ul {
  padding-left: 1.5rem;
}
</style>
