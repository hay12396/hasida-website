<template>
  <div class="figures-small">
    <Persona title="Persona 1" image="/personas/persona_1.png">
      <b>An advanced</b> trainee who is training for years and have multiple issues using shakes (he doesn’t like preparing them and he likes diversity).
    </Persona>
    <Persona title="Persona 2" image="/personas/persona_2.png">
      <b>A beginner</b> trainee who likes shakes but he is not sure what is the best protein shake taste for him. He would like to try different flavors and find the best taste.
    </Persona>
    <Persona title="Persona 3" image="/personas/persona_3.png">
      <b>An advanced</b> trainee who is recently wanted to start protein shakes because he started a new busy job and doesn’t have time for an additional meal during the day.
    </Persona>
  </div>
</template>
<script>
import Persona from "./persona.vue";

export default {
  components: { Persona }
}
</script>
<style lang="less" scoped>
.figures-small {
  padding: 0 6.25rem 0 6.25rem;
  max-width: 720px;
}
@media screen and (min-width: 768px) {
  margin-top: -57px;
}

b {
  font-weight: 700;
  color: #9e95bf;
}
</style>