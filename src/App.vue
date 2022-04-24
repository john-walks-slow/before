<template>
  <div class="max">
    <LoadingScene />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive include="AVGScene">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import LoadingScene from "./components/LoadingScene.vue";

// const SCENE_LIST = ["Description", "Building", "Star"];
export default {
  name: "App",
  components: {
    LoadingScene,
  },
  mounted: function () {},
};
</script>

<style lang="scss">
// @font-face {
// font-family: handwriting;
// src: url("/src/assets/余温浅浅.ttf");
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
  font-size: calc(min(4vw, 3vh));
}

body.no-scroll {
  overflow: hidden;
}
*::-webkit-scrollbar-track {
  border: 0.05vw solid black;
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
</style>
