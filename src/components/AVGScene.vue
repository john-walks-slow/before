<template>
  <div class="nothing"></div>
</template>

<script>
export default {
  name: "AVGScene",
  props: {
    show: Boolean,
  },

  mounted: () => {},
  watch: {
    show(newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue) {
        document.getElementById("tuesday").classList.remove("fade");
      } else {
        document.getElementById("tuesday").classList.add("fade");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
