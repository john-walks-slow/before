<template>
  <div id="BG" class="v-flex" :class="{ fade: !show }">
    <div class="a-center">正在加載資源 ...</div>
    <progress
      id="Progress"
      class="progress is-medium is-dark a-center"
      max="100"
    ></progress>
  </div>
</template>

<script>
export default {
  name: "LoadingScene",
  data() {
    return {
      show: true,
    };
  },
  mounted: function () {
    window.addEventListener("load", () => {
      /*global load_story*/

      this.show = false;
      load_story("file", "before.json");
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
  height: 100vh;
  z-index: 9999999;
  padding: 30vh 10vw;
}
#Progress {
  max-width: 50vw;
}
</style>
