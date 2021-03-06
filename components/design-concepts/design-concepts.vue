<template>
  <div class="design-concepts">
    <NumberedTitle
      number="08"
      title="Design: concept and sketching"
      color="dark-accent"
    />

    <div class="info">
      <div class="info1">
        <div class="title">Research synthesis:</div>
        <div class="content">
          The integration of existing knowledge and research findings pertinent
          to an issue. The aim of synthesis is to increase the generality and
          applicability of those findings and to develop new knowledge through
          the process of integration.
        </div>

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
            <Image
              src="/Desk_research/feature_prioritization.png"
              alt="feature prioritization"
            />
          </div>
          <div class="arrows">
            <Image src="/shared/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>

      <div class="info2">
        <div class="title">Crazy 8:</div>
        <div class="content">
          The integration of existing knowledge and research findings pertinent
          to an issue. The aim of synthesis is to increase the generality and
          applicability of those findings and to develop new knowledge through
          the process of integration.
        </div>
        <div class="images">
          <div class="line1">
            <Image
              src="/Crazy_8/Crazy8_live_chat.png"
              alt="themes and opportunities"
            />
            <Image
              src="/Crazy_8/Crazy8_favorite_shake.png"
              alt="themes and opportunities"
            />
            <Image
              src="/Crazy_8/Crazy8_reco.png"
              alt="themes and opportunities"
            />
          </div>

          <div class="line2">
            <Image src="/Crazy_8/3.png" alt="themes and opportunities" />
            <Image src="/Crazy_8/2.png" alt="themes and opportunities" />
            <Image src="/Crazy_8/1.png" alt="themes and opportunities" />
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
  components: { NumberedTitle, Image, UsabilityStudy },
};
</script>
<style lang="less" scoped>
.design-concepts {
  padding: 2.688rem 1.75em 0;
  @media screen and (min-width: 768px) {
    padding: 2.688rem 6.25rem 0;
  }

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
      align-items: center;
      @media screen and (min-width: 768px) {
        align-items: flex-start;
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
        display: none;
        @media screen and (min-width: 768px) {
          display: block;
        }
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
      margin-top: 1.75rem;
      @media screen and (min-width: 768px) {
        margin-top: 0;
      }
      .images {
        flex-direction: column;
        @media screen and (min-width: 768px) {
          margin-top: 4.5rem;
        }
        .line1 {
          display: flex;
          flex-direction: column;
          @media screen and (min-width: 768px) {
            flex-direction: row;
          }

          img:nth-child(2),
          img:nth-child(3) {
            display: none;
            @media screen and (min-width: 768px) {
              display: block;
            }
          }
          img:first-child {
            width: 149px;
            border: 5px solid #d4dbf9;
          }
          @media screen and (min-width: 768px) {
            img {
              height: 100px;
            }
            img:first-child {
              width: 179px;
              border-right: none;
            }
            img:nth-child(2) {
              width: 173px;
            }
            img:nth-child(3) {
              width: 177px;
            }
            img {
              border-top: 5px solid #d4dbf9;
              border-left: 5px solid #d4dbf9;
              border-bottom: 5px solid #d4dbf9;
            }
            img:nth-child(3) {
              border-right: 5px solid #d4dbf9;
            }
          }
        }

        .line2 {
          margin-top: 4.875rem;
          display: flex;
          flex-direction: column;
          @media screen and (min-width: 768px) {
            flex-direction: row;
          }
          img:first-child {
            max-width: 183px;
            @media screen and (min-width: 768px) {
              margin-right: 2.125rem;
            }
          }
          img:nth-child(2) {
            max-width: 90px;
            display: none;
            @media screen and (min-width: 768px) {
              margin-right: 2.75rem;
              display: block;
            }
          }
          img:nth-child(3) {
            max-width: 180px;
            display: none;
            @media screen and (min-width: 768px) {
              display: block;
            }
          }
        }

        .arrows {
          img {
            width: 17px;
            height: 48px;
            position: absolute;
            top: 120px;
            @media screen and (min-width: 1360px) {
              top: 128px;
            }
          }
          img:first-child {
            left: 75px;
            top: 130px;
            left: 50%;
            transform: translateX(-50%);

            @media screen and (min-width: 768px) {
              left: 75px;
              top: 120px;
              transform: none;
            }
            @media screen and (min-width: 1360px) {
              top: 128px;
            }
          }
          img:nth-child(2) {
            left: 262px;
            display: none;
            @media screen and (min-width: 768px) {
              display: block;
            }
          }
          img:nth-child(3) {
            left: 420px;
            display: none;
            @media screen and (min-width: 768px) {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>