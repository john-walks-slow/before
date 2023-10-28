<template>
  <transition name="fade">
    <div id="starBG" v-show="starBG">
      <div class="stars"></div>
      <div class="twinkling"></div>
    </div>
  </transition>
</template>

<script>
import router from "../router/index.js";
import beforeData from "../data/before.json";
// const STORY_LIST = ["intro", "interlude", "outro"];
/*global go_to*/
/*global tuesday */
/*global load_story*/
export default {
  name: "AVGScene",
  props: {
    show: Boolean,
  },
  data: function () {
    return {
      starBG: false,
      // story: 0,
    };
  },
  methods: {
    goTo(id) {
      // if (tuesday.innerHTML == "") {
      document.getElementById("tuesday").classList.remove("fade");
      go_to(id);
    },
  },

  mounted: function () {
    load_story("data", beforeData);
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
    tuesday.addEventListener("interlude_bg", () => {
      // this.starBG = true;
    });
    tuesday.addEventListener("interlude_end", () => {
      // this.starBG = false;
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
<style lang="scss" scoped>
#starBG {
  filter: brightness(2) contrast(0.89) sepia(27) hue-rotate(213deg)
    saturate(2.5);
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition-delay: 0s;
  transition: opacity 3s ease;
}

/* ==============================================================================================
SED Innovations
https://sed.am
https://mkrtchyan.ga
================================================================================================= */
#starBG {
  * {
    margin: 0;
    padding: 0;
  }
  header {
    background-color: rgba(33, 33, 33, 0.9);
    color: #ffffff;
    display: block;
    font: 14px/1.3 Arial, sans-serif;
    height: 50px;
    position: relative;
    z-index: 5;
  }
  h2 {
    margin-top: 30px;
    text-align: center;
  }
  header h2 {
    font-size: 22px;
    margin: 0 auto;
    padding: 10px 0;
    width: 80%;
    text-align: center;
  }
  header a,
  a:visited {
    text-decoration: none;
    color: #fcfcfc;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-webkit-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-moz-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-ms-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-webkit-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-moz-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-ms-keyframes move-clouds-back {
    from {
      background-position: 0;
    }
    to {
      background-position: 10000px 0;
    }
  }

  .stars,
  .twinkling,
  .clouds {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .stars {
    background: #000 url(@/assets/galaxy.png) repeat top center;
    z-index: 0;
  }

  .twinkling {
    background: transparent url(@/assets/twinkling.png) repeat top center;
    z-index: 1;

    -moz-animation: move-twink-back 200s linear infinite;
    -ms-animation: move-twink-back 200s linear infinite;
    -o-animation: move-twink-back 200s linear infinite;
    -webkit-animation: move-twink-back 200s linear infinite;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    background: transparent
      url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat
      top center;
    z-index: 3;

    -moz-animation: move-clouds-back 200s linear infinite;
    -ms-animation: move-clouds-back 200s linear infinite;
    -o-animation: move-clouds-back 200s linear infinite;
    -webkit-animation: move-clouds-back 200s linear infinite;
    animation: move-clouds-back 200s linear infinite;
  }
}
.mb-style-2 {
  max-width: 95%;
  margin: 1.5em auto;
}

.mb-style-2 p {
  margin: 0;
}

.mb-style-2 blockquote {
  padding: 0;
  margin: 0;
  background-color: transparent;
  border-left: 0px;
}

.mb-style-2 blockquote p {
  font-size: 1.3em;
  font-style: italic;
  background: #efefef;
  display: inline;
  color: #000;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
  line-height: 2em;
  box-shadow: 0 0.3em 0 #ccc;
}

.mb-style-2 .mb-attribution {
  text-align: right;
}

.mb-style-2 .mb-author {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
}

.mb-style-2 cite a {
  color: #ccc;
  font-style: italic;
}

.mb-style-2 cite a:hover {
  color: #000;
}
</style>
