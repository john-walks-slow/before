<template>
  <div
    id="BG"
    class="v-flex"
    style="background: url(/avg/image/summer1.jpg); background-size: cover"
  >
    <div id="Container">
      這個故事結束了，你的生活還在繼續。<br />
      衷心地祝願，我們都能在矛盾中走出自己的人生，<br />
      強烈而独特地活著。<br />
      你可以在下方留言，講講你對生、死的體會。<br />
      <router-link to="/building">回到大樓</router-link>
      <router-link to="/star">回到星空</router-link>
      <router-link to="/">重新開始</router-link>
    </div>
    <!-- <button id="RestartButton" @click="refresh()">重新开始</button> -->
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  name: "EndScene",
  props: {},
  data() {
    return {
      disqusLoaded: false,
    };
  },
  methods: {
    refresh() {
      window.location.reload();
    },
  },
  mounted: () => {
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    // eslint-disable-next-line no-unused-vars

    // disqus_config();
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://before-landing.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#BG {
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
}
#Container {
  padding-top: 30px;
  margin: auto;
  font-size: 0.9em;
  text-align: center;
}
/* #disqus_thread:empty + #Loading { */
/* display: block; */
/* } */
#Loading {
  /* display: none; */
  bottom: 55vh;
  left: 5vw;
  position: fixed;
}
#disqus_thread {
  display: flex;
  overflow: auto;
  background: white;
  padding: 15px 15px 0px 15px;
  border-radius: 8px;
  box-shadow: #eee 0px 0px 10px 4px;
  bottom: 10px;
  width: 96vw;
  height: 60vh;
  margin: auto auto 2vw auto;
}

#RestartButton {
  font-size: 2em;
}
#CommentButton {
  font-size: 2em;
}
a {
  margin-right: 15px;
}
</style>
