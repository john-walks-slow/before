<template>
  <div id="Sky" :class="{ hide: !show }">
    <!-- <button id="ContinueButton">繼續 ......</button> -->
    <img
      id="Avatar"
      :src="require('/src/assets/Avatar_Fall_Animation.gif')"
      :style="{ filter: `saturate(${scrollProgress * 0.7})` }"
    />
    <div id="clouds">
      <img id="Cloud1" :src="require('/src/assets/cloud.png')" />
      <img id="Cloud2" :src="require('/src/assets/cloud.png')" />
      <img id="Cloud3" :src="require('/src/assets/cloud.png')" />
    </div>
    <div>
      <img id="Building" :src="require('/src/assets/building.png')" />
      <div id="BuildingContainer">
        <img
          v-for="index in 9"
          :key="index"
          class="window"
          :src="require('/src/assets/window' + index.toString() + '.png')"
        />
      </div>
      <div id="BuildingGrid">
        <div
          v-for="index in 20"
          :key="index"
          class="window_trigger"
          :id="`WindowTrigger${index}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuildingScene",
  props: {
    show: Boolean,
  },
  data() {
    return {
      scrollProgress: 0,
    };
  },
  mounted() {},
  watch: {
    show(newValue) {
      if (newValue) {
        scrollTo(0, 0);
        setInterval(() => {
          var h = document.documentElement,
            b = document.body,
            st = "scrollTop",
            sh = "scrollHeight";
          this.scrollProgress =
            (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
          if (this.scrollProgress > 0.99) {
            this.$emit("proceedStory");
            clearInterval();
          }
        }, 100);
      } else {
        clearInterval();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#Sky {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  // background: linear-gradient(180deg, rgba(186, 195, 232, 0) 0%, #bac3e8 100%);
  background: #bac3e8;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    #bac3e8 98%,
    #7c7f8a 99%,
    black
  );
  border-bottom: solid black calc(calc(100vh - 100px) - 17vw);
}
#Building {
  width: 50%;
  position: relative;
  padding-top: 240px;
  margin-right: 15px;
  float: right;
  padding-bottom: 2%;
}
#BuildingContainer,
#BuildingGrid {
  width: 42%;
  position: absolute;
  top: 240px;
  right: calc(15px + 4%);
  padding-top: 6%;
}
#BuildingGrid {
  right: calc(15px + 3.7%);
}

#Avatar {
  position: fixed;
  left: 8vw;
  top: 100px;
  width: 35vw;
}
.window {
  z-index: 5;
  margin-bottom: -3vw;
}
.window_trigger {
  cursor: pointer;
  display: inline-block;
  width: 40%;
  background: transparent;
  margin: 10% 5%;
  padding-bottom: 44.5%;
}
#WindowTrigger9,
#WindowTrigger10 {
  margin-top: 23%;
  margin-bottom: -3%;
}
#ContinueButton {
  cursor: pointer;
  position: absolute;
  left: 18%;
  bottom: 30px;
  background: transparent;
  border: none;
  font-size: 2em;
}
#clouds {
  position: absolute;
  top: 0;
  left: 0;
}
#Cloud1 {
  position: relative;
  right: 20%;
  transform: rotate(-20deg);
  width: 150%;
  margin-bottom: 20%;
}
#Cloud2 {
  position: relative;
  // right: 20%;
  // transform: rotate(10deg);
  width: 90%;
  opacity: 0.8;
  margin-bottom: -20%;
}
#Cloud3 {
  position: relative;
  right: 10%;
  transform: rotate(-15deg);
  width: 180%;
  opacity: 0.5;
}
</style>
