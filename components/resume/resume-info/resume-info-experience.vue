<template>
  <div class="experience">
    <Title color="accent" title="Experience" />
    <div class="udacity">
      <b>
        Udacity online program- UX bootcamp 2021
        <br />Final project: Mr Pro Shake
      </b>
      <br />
      <span>I designed a Protein Shake Application where trainees can assemble or choose a Protein Shake online and have it delivered right to their gym at the end of their workout.</span>
      <br />
      <b>During this project i used:</b>
      <ul>
        <li>Figma for prototyping.</li>
        <li>Zeplin for assets exporting.</li>
        <li>Miro+Google docs for data research.</li>
        <li>Lookback for user interaction testing.</li>
      </ul>
    </div>

    <div>
      <b>
        Shenkar college of engeniring 2019-2021
        <br />Final project: A Boutique Winery
      </b>
      <br />
      <span>A complete brand for a company, including a logo, brand book, posters, buisness card, layouts and packaging, and a fresh Wine bottle design.</span>
    </div>

    <div>
      <b>Music Film Festival:</b>
      <br />
      <span>Include a logo, poster, layouts, packaging and a festival book.</span>
    </div>
  </div>
</template>
<script>
import Title from "../../shared/title.vue";
export default {
  components: { Title }
}
</script>
<style scoped lang="less">
.experience {
  max-width: 535px;
  font-size: 1.5rem;
  line-height: 2.043rem;
  color: #747474;
  b {
    color: #323232;
  }

  .udacity {
    ul {
      list-style: decimal;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 768px) {
    margin-right: 3rem;
  }
}
</style>