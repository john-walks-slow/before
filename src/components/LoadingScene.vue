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
export default {
  name: "LoadingScene",
  data() {
    return {};
  },
  mounted: function () {},
};
</script>

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
