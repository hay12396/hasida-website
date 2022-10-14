<template>
  <div class="wrapper">
    <div class="hero">
      <div class="title">Mr. Pro Shake</div>
      <div class="sub-title">
        The new way to order protein shakes,
        <br />
        <b>discover</b> a new taste every day.
      </div>

      <div class="figma-links">
        <FigmaLink @click="openProject">
          Open the <br />
          <b>Figma</b> project
        </FigmaLink>
        <div class="second-link">
          <FigmaLink @click="openClickable">
            Clickable <br />
            <b>Figma</b> project
          </FigmaLink>
        </div>
      </div>
    </div>
    <Steps />
    <div class="phones-wrapper">
      <Phones />
    </div>
  </div>
</template>
<script>
import Steps from "./steps.vue";
import Phones from "./phones.vue";
import Image from "../shared/image.vue";
import FigmaLink from "../shared/figma-link.vue";

export default {
  components: { Steps, Phones, Image, FigmaLink },
  methods: {
    openClickable() {
      window.open(
        "https://www.figma.com/proto/1oEBI4jpdVJlQS7cBGkBB6/Final-Project?node-id=536%3A34034&scaling=min-zoom&page-id=536%3A33975&starting-point-node-id=536%3A34034&show-proto-sidebar=1",
        "_blank"
      );
    },
    openProject() {
      window.open("https://www.figma.com/file/1oEBI4jpdVJlQS7cBGkBB6/Final-Project?node-id=536%3A33975",
        "_blank"
      );
    },
  },
};
</script>
<style scoped lang="less">
.wrapper {
  position: relative;

  .hero {
    padding: 1.5rem 1.5rem 0;
    @media screen and (min-width: 768px) {
      padding: 9rem 6.25rem 0 6.25rem;
    }
    .title {
      margin-top: 1.375rem;
      margin-bottom: 1rem;
      font-size: 3rem;
      color: #9e95bf;
      font-weight: 700;
      line-height: 4.086rem;
    }

    .sub-title {
      color: #9e95bf;
      font-size: 1.5rem;
      line-height: 2.043rem;
      margin-bottom: 2rem;

      b {
        font-weight: 700;
      }
    }
  }

  .phones-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .figma-links {
    color: #a259ff;
    @media screen and (min-width: 768px) {
      color: #9e95bf;
    }
    display: flex;
    margin-bottom: 2rem;

    .second-link {
      margin-left: 2rem;
    }
  }
}
</style>
