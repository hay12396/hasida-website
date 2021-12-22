<template>
  <div class="usability-study">
    <div class="title">Usability study:</div>
    <div class="images">
      <div class="line1">
        <Image
          src="/Usability_study/Usability_study_favorite.png"
          alt="Favorite page study"
        />
        <Image
          src="/Usability_study/Usability_study_reco.png"
          alt="Recommended page study"
        />
      </div>
      <div class="line2">
        <Image
          src="/Usability_study/Usability_study_live_chat.png"
          alt="Live chat page study"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Image from "../shared/image.vue";
export default {
  components: { Image },
};
</script>
<style lang="less" scoped>
.usability-study {
  margin-top: 2.875rem;
  .title {
    color: #666666;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.063rem;
    margin-bottom: 0.625rem;
  }

  .images {
    .line1 {
      img:first-child {
        max-width: 100%;
        @media screen and (min-width: 768px) {
          margin-right: 3.188rem;
          max-width: 617px;
        }
      }
      img:nth-child(2) {
        max-width: 70%;
        @media screen and (min-width: 768px) {
          max-width: 411px;
        }
      }
    }

    .line2 {
      margin-top: -3rem;
      margin-bottom: -4rem;
      @media screen and (min-width: 768px) {
        margin-top: 2.688rem;
        margin-bottom: 0;
      }

      img {
        max-width: 100%;
        @media screen and (min-width: 768px) {
          max-width: 615px;
        }
      }
    }
  }
}
</style>
