<template>
  <div class="hero">
    <div class="website-project-figma-link">
      <FigmaLink @click="openWebsiteProject">
        Website <br />
        <b>Figma</b> project
      </FigmaLink>
    </div>
    <div class="uxui">
      <span>UX</span>
      <span>UI</span>
    </div>
    <div class="info">
      <Image src="/me.png" alt="me" />
      <div class="titles">
        <div class="portfolio">PORTFOLIO</div>
        <div class="description">
          Hi, I'm Hasida Zohar
          <br />a Graphic Designer &<br class="mobile-only" />
          UX specialist. <br />I'd like to combine my two biggest loves, design
          and psychology, to create something amazing with you. <br />Skills:
          Illustrator, Photoshop, InDesign, Sketch, Figma, Zeplin, Miro,
          Lookback and more.
        </div>
      </div>
    </div>

    <div class="shapes">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
      <div class="circle circle5"></div>
      <div class="circle circle6"></div>
      <div class="circle circle7"></div>
      <div class="circle circle8"></div>

      <div class="square"></div>
      <div class="square2"></div>

      <div class="triangular triangular1"></div>
      <div class="triangular triangular2"></div>
    </div>
  </div>
</template>
<script>
import Image from "../shared/image.vue";
import FigmaLink from "../shared/figma-link.vue";
import Image1 from "../shared/image.vue";
export default {
  components: { Image, FigmaLink, Image1 },
  methods: {
    openWebsiteProject() {
      window.open(
        "https://www.figma.com/file/1oEBI4jpdVJlQS7cBGkBB6/Final-Project?node-id=703%3A40528",
        "_blank"
      );
    },
  },
};
</script>
<style scoped lang="less">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 1450px;
  }

  >div {
    flex: 1 0 100%;

    @media screen and (min-width: 768px) {
      flex: 1 0 50%;
    }
  }

  .uxui {
    display: none;
    font-size: 21.875rem;
    color: black;

    span:nth-child(2) {
      color: #d1c6fe;
    }

    @media screen and (min-width: 768px) {
      display: block;
      transform: rotate(90deg);
      position: absolute;
      top: 303px;
      left: -20%;
      z-index: 10;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 11rem;

    img {
      width: 50vw;
    }

    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-left: 20%;
      justify-content: flex-start;

      img {
        width: 37vw;
      }
    }

    .titles {
      position: relative;
      z-index: 1;
      margin-top: 3rem;
      text-align: center;

      @media screen and (min-width: 768px) {
        text-align: left;
        margin-top: -2rem;
      }

      .portfolio {
        font-size: 3.625rem;
        line-height: 4.625rem;
        font-weight: 400;
        margin-top: -3rem;
        text-align: center;

        @media screen and (min-width: 768px) {
          line-height: 7.625rem;
          font-size: 5.625rem;
          margin-top: 0;
        }
      }

      .description {
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 2.5rem;
        text-align: center;
        max-width: 550px;

        @media screen and (min-width: 768px) {
          font-size: 2rem;
          line-height: 3.064rem;
        }
      }
    }
  }

  .shapes {
    display: none;
    position: absolute;

    @media screen and (min-width: 768px) {
      display: block;
      width: 1360px;
      height: 1360px;
      top: 0;
      left: 0;
      margin-left: -6.25rem;

      .circle,
      .square,
      .triangular {
        position: absolute;
      }

      .circle {
        border-radius: 100%;
      }

      .triangular {
        width: 0;
        height: 0;
      }

      .circle1 {
        background-color: #d3e1fdb0;

        top: 36px;
        left: 37px;
        width: 132px;
        height: 132px;
      }

      .circle2 {
        background-color: #d3e1fd5e;

        top: 111px;
        left: 102px;
        width: 132px;
        height: 132px;
      }

      .circle3 {
        background-color: rgba(209, 198, 254, 0.19);

        top: 71px;
        left: 421px;
        width: 172px;
        height: 172px;
      }

      .circle4 {
        background-color: rgba(209, 198, 254, 0.4);

        top: 153px;
        right: 169px;
        width: 172px;
        height: 172px;
      }
    }

    .circle5 {
      background-color: rgba(211, 225, 253, 0.37);

      top: 59px;
      right: 26px;
      width: 132px;
      height: 132px;
    }

    .circle6 {
      background-color: #f4f6ff;

      top: 598px;
      right: 72px;
      width: 69px;
      height: 69px;
    }

    .circle7 {
      background-color: #f4f6ff;

      top: 272px;
      left: 69px;
      width: 69px;
      height: 69px;
    }

    .circle8 {
      top: 895px;
      right: 316px;
      width: 260px;
      height: 260.63px;

      background: rgba(211, 225, 253, 0.41);
    }

    .square {
      background-color: #f4f6ff;

      top: 382px;
      left: 385px;
      width: 80px;
      height: 80px;
    }

    .square2 {
      top: 1273px;
      left: 100px;
      width: 141px;
      height: 47.11px;
      background: #f4f6ff;
      position: absolute;
    }

    .triangular1 {
      transform: rotate(180deg);

      top: 717px;
      left: 420px;

      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-bottom: 70px solid rgba(211, 225, 253, 0.46);
    }

    .triangular2 {
      transform: rotate(90deg);

      top: 827px;
      right: 91px;

      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
      border-bottom: 140px solid rgba(209, 198, 254, 0.42);
    }
  }

  .website-project-figma-link {
    position: absolute;
    top: 1rem;
    left: -3rem;
    z-index: 15;
    color: #a259ff;
    padding: 1rem;

    @media screen and (min-width: 768px) {
      color: #9e95bf;
      left: 70px;
      top: 207px;
    }
  }

  .mobile-only {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>
