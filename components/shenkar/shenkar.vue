<template>
  <div class="wrapper">
    <Title title="Shenkar Projects" color="dark-accent" position="center" />
    <div class="images">
      <div class="business">
        <Image src="/shenkar/bussines_card.png" alt="cards" />
      </div>
      <div class="line winera_cards">
        <Image src="/shenkar/envelop_card_purpel.png" alt="envelop" />
        <Image src="/shenkar/Right_bug_purpul.png" alt="bag" />
      </div>
      <div class="posters">
        <Image src="/shenkar/posters_winera.png" alt="poster" />
      </div>
      <div class="music">
        <div class="two_cups">
          <Image src="/shenkar/2_cups.png" alt="cups" />
          <Image src="/shenkar/music-logo.png" alt="music logo" />
        </div>
        <div class="line food">
          <Image src="/shenkar/Popcorn.png" alt="Popcorn" />
          <Image src="/shenkar/Humburger.png" alt="Humburger" />
        </div>
        <div class="line fredy">
          <Image
            src="/shenkar/A5-Magazine-MockUp.png"
            alt="A5-Magazine-MockUp"
          />
          <Image src="/shenkar/Bug.png" alt="bag" />
        </div>
        <div class="lines">
          <Image src="/shenkar/Moovies.png" alt="Moovies" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../shared/title.vue";
import Image from "../shared/image.vue";
export default {
  components: { Title, Image },
};
</script>

<style lang="less" scoped>
.wrapper {
  margin: 1rem 0;
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
  }
  padding: 0 1.75rem;

  .images {
    margin-top: 1rem;
    @media screen and (min-width: 768px) {
      margin-top: 2rem;
    }
  }

  .business {
    width: 100%;
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 2rem;
    }
    img {
      width: 100%;
    }
  }

  .line {
    display: flex;
  }

  .winera_cards {
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 2rem;
    }
    img:first-child {
      width: 50%;
      flex: 1 1 50%;
      margin-right: 1rem;
      @media screen and (min-width: 768px) {
        margin-right: 2rem;
      }
    }
    img:nth-child(2) {
      width: 42%;
      flex: 1 1 42%;
    }
  }

  .posters {
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  .music {
    .two_cups {
      position: relative;
      background-color: #d4dbf9;
      margin-bottom: 1rem;
      @media screen and (min-width: 768px) {
        margin-bottom: 2rem;
      }
      img:nth-child(2) {
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
        width: 18%;

        @media screen and (min-width: 768px) {
          top: 1rem;
          left: 1rem;
        }
      }
    }

    .food {
      margin-bottom: 1rem;
      @media screen and (min-width: 768px) {
        margin-bottom: 2rem;
      }
      img:first-child {
        width: 37.6%;
        flex: 1 1 37.6%;
        margin-right: 1rem;
        @media screen and (min-width: 768px) {
          margin-right: 2rem;
        }
        background-color: #d3e1fc;
      }
      img:nth-child(2) {
        width: 55%;
        flex: 1 1 55%;
        background-color: #cee2fd;
      }
    }

    .fredy {
      margin-bottom: 1rem;
      @media screen and (min-width: 768px) {
        margin-bottom: 2rem;
      }
      img:first-child {
        width: 50%;
        flex: 1 1 50%;
        margin-right: 1rem;
        @media screen and (min-width: 768px) {
          margin-right: 2rem;
        }
        background-color: #d3e1fc;
      }
      img:nth-child(2) {
        width: 42.27%;
        flex: 1 1 42.27%;
        background-color: #cee2fd;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      padding: 0 100px;
      .winera_cards {
        margin-bottom: 2rem;
        img:first-child {
          width: 55.5%;
          flex: 1 1 55.5%;
        }
      }

      .food {
        margin-bottom: 2rem;
        img:nth-child(2) {
          width: 59.18%;
          flex: 1 1 59.18%;
        }
      }

      .fredy {
        margin-bottom: 2rem;
        img:first-child {
          width: 54.52%;
          flex: 1 1 54.52%;
        }
      }
    }
  }
}
</style>