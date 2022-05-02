<template>
  <div id="BG" class="v-flex">
    <div class="a-center">正在加載資源 ...</div>
    <progress
      id="Progress"
      class="progress is-medium is-dark a-center"
      max="100"
    ></progress>
  </div>
</template>

<script>
import firsthand from "../data/firsthand.json";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
let images = importAll(
  require.context("../assets/", false, /\.(png|jpe?g|svg)$/)
);

export default {
  name: "LoadingScene",
  data() {
    return {};
  },
  mounted: function () {
    /*global load_story*/
    /*global tuesday*/
    window.addEventListener("load", async () => {
      load_story("file", "/before.json");
      let listener = tuesday.addEventListener("script_loaded", async () => {
        this.$emit("loaded");
        await fetch("/avg/audio/School_days.mp3");
        await fetch("/avg/audio/click.mp3");
        console.log("script loaded");
        tuesday.removeEventListener("script_loaded", listener);
        for (let f of firsthand) {
          await fetch(images[`${f.id}.png`]);
        }
        for (let i = 1; i <= 9; i++) {
          await fetch(images[`window${i}.png`]);
        }
        for (let image in images) {
          // console.log(image);
          await fetch(images[image]);
        }
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#BG {
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  z-index: 99999999;
  padding: 30vh 10vw;
}
#Progress {
  max-width: 50vw;
}
</style>
