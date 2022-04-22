<template>
  <div class="max" :class="{ hide: !show }">
    <div id="Description" :class="{ fade: isDescriptionShow != true }">
      <b>簡介：</b>
      <p>
        死亡是什麽樣的？沒人見過。沒人知道。但是，讀著這行字的你正活著。<br />
        有時我聽見你說：太痛苦了，一切都不會好起來！<br />
        我多想告訴你，你因為活著而擁有的魄力就在你的身體裏。<br />
        把這場展覽當作一次旅行。請你看一看，那些與死亡近距離接觸過的人，<br />
        他們的窗門裏面藏著的秘密。請你聽聽那些見證過死亡、<br />
        經歷過痛苦、與死神擦肩過的人，他們想說的話。<br />
        落地之前，你會發現什麽？
      </p>
    </div>
    <div id="BG" class="max flex">
      <img id="Avatar" :src="require('/src/assets/Avatar_Back.png')" />
      <img id="AvatarLine" :src="require('/src/assets/Avatar_Line.png')" />
      <img
        class="flex a-center"
        id="Title"
        :src="require('/src/assets/title.png')"
        :class="{ fade: isDescriptionShow == true }"
      />
    </div>
    <button
      id="ContinueButton"
      class="flex a-center button"
      :class="{ moved: isDescriptionShow == true }"
      @click="continueButton"
    >
      {{ continueText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DescriptionScene",
  props: {
    show: Boolean,
  },
  data: function () {
    return {
      isDescriptionShow: false,
      continueText: "▶",
    };
  },
  methods: {
    continueButton: function () {
      if (!this.isDescriptionShow) {
        this.isDescriptionShow = true;
        this.continueText = "開始";
      } else {
        this.$emit("proceedStory");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#Title {
  width: 50%;
  max-width: 500px;
  margin-top: 200px;
  display: block;
  z-index: 2;
  transition: opacity 1200ms, transform 1200ms, top 1200ms, bottom 1200ms;
}
#BG {
  background-color: rgb(228, 228, 228);
}
#ContinueButton {
  position: absolute;
  bottom: 200px;
  width: 100px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgb(255, 255, 255);
  transition: opacity 1200ms, transform 1200ms, top 1200ms, bottom 1200ms;
}
#ContinueButton.moved {
  bottom: 100px;
}
#AvatarLine {
  position: fixed;
  opacity: 0.3;
  left: 100px;
  width: 330px;
  align-self: center;
}
#Avatar {
  position: fixed;
  opacity: 0.3;

  right: 100px;
  width: 330px;
  align-self: center;
}
#Description {
  overflow-y: auto;
  position: absolute;
  top: 45%;
  height: 20em;
  max-height: 85vh;
  width: 100%;
  padding: 0 50px;
  text-align: center;
  line-height: 1.8;
  font-size: 1em;
  z-index: 2;
  transition: opacity 1200ms, transform 1200ms, top 1200ms, bottom 1200ms;
  top: 70px;
  /* transform: translate(0, -50%); */
  height: calc(100vh - 288px);
}
</style>
