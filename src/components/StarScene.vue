<template>
  <div class="max">
    <div id="BG">
      <div class="stars"></div>
      <div class="twinkling"></div>
    </div>
    <button id="ContinueButton" @click="goOutro">下一幕</button>
    <transition name="fade">
      <div id="StarTitle" v-show="first">
        點擊漂浮在星空中的話語…… 听听它们的声音
      </div>
    </transition>
    <div id="Galaxy" class="max">
      <canvas class="max" id="GalaxyCanvas" ref="canvas">
        <p>
          Anything in here will be replaced on browsers that support the canvas
          element
        </p>
        <ul>
          <li v-for="index in 14" :key="index">
            <a href="javascript:void(0);" @click="openModal(index)">{{
              secondhand[index - 1].title.split(" / ")[0]
            }}</a>
          </li>
        </ul>
      </canvas>
    </div>
    <transition name="fade">
      <div
        id="Modal"
        class="modal"
        :class="{ 'is-active': modal }"
        v-if="modal"
      >
        <div class="modal-content" id="CardBox">
          <div class="card" id="SecondhandCard">
            <button
              class="delete"
              aria-label="close"
              @click="closeModal()"
            ></button>
            <div class="card-content">
              <img
                id="BookImage"
                :src="require(`@/assets/compressed/secondhand${modal}.webp`)"
              />

              <p class="title is-4">
                {{ secondhand[modal - 1].title.split(" / ")[0] }}
              </p>
              <p class="subtitle is-6">
                {{
                  secondhand[modal - 1].title.slice(
                    secondhand[modal - 1].title.indexOf("/") + 2
                  )
                }}
              </p>

              <div class="content" id="SecondhandContent">
                <p>{{ secondhand[modal - 1].description }}</p>

                <div class="mb-style-2">
                  <blockquote cite="http://www.gutenberg.org/ebooks/11">
                    <p>
                      {{ secondhand[modal - 1].quote }}
                    </p>
                  </blockquote>
                  <!-- <div class="mb-attribution">
                <p class="mb-author">
                  {{
                    secondhand[modal-1].title.slice(
                      secondhand[modal-1].title.indexOf("/") + 2
                    )
                  }}
                </p>
                <cite
                  ><a href="http://www.gutenberg.org/ebooks/11">
                    {{ secondhand[modal-1].title.split(" / ")[0] }}</a
                  ></cite
                >
              </div> -->
                </div>
              </div>

              <!-- <img id="CardImage" :src="images[`secondhandcard${modal-1}.png`]" /> -->
            </div>
            <p id="Review">{{ secondhand[modal - 1].review }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import router from "../router/index.js";
import secondhand from "../data/secondhand.json";
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
export default {
  name: "StarScene",
  props: {
    show: Boolean,
  },
  methods: {
    goOutro() {
      router.push("/story/outro");
    },
    openModal(id = 1) {
      router.push("/star/" + id.toString());
      this.modal = id;
      this.first = false;
    },
    closeModal() {
      router.push("/star");
      this.modal = false;
    },
    enter() {
      if (this.$route.params.id) {
        this.modal = this.$route.params.id;
        this.first = false;
      }
    },
  },
  activated() {
    this.enter();
  },
  mounted() {
    /* global TagCanvas */
    const canvas = this.$refs.canvas;
    // const context = canvas.getContext("2d");
    // resize the canvas to fill browser window dynamically
    window.addEventListener("resize", resizeCanvas, false);
    function resizeCanvas() {
      canvas.width = window.innerWidth * 1;
      canvas.height = window.innerHeight * 1;
    }
    resizeCanvas();

    TagCanvas.Start("GalaxyCanvas", "", {
      textHeight: 22,
      depth: 0.7,
      clickToFront: 400,
      dragControl: true,
      textColour: "#FFF",
      radiusX: 1.8,
      radiusY: 1.5,
      radiusZ: 1.5,
      txtScale: 3,
      txtOpt: true,
      initial: [0.008, 0.004],
      outlineMethod: "colour",
    });
    this.enter();
  },

  data() {
    return {
      showBox: false,
      modal: false,
      secondhand,
      first: true,
      images: importAll(
        require.context("../assets/", false, /\.(png|jpe?g|svg)$/)
      ),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.delete {
  float: right;
  margin: 20px;
}
#StarTitle {
  position: fixed;
  left: 30px;
  top: 30px;
  font-size: 1.3em;
  padding: 0.5em;
  border: none;
  background: #ffffff90;
  // opacity: 1;
  color: black;
  z-index: 3;
  cursor: pointer;
  border-radius: 15px;
  transition: all 400ms;
}
#ContinueButton {
  position: fixed;
  right: 30px;
  bottom: 30px;
  font-size: 1.3em;
  padding: 0.5em;
  border: none;
  background: #ffffff;
  opacity: 0.7;
  color: black;
  z-index: 3;
  cursor: pointer;
  border-radius: 15px;
  transition: all 400ms;
}
#ContinueButton:hover {
  opacity: 1;
  transform: scale(1.1);
}
#BookImage {
  margin: 0.5em;

  float: right;
  width: 20%;
}
#Galaxy {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}
#Review {
  background: #323;
  font-weight: 100;
  padding: 1em;
  color: white;
  text-indent: 2em;
}
#SecondhandCard,
#CardBox {
  border-radius: 0.8em;
}
#CardImage {
  height: 150px;
  width: 100%;
  object-fit: cover;
}
#Modal {
  z-index: 5;
}
#SecondhandContent {
  text-indent: 2em;
}
#BG {
  filter: brightness(2) contrast(0.89) sepia(27) hue-rotate(213deg)
    saturate(2.5);
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  background-size: cover;
}
/* ==============================================================================================
SED Innovations
https://sed.am
https://mkrtchyan.ga
================================================================================================= */
#BG {
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
    background: #000 url(@/assets/compressed/stars.webp) repeat top center;
    z-index: 0;
  }

  .twinkling {
    background: transparent url(@/assets/compressed/twinkling.webp) repeat top
      center;
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
