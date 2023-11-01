<template>
  <div class="max">
    <div id="Description" :class="{ fade: isDescriptionShow != true }">
      <b>內容介紹：</b>
      <p>
        欢迎来到綫上展覽「落地之前」，<br />
        本展覽旨在探討「瀕死」這一主題。<br />
        你將在一個互動故事中，<br />
        閲讀許多人在生死邊緣的奇妙經歷。<br />
        我們不可避免地落向死亡，卻總是能拿出新的勇氣。<br />
        因爲活著——作爲貪婪、壓抑、失敗和變化，<br />
        本身就是幸福。<br />
        （體驗需時約20分鐘。建議佩戴耳機，橫屏瀏覽。）
      </p>
    </div>
    <div id="BG" class="max flex">
      <img id="Avatar" :src="require('@/assets/compressed/Avatar_Back.webp')" />
      <img
        id="AvatarLine"
        :src="require('@/assets/compressed/Avatar_Line.webp')"
      />
      <div id="Title" class="v-flex a-center">
        <img
          :src="require('@/assets/compressed/title.webp')"
          :class="{ fade: isDescriptionShow == true }"
        />
        <img
          id="Logline"
          :src="require('@/assets/compressed/logline.webp')"
          :class="{ fade: isDescriptionShow == true }"
        />
      </div>
    </div>

    <button
      id="ContinueButton"
      class="flex a-center button"
      :class="{
        moved: isDescriptionShow == true,
      }"
      @click="continueButton"
    >
      {{ continueText }}
    </button>
  </div>
</template>

<script>
import router from "../router/index.js";

export default {
  name: "DescriptionScene",
  props: {},
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
        router.push("/story/intro");
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
  margin-top: 20vh;
  display: block;
  z-index: 2;
  transition: opacity 1200ms, transform 1200ms, top 1200ms, bottom 1200ms;
}
#Logline {
  max-width: 90%;
  margin: 10% 10% 0 10%;
}
#BG {
  background-color: rgb(228, 228, 228);
}
#ContinueButton {
  position: absolute;
  font-size: 1em;
  bottom: 18vh;

  width: 100px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgb(255, 255, 255);
  transition: opacity 1200ms, transform 1200ms, top 1200ms, bottom 1200ms;
  // border-radius: 10px;
  // color: white;
  // background-color: rgb(105, 105, 105);
}
#ContinueButton.moved {
}
#AvatarLine {
  position: fixed;
  opacity: 0.3;
  left: 6vw;
  height: 70vh;
  align-self: center;
}
#Avatar {
  position: fixed;
  opacity: 0.3;
  transform: scale(1.08);
  right: 6vw;
  height: 70vh;
  align-self: center;
}
#Description {
  overflow-y: auto;
  position: absolute;
  top: 20vh;
  width: 100%;
  padding: 0 50px;
  text-align: center;
  line-height: 1.8;
  font-size: 1em;
  z-index: 2;
  transition: opacity 1200ms, transform 1200ms, top 1200ms, bottom 1200ms;
}
</style>
