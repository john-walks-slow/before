<template>
  <div id="BG" :class="{ hide: !show }" class="v-flex">
    <div id="Container">
      歡迎回到現實！<br />
      這個故事結束了，你的生活還會繼續。<br />
      一起加油吧！<br />
      歡迎在下方留言，講講你對生、死的體會。<br />
      <a href="/">重新開始</a>
    </div>
    <!-- <button id="RestartButton" @click="refresh()">重新开始</button> -->
    <div id="disqus_thread"></div>
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
  mounted: () => {
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    // eslint-disable-next-line no-unused-vars
    var disqus_config = function () {
      this.page.url = "before-landing.vercel.app"; // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "before-landing"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
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
  background: url(/src/assets/summer1.jpg);
  background-size: cover;
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
}
#Container {
  padding: 30px;
  font-size: 0.9em;
}
#disqus_thread {
  background: white;
  padding: 15px 15px 0px 15px;
  border-radius: 8px;
  box-shadow: #eee 0px 0px 10px 4px;
  bottom: 10px;
  width: 96vw;
  height: 70vh;
  margin: auto auto 10px auto;
  align-self: center;
}

#RestartButton {
  font-size: 2em;
}
#CommentButton {
  font-size: 2em;
}
</style>
