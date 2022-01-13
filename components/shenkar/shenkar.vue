<template>
  <div class="wrapper">
    <Title title="Shenkar Projects" color="dark-accent" position="center" />
    <div class="images">
      <div class="business">
        <Image src="/shenkar/bussines_card.png" alt="cards" />
      </div>
      <div class="line winera_cards">
        <Image src="/shenkar/envelop_card_purpel.png" alt="envelop" />
        <Image src="/shenkar/Right_bug_purpul.png" alt="envelop" />
      </div>
      <div class="posters">
        <Image src="/shenkar/posters_winera.png" alt="envelop" />
      </div>
      <div class="music">
        <div class="two_cups">
          <Image src="/shenkar/2_cups.png" alt="envelop" />
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
          <Image src="/shenkar/Bug.png" alt="Bug" />
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
  margin: 2rem 0;
  padding: 0 1.75rem;

  .business {
    width: 100%;
    height: calc(min(100vw, 1360px - 200px) * 0.5332);
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: calc(min(100vw, 1360px - 200px) * 0.5332);
    }
  }

  .line {
    display: flex;
  }

  .winera_cards {
    margin-bottom: 2rem;
    img:first-child {
      width: 55.5%;
      flex: 1 1 55.5%;
      margin-right: 2rem;
    }
    img:nth-child(2) {
      width: 42%;
      flex: 1 1 42%;
      margin-right: 2rem;
    }
  }

  .posters {
    margin-bottom: 2rem;
  }

  .music {
    .two_cups {
      background-color: #d4dbf9;
      margin-bottom: 2rem;
    }

    .food {
      margin-bottom: 2rem;
      img:first-child {
        width: 37.6%;
        flex: 1 1 37.6%;
        margin-right: 2rem;
        background-color: #d3e1fc;
      }
      img:nth-child(2) {
        width: 59.18%;
        flex: 1 1 59.18%;
        margin-right: 2rem;
        background-color: #cee2fd;
      }
    }

    .fredy {
      margin-bottom: 2rem;
      img:first-child {
        width: 54.52%;
        flex: 1 1 54.52%;
        margin-right: 2rem;
        background-color: #d3e1fc;
      }
      img:nth-child(2) {
        width: 42.27%;
        flex: 1 1 42.27%;
        margin-right: 2rem;
        background-color: #cee2fd;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      padding: 0 100px;
    }
  }
}
</style>