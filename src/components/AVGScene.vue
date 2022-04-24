<template>
  <section></section>
</template>

<script>
import router from "../router/index.js";
// const STORY_LIST = ["intro", "interlude", "outro"];
/*global go_to*/
/*global load_story*/
/* global tuesday */
export default {
  name: "AVGScene",
  props: {
    show: Boolean,
  },
  data: function () {
    return {
      loaded: false,
      // story: 0,
    };
  },
  methods: {
    goTo(id) {
      // if (tuesday.innerHTML == "") {
      if (!this.loaded) {
        console.log("creation");
        load_story("file", "/before.json");
        let listener = tuesday.addEventListener("script_loaded", () => {
          this.loaded = true;
          console.log("loaded");
          this.goTo(id);
          tuesday.removeEventListener("script_loaded", listener);
        });
      } else {
        document.getElementById("tuesday").classList.remove("fade");
        go_to(id);
      }
    },
  },

  mounted: function () {
    tuesday.tilt = (start = "center", end = "100%", duration = 60000) => {
      tuesday.style.backgroundPositionY = `${start}`;
      setTimeout(() => {
        tuesday.style.transition = `background-position ${duration}ms ease 0s`;
        tuesday.style.backgroundPositionY = `${end}`;
      }, 1);
    };
    tuesday.tiltX = (start = "20%", end = "100%", duration = 60000) => {
      tuesday.style.backgroundPositionX = `${start}`;
      setTimeout(() => {
        tuesday.style.transition = `background-position ${duration}ms ease 0s`;
        tuesday.style.backgroundPositionX = `${end}`;
      }, 1);
    };
    tuesday.fade = () => {
      tuesday.style.transition = "background-image 3000ms ease-in";
    };
    tuesday.transition = () => {
      tuesday.style.transition = "all 2000ms ease-in";
    };

    tuesday.addEventListener("intro_end", () => {
      router.push("/building");
    });
    tuesday.addEventListener("interlude_end", () => {
      router.push("/star");
    });
    tuesday.addEventListener("outro_end", () => {
      router.push("/end");
    });
    // this.goTo(this.$route.params.id);
  },

  activated() {
    this.goTo(this.$route.params.id);
  },
  beforeRouteUpdate(to) {
    this.goTo(to.params.id);
  },
  beforeRouteLeave() {
    console.log("leave");
    document.getElementById("tuesday").classList.add("fade");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
