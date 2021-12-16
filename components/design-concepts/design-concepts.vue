<template>
  <div class="design-concepts">
    <NumberedTitle number="08" title="Design: concept and sketching" color="dark-accent" />

    <div class="info">
      <div class="info1">
        <div class="title">Research synthesis:</div>
        <div
          class="content"
        >The integration of existing knowledge and research findings pertinent to an issue. The aim of synthesis is to increase the generality and applicability of those findings and to develop new knowledge through the process of integration.</div>

        <div class="images">
          <div class="image1">
            <div class="italic">themes and opportunities</div>
            <Image
              src="/Desk_research/themes_and_opportunities.png"
              alt="themes and opportunities"
            />
          </div>
          <div class="image2">
            <div class="italic">feature prioritization</div>
            <Image src="/Desk_research/feature_prioritization.png" alt="feature prioritization" />
          </div>
          <div class="arrows">
            <Image src="/shared/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>

      <div class="info2">
        <div class="title">Crazy 8:</div>
        <div
          class="content"
        >The integration of existing knowledge and research findings pertinent to an issue. The aim of synthesis is to increase the generality and applicability of those findings and to develop new knowledge through the process of integration.</div>
        <div class="images">
          <div class="line1">
            <Image src="/Crazy_8/Crazy8_live_chat.png" alt="themes and opportunities" />
            <Image src="/Crazy_8/Crazy8_favorite_shake.png" alt="themes and opportunities" />
            <Image src="/Crazy_8/Crazy8_reco.png" alt="themes and opportunities" />
          </div>

          <div class="line2">
            <Image src="/Crazy_8/1.png" alt="themes and opportunities" />
            <Image src="/Crazy_8/2.png" alt="themes and opportunities" />
            <Image src="/Crazy_8/3.png" alt="themes and opportunities" />
          </div>

          <div class="arrows">
            <Image src="/shared/arrow.png" alt="arrow" />
            <Image src="/shared/arrow.png" alt="arrow" />
            <Image src="/shared/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>
    </div>

    <UsabilityStudy />
  </div>
</template>
<script>
import NumberedTitle from "../shared/numbered-title.vue";
import Image from "../shared/image.vue";
import UsabilityStudy from "./usability-study.vue";
export default {
  components: { NumberedTitle, Image, UsabilityStudy }
}
</script>
<style lang="less" scoped>
.design-concepts {
  padding: 2.688rem 6.25rem 0 6.25rem;

  .info {
    color: #666666;

    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    .title {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.043rem;
    }
    .content {
      font-size: 1.25rem;
      line-height: 1.703rem;
    }

    .images {
      position: relative;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }

      .italic {
        font-style: italic;
        font-size: 1rem;
        line-height: 1.375rem;
        margin-bottom: 1.125rem;
      }

      .image1 {
        max-width: 215px;
        @media screen and (min-width: 768px) {
          margin-right: 5.5rem;
        }
      }

      .image2 {
        max-width: 199px;
      }
    }

    .info1 {
      .arrows {
        img {
          position: absolute;
          width: 17px;
          height: 48px;
          transform: rotate(-90deg);
          left: 250px;
          top: 94px;
        }
      }
    }

    .info2 {
      .images {
        margin-top: 4.5rem;
        flex-direction: column;

        .line1 {
          img {
            border-top: 5px solid #d4dbf9;
            border-left: 5px solid #d4dbf9;
            border-bottom: 5px solid #d4dbf9;
            height: 121px;
          }
          img:first-child {
            max-width: 179px;
          }
          img:nth-child(2) {
            max-width: 173px;
          }
          img:nth-child(3) {
            max-width: 173px;
            border-right: 5px solid #d4dbf9;
          }
        }

        .line2 {
          margin-top: 4.875rem;

          img:first-child {
            max-width: 183px;
            @media screen and (min-width: 768px) {
              margin-right: 3.125rem;
            }
          }
          img:nth-child(2) {
            max-width: 90px;
            @media screen and (min-width: 768px) {
              margin-right: 2.75rem;
            }
          }
          img:nth-child(3) {
            max-width: 180px;
          }
        }

        .arrows {
          display: none;
          @media screen and (min-width: 768px) {
            display: block;
          }
          img {
            width: 17px;
            height: 48px;
            position: absolute;
            top: 150px;
          }
          img:first-child {
            left: 75px;
            top: 150px;
          }
          img:nth-child(2) {
            left: 270px;
          }
          img:nth-child(3) {
            left: 420px;
          }
        }
      }
    }
  }
}
</style>