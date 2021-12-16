<template>
  <div class="desk-research">
    <NumberedTitle number="07" title="Desk research" color="dark-accent" />
    <div class="graphs">
      <div class="graph1">
        <div
          class="italic"
        >For each of the following features, rate the option that is relevant to you:</div>
        <Image src="/Desk_research/Graph_1.png" alt="Features rating" />
        <div class="results">
          <Title1 title="Key findings" color="dark-accent" />
          <ul>
            <li>All participants drink a protein shake because it helps them supplement the amount of protein they need.</li>
            <li>They are interested in a platform through which they can order a protein shake, each time in a different flavor.</li>
            <li>The goal of all participants training is physical growth.</li>
          </ul>
        </div>
      </div>
      <div class="graph2">
        <div class="italic">How many times did you drink a protein shake last week?</div>
        <Image src="/Desk_research/Graph_2.png" alt="Features rating" />
        <div class="results">
          <Title1 title="Pain points" color="dark-accent" />
          <ul>
            <li>Once a trainee bought a shake, he is forced to use the same flavor for a long time.</li>
            <li>Trainees doesn’t like the process of making the shakes (and cleaning afterwards).</li>
            <li>Trainees will now be able to use the shake instantly after the workout (instead of use it only after they get home & make it).</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NumberedTitle from "../shared/numbered-title.vue";
import Image from "../shared/image.vue";
import Title1 from "../shared/title.vue";
export default {
  components: { NumberedTitle, Image, Title1 }
}
</script>
<style lang="less" scoped>
.desk-research {
  padding: 1rem 6.25rem 0 6.25rem;

  .graphs {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    .italic {
      font-style: italic;
      font-size: 1rem;
      line-height: 1.362rem;
      margin-bottom: 2.25rem;
    }

    .graph1 {
      max-width: 509px;
      @media screen and (min-width: 768px) {
        margin-right: 4.625rem;
      }

      .results {
        margin-top: 2.688rem;
      }
    }

    .graph2 {
      .italic {
        margin-bottom: 2.75rem;
      }
      img {
        max-width: 285px;
      }
      .results {
        margin-top: 4.788rem;
      }
    }
  }
}
</style>