<template>
  <div class="steps">
    <div class="step-1">
      <div class="step-number">01</div>
      <NumberedTitle number="01" title="About project" color="white" />
      <div
        class="explanation"
      >Today, trainees purchase a package (2-3 months) of protein in one flavor that they must use for a long time and they also need to prepare it at home (there is no option to prepare it before). We solve this problem by an app where you can order a protein shake up to the training place with a wide range of flavors so that the trainee can choose a different smoothie each day and thus vary the flavors.</div>
    </div>
    <div class="step-2">
      <div class="step-number">02</div>
      <NumberedTitle number="02" title="What i have done" color="white" />
      <div class="explanation">
        <ul>
          <li>Researched on designing for age 20+</li>
          <li>Conducted user research</li>
          <li>Generated user personas</li>
          <li>Created wireframes</li>
          <li>Made prototypes</li>
          <li>Made testes in Lookback</li>
        </ul>
      </div>
    </div>
    <div class="step-3">
      <div class="step-number">03</div>
      <NumberedTitle number="03" title="Method of approach" color="white" />
      <div class="explanation">
        <div class="column">
          <div>
            <b>Inspiration</b>
          </div>
          <div>User research Interview & questionare Hypothesis generation Secondary research Analogous Inspiration</div>
        </div>
        <div class="column">
          <div>
            <b>Ideation</b>
          </div>
          <div>Braindumping Creating insights How Might We Top 5 considartions Creating guidlines Rapid prototyping</div>
        </div>
        <div class="column">
          <div>
            <b>Implementation</b>
          </div>
          <div>Information architecture High fidelity prototype</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title1 from "../shared/title.vue";
import NumberedTitle from "../shared/numbered-title.vue";
export default {
  components: { Title1, NumberedTitle }
}
</script>
<style lang="less">
.steps {
  position: relative;
  background: #d1c6fe;
  color: white;
  padding: 1.75rem;
  @media screen and (min-width: 768px) {
    padding: 188px 6.25rem 60px 6.25rem;
    border-radius: 0px 0px 200px 200px;
  }

  .step-number {
    position: absolute;
    font-size: 15.625rem;
    color: rgba(255, 255, 255, 0.2);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    line-height: 21.25rem;
    font-weight: bold;
  }

  .step-1 {
    position: relative;
    margin-bottom: 3rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
    .step-number {
      left: -9%;
      top: -72px;

      @media screen and (min-width: 768px) {
        top: -49px;
      }

      @media screen and (min-width: 1360px) {
        top: -186px;
      }
    }
  }

  .step-2 {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 9.375rem;
    }
    .step-number {
      left: -9%;
      top: -72px;

      @media screen and (min-width: 768px) {
        top: 30%;
        left: 23%;
      }

      @media screen and (min-width: 1360px) {
        top: 40%;
        left: 27%;
      }
    }
  }

  .explanation {
    max-width: 360px;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.703rem;
  }

  .step-3 {
    position: relative;

    @media screen and (min-width: 768px) {
      margin: 0 10% 5rem 24%;
      width: 70%;
    }
    .step-number {
      left: -9%;
      top: -72px;

      @media screen and (min-width: 768px) {
        top: 0;
        left: -37%;
      }
    }

    .explanation {
      justify-content: space-between;
      max-width: 100%;
      .column {
        margin-top: 1rem;
        font-size: 1.25rem;
        line-height: 1.703rem;
        flex: 0 0 auto;

        b {
          font-size: 1.5rem;
          line-height: 2.043rem;
        }
      }

      @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .column {
          margin-top: 0;
          width: 30%;
        }
      }
    }
  }
}
</style>