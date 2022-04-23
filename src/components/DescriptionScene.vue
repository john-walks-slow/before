<template>
  <div class="max" :class="{ hide: !show }">
    <div id="Description" :class="{ fade: isDescriptionShow != true }">
      <b>內容介紹：</b>
      <p>
        总有一天，我们会离开这个世界。<br />
        當你說：“活着太痛苦了，再也不會好起來了”<br />
        我多想告訴你，你因為活著而擁有的魄力就在你的身體裏。<br />
        在这场展覽中，你会看到與死亡近距離接觸過的人，<br />
        他們的窗户裏藏著的故事。你會聽見見證過死亡、<br />
        經歷過痛苦、與死神擦肩過的人，他們想說的話。<br />
        落地之前，你會發現什麽？<br />
        （體驗需時約30分鐘。建議佩戴耳機。）
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
        var body = document.body; // Make the body go full screen.
        var requestMethod =
          body.requestFullScreen ||
          body.webkitRequestFullScreen ||
          body.mozRequestFullScreen ||
          body.msRequestFullScreen;
        if (requestMethod) {
          // Native full screen.
          requestMethod.call(body);
        } else if (typeof window.ActiveXObject !== "undefined") {
          // Older IE.
          // eslint-disable-next-line no-undef
          var wscript = new ActiveXObject("WScript.Shell");
          if (wscript !== null) {
            wscript.SendKeys("{F11}");
          }
        }
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
  bottom: 140px;
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
