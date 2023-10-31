<template>
  <div class="max">
    <div
      id="HelpContainer"
      class="arrow"
      v-tooltip="{
        text: '需要帮助？',
        theme: { placement: 'bottom' },
      }"
    >
      <img
        :src="require('@/assets/compressed/healthcare.webp')"
        id="Help"
        hover="true"
        @click="help = !help"
      />
    </div>
    <transition name="fade">
      <div id="Modal" class="modal" :class="{ 'is-active': help }" v-if="help">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card">
            <header class="modal-card-head">
              <p class="modal-card-title">需要幫助？</p>
              <button
                class="delete"
                aria-label="close"
                @click="help = false"
              ></button>
            </header>
            <div class="card-content">
              <div class="content" id="HelpContent">
                這是我們收集的一些心理咨詢 /
                自殺防治熱綫，若有需要請尋求幫助。<br /><br />
                <h2>香港：</h2>
                <br />999 为香港境内的紧急求救电话<br />香港撒玛利亚防止自杀会：2896
                0000.<br />生命热线[7] ：24小时热线: 2382 0000 /长者热线: 2382
                0881 / 青少年专线: 2382 0777.<br />向晴热线: 18288<br /><br />
                <h2>大陸：</h2>
                <br />青少年法律与心理咨询热线[6]：12355<br />婦女兒童心理諮詢熱線：12338<br />心理衛生熱線：12320<br />（希望24）全國生命危機干預熱線：4001619995<br />生命求助熱線危機干預熱線：023-66699199，666992999<br />北京自杀研究防治中心专线[2]
                800-810-1117 / 010-82951332<br />上海生命线[3] ：
                400-821-1215<br />上海市精神卫生中心[4] ：021-12320-5 /
                021-64387250<br />广州市心理危机干预中心[5] ：020-81899120<br />110、120、119可分别拨打到中国大陆的公安局（警察）、医院以及提供社会救助（包括自杀救助）的消防救援机构以处理紧急情况。<br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      v-if="loadTotal && loadCurrent !== loadTotal"
      class=""
      :style="{
        position: 'fixed',
        zIndex: '9999',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        background: 'black',
        color: 'white',
      }"
    >
      資源後臺加載中: {{ this.loadCurrent }} / {{ this.loadTotal }}
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <LoadingScene v-if="loading" />
      </transition>
      <keep-alive include="AVGScene">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import LoadingScene from "./components/LoadingScene.vue";
// import { Workbox } from "workbox-window";

// const SCENE_LIST = ["Description", "Building", "Star"];
export default {
  name: "App",
  components: {
    LoadingScene,
  },
  data() {
    return {
      help: false,
      loading: true,
      loadCurrent: 0,
      loadTotal: undefined,
    };
  },
  methods: {
    preload: function (r) {
      this.loadTotal = r.keys().length;
      // r.keys().forEach(async (k) => {
      //   await fetch(r(k));
      //   this.loadCurrent++;
      // });
      setInterval(() => {
        if (this.loadCurrent<this.loadTotal){this.loadCurrent++}
      }, 14);
    },
  },
  mounted: function () {
    window.addEventListener("load", () => {
      this.loading = false;
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
        window.addEventListener("beforeinstallprompt", (e) => {
          // 防止 Chrome 67 及更早版本自动显示安装提示
          // e.preventDefault();
          // 稍后再触发此事件
          window.deferredPrompt = e;
          // 更新 UI 以提醒用户可以将 App 安装到桌面
        });
      }
      this.preload(
        require.context("@/assets/compressed", true, /\.(webp|mp3|png)$/)
      );
    });
  },
};
</script>

<style lang="scss">
.card {
  height: 100%;
  overflow: auto;
}
#HelpContent {
  white-space: pre-line;
}
#HelpContainer {
  position: fixed;
  top: 3.15%;
  right: 2.9%;
  z-index: 9999999;
  width: 60px;
  height: 70px;
  padding: 8px;
  border-radius: 100%;
}
.modal {
  z-index: 9999999;
}
#Help {
  position: fixed;
  top: 3.15%;
  right: 2.9%;
  z-index: 9999999;
  /* -webkit-clip-path: circle(); */
  /* clip-path: circle(); */
  width: 60px;
  background: #ffffff;
  opacity: 0.6;
  padding: 8px;
  border-radius: 100%;
  box-shadow: 0px 2px 5px 1px #00000020;
  cursor: pointer;
  transition: all 400ms;
}
#Help:hover {
  opacity: 1;
  transform: scale(1.2);
}
// @font-face {
// font-family: handwriting;
// src: url("@/assets/余温浅浅.ttf");
// }
.no-transition {
  transition: none !important;
}
.no-color {
  filter: saturate(0);
}
div iframe {
  min-height: 100% !important;
}
iframe footer {
  visibility: hidden !important;
}
html {
  overflow: hidden;
  font-size: calc(min(4vw, 2.6vh));
}
body {
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  margin: 0;
  overflow: auto;
  overflow-x: hidden;
  background: black;
}

body.no-scroll {
  overflow: hidden;
}
*::-webkit-scrollbar-track {
  border: 0.05vw solid #222222;
  background-color: #f5f5f5;
}

*::-webkit-scrollbar {
  width: 0.5vw;
  background-color: #f5f5f5;
}

*::-webkit-scrollbar-thumb {
  background-color: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#tue_text_block {
  transition: opacity 2000ms;
}
#tuesday {
  position: fixed !important;
  left: 0;
  top: 0;
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  z-index: 99;
}
#tue_text_block {
  pointer-events: none;
  z-index: 2001 !important;
}
#tuesday.white #tue_next {
  border-radius: 0px;
  background-color: #00000090 !important;
}
#tuesday.white #tue_text_block {
  background: transparent !important;
  bottom: 35% !important;
  width: 88% !important;
  max-width: 35em !important;
  border: none !important;
}

#tuesday.white #tue_text_view {
  color: white !important;
}
#tuesday.fade {
  opacity: 0;
  pointer-events: none;
  transform: translateY(0px);
  transition: opacity 1200ms !important;
}
// #tuesday.white #tue_next {
//   width: 100vw !important;
//   height: calc(100vh - calc(100vh - 100%)) !important;
//   left: 0 !important;
//   bottom: 0 !important;
// }

.hide {
  display: none !important;
}
.fade {
  opacity: 0;
  transform: translateY(5px);
  pointer-events: none;
  transition: opacity 1200ms, transform 1200ms !important;
}
.max {
  width: 100%;
  height: 100%;
}
.v-flex {
  display: flex;
  flex-direction: column;
}
.flex,
.v-flex {
  display: flex;

  .a-center {
    margin: auto;
    align-self: center;
  }

  .a-left {
    margin-right: auto;
    align-self: center;
  }

  .a-right {
    margin-left: auto;
    align-self: center;
  }

  .a-x-center {
    margin-right: auto;
    margin-left: auto;
  }

  .a-x-left {
    margin-right: auto;
  }

  .a-x-right {
    margin-left: auto;
  }

  .a-y-center {
    align-self: center;
  }

  .a-y-top {
    align-self: flex-start;
  }

  .a-y-bottom {
    align-self: flex-end;
  }
}
.tooltip {
  display: block !important;
  z-index: 100000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-delay: 0s;
  transition: opacity 1s ease;
  opacity: 1 !important;
}

.fade-enter-from,
.fade-leave-to {
  transition-delay: 0s;
  opacity: 0 !important;
}
</style>
