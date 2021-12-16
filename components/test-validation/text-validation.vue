<template>
  <div class="test-validation">
    <div class="part1">
      <NumberedTitle
        number="09"
        color="dark-accent"
        title="Test: validation, usability and feedback"
      />
      <div class="info">
        <div class="text">
          <div class="first">
            <div class="title">
              <b>Usability testing with LookBack:</b>
            </div>
            <div
              class="explanation"
            >Lookback is a tool for conducting live remote Moderated and Unmoderated Usability Tests. It has a real-time remote user research feature. You can communicate directly with the users and see what they see while getting they're reactions as they happen.</div>
          </div>
          <div class="second">
            <div class="title">
              <b>Test insights:</b>
            </div>
            <div class="explanation">
              Based on my data from Lookback, I found that 50% from my participants did not know where they need to click.
              <br />
              <b>My hypothesis</b> is that participants thoughts that they need to click on the cards for swipe and because of this they spend a lot of time to try to do this and they do not understand why it is not working.
              <br />
              <b>My solution</b>for this is to make the cards interactive too and to decrease the time on task.
            </div>
          </div>
        </div>
        <div class="image">
          <Image src="/Desk_research/lookback.png" alt="lookback" />
        </div>
      </div>
    </div>
    <BasicFlow />
    <LowFidelity />
  </div>
</template>
<script>
import NumberedTitle from "../shared/numbered-title.vue";
import Image from "../shared/image.vue";
import BasicFlow from "./basic-flow.vue";
import LowFidelity from "./low-fidelity.vue";
export default {
  components: { NumberedTitle, Image, BasicFlow, LowFidelity }
}
</script>
<style lang="less" scoped>
.test-validation {
  background-color: #f4f6ff;
  border-radius: 200px 200px 0px 0px;
  padding: 3.063rem 6.25rem;
  margin-top: 4.188rem;

  .part1 {
    .info {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: 768px) {
        flex-direction: row;
      }

      color: #666666;
      font-size: 1.25rem;
      line-height: 1.703rem;
      b {
        font-weight: 600;
      }

      @media screen and (min-width: 768px) {
        .text,
        .image {
          flex: 0 0 auto;
          width: 50%;
        }

        .image {
          max-width: 561px;
          margin: 1rem 0 0 3rem;
        }
      }
    }
  }
}
</style>