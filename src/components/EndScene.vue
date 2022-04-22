<template>
  <div id="BG" :class="{ hide: !show }">
    <button id="RestartButton" @click="refresh()">重新开始</button>
    <button id="CommentButton">评论（施工中）</button>
  </div>
</template>

<script>
export default {
  name: "EndScene",
  props: {
    show: Boolean,
  },
  methods: {
    refresh() {
      window.location.reload();
    },
  },
  mounted: () => {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#BG {
  background: black;
  width: 100vw;
  height: 100vh;
}
#RestartButton {
  font-size: 2em;
}
#CommentButton {
  font-size: 2em;
}
</style>
