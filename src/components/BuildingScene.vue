<template>
  <div id="Sky">
    <!-- <button id="ContinueButton">繼續 ......</button> -->
    <p id="Message1">落地之前，點擊窗戶，聽聽他們的故事 ……</p>
    <p class="message-text" id="Message2">死亡是無法避免的…</p>
    <p class="message-text" id="Message3">我害怕死亡。</p>
    <p class="message-text" id="Message4">我愛的人，他們會離開我。</p>
    <p class="message-text" id="Message5">我想念他們。</p>
    <p class="message-text" id="Message6">活著有時很痛苦，</p>
    <p class="message-text" id="Message7">會有快樂的事情嗎？</p>
    <p class="message-text" id="Message8">我真正想要的<br /><br />是 ……</p>
    <p class="message-text" id="Message9">向下滑動進入下一幕</p>
    <img
      id="Avatar"
      src="/avg/image/Avatar_Fall_Animation.gif"
      :style="{ filter: `saturate(${scrollProgress * 0.7})` }"
    />
    <div id="clouds">
      <img class="cloud" id="Cloud1" :src="require('/src/assets/cloud.png')" />
      <img class="cloud" id="Cloud2" :src="require('/src/assets/cloud.png')" />
      <img class="cloud" id="Cloud3" :src="require('/src/assets/cloud.png')" />
    </div>
    <div>
      <img id="Building" :src="require('/src/assets/building.png')" />
      <div id="BuildingContainer">
        <img
          v-for="index in 9"
          :key="index"
          class="window"
          :src="require('/src/assets/window' + index.toString() + '.png')"
        />
      </div>
      <div id="BuildingGrid">
        <div
          v-for="index in 20"
          :key="index"
          hover="true"
          v-tooltip="{
            text: firsthand.find((f) => f.id == `firsthand${index}`)?.title,
            theme: { placement: 'top' },
          }"
          class="window_trigger data-v-tooltip arrow"
          @click="openWindow(index)"
          :id="`WindowTrigger${index}`"
        ></div>
      </div>
    </div>
    <div
      id="ContentBox"
      class="flex"
      :class="{ 'content-fade': window == false }"
    >
      <span id="BackButton" @click="closeWindow()" :class="{ hide: title }"
        >‹</span
      >
      <span id="ContentName" :class="{ hide: title }">{{
        firsthand.find((f) => f.id == `firsthand${window}`)?.title
      }}</span>
      <span id="PictureButton" @click="togglePicture()" :class="{ hide: title }"
        >👁 插圖</span
      >
      <img
        id="ContentBGContain"
        :class="{ 'view-picture': picture, 'no-transition': noTransition }"
        :src="window ? `/img/firsthand${window}.png` : ``"
        alt=""
      />
      <img
        id="ContentBG"
        :class="{ 'view-picture': title, 'no-transition': noTransition }"
        :src="window ? `/img/firsthand${window}.png` : ``"
        alt=""
      />
      <div
        id="TitleBox"
        class="a-center"
        :class="{ 'show-title': title, 'no-transition': noTransition }"
      >
        {{ firsthand.find((f) => f.id == `firsthand${window}`)?.quote }}
      </div>
      <div id="TextBox" class="a-center" :class="{ fade: picture }">
        <h1>
          {{
            firsthand
              .find((f) => f.id == `firsthand${window}`)
              ?.text.split("\n")[0]
          }}
        </h1>
        {{
          firsthand
            .find((f) => f.id == `firsthand${window}`)
            ?.text.split("\n")
            .slice(1)
            .join("\n\n")
        }}
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js";

import firsthand from "../data/firsthand.json";
let intervalId, timerId;
export default {
  name: "BuildingScene",
  props: {},
  data() {
    return {
      scrollProgress: 0,
      window: this.$route.params.id || false,
      firsthand,
      picture: false,
      title: false,
      noTransition: false,
    };
  },
  components: {},
  beforeRouteUpdate(to) {
    this.window = to.params.id;
  },
  methods: {
    openWindow(id) {
      this.window = id;
      this.title = true;
      this.picture = false;
      timerId = setTimeout(() => {
        this.title = false;
      }, 2000);

      // document.body.classList.add("no-scroll");
    },
    closeWindow() {
      this.noTransition = true;
      this.window = false;
      this.picture = false;
      this.title = false;
      timerId && clearTimeout(timerId);
      timerId = setTimeout(() => {
        this.noTransition = false;
      }, 1000);
      // document.body.classList.remove("no-scroll");
    },
    togglePicture() {
      this.picture = !this.picture;
      // document.body.classList.remove("no-scroll");
    },
    enterScene() {
      scrollTo(0, 0);
      intervalId = setInterval(() => {
        var h = document.body,
          b = document.body,
          st = "scrollTop",
          sh = "scrollHeight";
        this.scrollProgress =
          (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
        if (this.scrollProgress > 0.99) {
          router.push("/story/interlude");
          intervalId && clearInterval(intervalId);
        }
      }, 100);
    },
  },
  activated() {
    this.enterScene();
  },
  mounted() {
    this.enterScene();
  },
  deactivated() {
    intervalId && clearInterval(intervalId);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin-bottom: 1.5em;
  font-size: 1.5em;
  margin-left: -0.6em;
}
.message-text {
  opacity: 0.7;
  transition: all 1000ms;
}
@media (max-width: 700px) {
  .message-text {
    font-size: 0.8em !important;
  }
  #Message1 {
    font-size: 1em;
  }
}
#Message1 {
  position: absolute;
  font-weight: bold;
  margin: 6%;
  opacity: 0.7;

  font-size: 1.5em;
}
#Message2 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 16%;
  left: 0%;
}
#Message3 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 26%;
  left: 18%;
}
#Message4 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 40%;
  left: 5%;
}
#Message5 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 50%;
  left: 20%;
}
#Message6 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 60%;
  left: 5%;
}
#Message7 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 70%;
  left: 15%;
}
#Message8 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.5em;
  top: 90%;
  left: 5vw;
}
#Message9 {
  position: absolute;
  font-weight: bold;
  margin: 3%;
  font-size: 1.2em;
  top: 99%;
  left: 5vw;
  opacity: 0.2;
  color: white;
}
#ContentBox {
  filter: blur(0px);
  z-index: 999999;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  margin: 0px;
  padding: 0px;
  opacity: 1;
  transform: rotate(0deg) scale(1);
  background-size: cover !important;
  transition: opacity 800ms ease-in-out 0.1s, transform 1100ms 0.1s,
    filter 1500ms 0.1s;
  pointer-events: auto;
}
#ContentBox.content-fade {
  opacity: 0;
  pointer-events: none;
  transform: rotate(0deg) scale(0.1) !important;
  filter: blur(10px);
  transition: opacity 450ms ease-in-out, transform 450ms, filter 1500ms;
}
#ContentBG {
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 3;
  opacity: 0.15;
  pointer-events: none;
  transition: all 2000ms ease;
  filter: brightness(4) contrast(0.7) blur(3px);
}

#ContentBG.view-picture {
  opacity: 1;
  transition: all 1000ms;
  filter: brightness(1) contrast(1) blur(0px);
}
#ContentBGContain {
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 4;
  opacity: 0;
  transform: scale(1.3);
  pointer-events: none;
  transition: all 1200ms;
  filter: brightness(4) contrast(0.7) blur(3px);
}

#ContentBGContain.view-picture {
  opacity: 1;
  transition: all 1000ms;
  transform: scale(1);
  filter: brightness(1) contrast(1) blur(0px);
}
#BackButton {
  position: fixed;
  left: 30px;
  top: calc(10px - 0.3em);
  font-size: 1.5em;
  z-index: 999999;
  cursor: pointer;
  transition: all 1000ms;
}
#ContentName {
  position: fixed;
  left: 60px;
  top: calc(10px + 0.2em);
  font-size: 0.9em;
  z-index: 999999;
}
#PictureButton {
  position: fixed;
  right: 30px;
  top: calc(10px + 0.2em);
  font-size: 0.9em;
  z-index: 999999;
  cursor: pointer;
  transition: all 1000ms;
}
#TextBox {
  position: fixed;
  white-space: pre-line;
  // text-indent: 2em;
  // font-family: cursive;
  padding: 10vh 15vw;
  background-size: 100% 100% !important;
  // background: url("../assets/paper.png");
  color: black;
  background-color: white;
  overflow: auto;
  height: 100%;
  line-height: 2;
  font-size: 0.8em;
  overflow: auto;
  transition: all 1000ms 300ms;
}
#TitleBox {
  white-space: pre-line;
  // text-indent: 2em;
  // font-family: cursive;
  padding: 0px 5vw;
  width: 100%;
  background-size: 100% 100% !important;
  // background: url("../assets/paper.png");
  color: white;
  background-color: black;
  overflow: auto;
  line-height: 2;
  font-size: 2em;
  z-index: 9;
  overflow: auto;
  opacity: 0;
  pointer-events: none;
  position: relative;
  top: 15vh;
  transition: opacity 1500ms, top 100000ms;
}
#TitleBox.show-title {
  transition: opacity 1500ms, top 3000ms ease-in-out;
  // top: 12vh;
  opacity: 1;
}
#Sky {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  // background: linear-gradient(180deg, rgba(186, 195, 232, 0) 0%, #bac3e8 100%);
  // background: linear-gradient(
  //   180deg,
  //   rgb(255, 255, 255) 0%,
  //   #bac3e8 96%,
  //   black 98%
  // );
  background: linear-gradient(
    white 0%,

    rgb(127, 152, 252) 45%,
    hsl(260, 100%, 71%) 65%,
    red 98%,
    black 99%
  );
  border-bottom: solid black calc(calc(100vh - 200px) - 22vw);
}
#Building {
  width: 50%;
  position: relative;
  padding-top: 240px;
  margin-right: 15px;
  float: right;
  padding-bottom: 2%;
}
#BuildingContainer,
#BuildingGrid {
  width: 42%;
  position: absolute;
  top: 240px;
  right: calc(15px + 4%);
  padding-top: 6%;
}
#BuildingGrid {
  right: calc(15px + 3.7%);
}

#Avatar {
  position: fixed;
  left: 8vw;
  top: 200px;
  width: 35vw;
}
.window {
  z-index: 5;
  margin-bottom: -3vw;
}
.window_trigger {
  cursor: pointer;
  display: inline-block;
  width: 40%;
  background: transparent;
  margin: 10% 5%;
  padding-bottom: 44.5%;
}
#WindowTrigger9,
#WindowTrigger10 {
  margin-top: 23%;
  margin-bottom: -3%;
}
#ContinueButton {
  cursor: pointer;
  position: absolute;
  left: 18%;
  bottom: 30px;
  background: transparent;
  border: none;
  font-size: 2em;
}
#clouds {
  position: absolute;
  top: 0;
  left: 0;
}
.cloud {
  pointer-events: none;
}
#Cloud1 {
  position: relative;
  right: 20%;
  transform: rotate(-20deg);
  width: 150%;
  margin-bottom: 20%;
}
#Cloud2 {
  position: relative;
  // right: 20%;
  // transform: rotate(10deg);
  width: 90%;
  opacity: 0.8;
  margin-bottom: -20%;
}
#Cloud3 {
  position: relative;
  right: 10%;
  transform: rotate(-15deg);
  width: 180%;
  opacity: 0.5;
}
@-webkit-keyframes swing {
  15% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  30% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  50% {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  65% {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
  80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes swing {
  15% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  30% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  50% {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  65% {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
  80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
// .window:hover {
//   -webkit-animation: swing 1s ease;
//   animation: swing 1s ease;
//   -webkit-animation-iteration-count: 1;
//   animation-iteration-count: 1;
// }
</style>
