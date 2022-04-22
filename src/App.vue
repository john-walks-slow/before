<template>
  <div class="max">
    <DescriptionScene
      :show="scene == 'Description'"
      v-on:proceedStory="proceedStory"
    />
    <AVGScene :show="scene == 'story'" />
    <BuildingScene
      :show="scene == 'Building'"
      v-on:proceedStory="proceedStory"
    />
    <StarScene :show="scene == 'Star'" v-on:proceedStory="proceedStory" />
  </div>
</template>

<script>
const STORY_LIST = ["intro", "interlude", "outro"];
import AVGScene from "./components/AVGScene.vue";
import BuildingScene from "./components/BuildingScene.vue";
import DescriptionScene from "./components/DescriptionScene.vue";
import StarScene from "./components/StarScene.vue";
export default {
  name: "App",
  components: {
    AVGScene,
    BuildingScene,
    DescriptionScene,
    StarScene,
  },
  data: function () {
    return {
      // scene: "Building",
      scene: "Description",
      story: -1,
    };
  },
  methods: {
    proceedStory: function () {
      this.story++;
      this.scene = "story";
      /*global go_to*/

      go_to(STORY_LIST[this.story]);
    },
  },
  mounted: function () {
    window.onload = () => {
      /*global load_story*/

      load_story("file", "before.json");
    };
    /* global tuesday */
    tuesday.tilt = (start = "center", end = "100%", duration = 60000) => {
      tuesday.style.backgroundPositionY = `${start}`;
      setTimeout(() => {
        tuesday.style.transition = `background-position ${duration}ms ease 0s`;
        tuesday.style.backgroundPositionY = `${end}`;
      }, 1);
    };
    tuesday.fade = () => {
      tuesday.style.transition = "background-image 3000ms ease-in 1s";
    };
    tuesday.addEventListener("intro_end", () => {
      this.scene = "Building";
    });
    tuesday.addEventListener("interlude_end", () => {
      this.scene = "Star";
    });
  },
};
</script>

<style lang="scss">
body {
  color: black;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
}
html {
  overflow: auto;
  overflow-x: hidden;
  background: black;
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
  height: 100vh;
  z-index: 99;
}
#tue_text_block {
  pointer-events: none;
  z-index: 2001 !important;
}
#tuesday.white #tue_next {
  background-color: #00000090 !important;
}
#tuesday.white #tue_text_block {
  background: transparent !important;
  bottom: 40% !important;
  left: 11% !important;
  right: initial !important;
  width: 88% !important;
  border: none !important;
}
#tuesday.white #tue_text_view {
  color: white !important;
}
// #tuesday.white #tue_next {
//   width: 100vw !important;
//   height: 100vh !important;
//   left: 0 !important;
//   bottom: 0 !important;
// }

* {
}
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
</style>
