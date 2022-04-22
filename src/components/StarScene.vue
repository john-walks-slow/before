<template>
  <div id="BG" :class="{ hide: !show }">
    <h1 style="color: white; font-size: 3em">施工中</h1>
    <button style="font-size: 3em" @click="this.$emit('proceedStory')">
      進入片尾
    </button>
  </div>
</template>

<script>
export default {
  name: "StarScene",
  props: {
    show: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#BG {
  background: url("/src/assets/stars.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
