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
      this.show = false;
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
