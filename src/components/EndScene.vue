<template>
  <div
    id="BG"
    class="v-flex"
    style="background: url(/avg/image/summer1.jpg); background-size: cover"
  >
    <div id="Container">
      <!-- <h1>The End</h1> -->
      這個故事結束了，你的生活還在繼續。<br />
      衷心地祝願，我們都能在矛盾中走出自己的人生，<br />
      強烈而独特地活著。<br />
      你可以在下方留言，講講你對生、死的體會。<br />
      <router-link to="/building">回到大樓</router-link>
      <router-link to="/star">回到星空</router-link>
      <router-link to="/">重新開始</router-link>
      <br />
      <a href="javascript:void(0)" @click="reference = true"
        >製作團隊 / 參考資料</a
      >
    </div>

    <!-- <button id="RestartButton" @click="refresh()">重新开始</button> -->
    <div id="disqus_thread"></div>
  </div>
  <transition name="fade">
    <div
      id="Modal"
      class="modal"
      :class="{ 'is-active': reference }"
      v-if="reference"
    >
      <div class="modal-background"></div>
      <div class="modal-content" id="ReferenceCard">
        <div class="card">
          <header class="modal-card-head">
            <p class="modal-card-title">製作團隊 / 參考資料</p>
            <button
              class="delete"
              aria-label="close"
              @click="reference = false"
            ></button>
          </header>
          <div class="card-content">
            <div class="content">
              <b>製作團隊：</b>賴映彤、劉澄真、任彦齊、楊子涵、葉章琦<br />
              <b>鳴謝：</b
              >朱順慈、郭駿偉、與我們分享故事的朋友們，以及參與這場旅行的你。<br /><br />
              <b>參考資料：</b>

              <ul class="c12 lst-kix_6ixgeu4fshyj-0 start">
                <li class="c5 li-bullet-0">
                  <span class="c0"
                    >Albom M. &nbsp;(1997) Tuesdays with Morrie (Memoir)
                    Doubleday, United States.</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Albom Mitch (2017) [Photo of himself with Morrie
                    Schwartz]</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.freep.com/story/sports/columnists/mitch-albom/2017/03/25/mitch-albom-tuesdays-with-morrie/99545374/&amp;sa=D&amp;source=editors&amp;ust=1650933356569452&amp;usg=AOvVaw0iMfYGZNRakjfVP_YdBqo2"
                      >&nbsp;https://www.freep.com/story/sports/columnists/mitch-albom/2017/03/25/mitch-albom-tuesdays-with-morrie/99545374/</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c0"
                    >Baldoni J. (2012-) My Last Days (Documentary Series), The
                    CW.</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Bodo Levente (2020) [Picture of Sunset] [Photograph]. Getty
                    Images.</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.countryliving.com/life/g32106800/sunset-quotes/&amp;sa=D&amp;source=editors&amp;ust=1650933356569928&amp;usg=AOvVaw3tXtwrsI-Hrl6jIjZjYXuS"
                      >&nbsp;https://www.countryliving.com/life/g32106800/sunset-quotes/</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Claire&rsquo;s Place (2018) [Photo of Claire Wineland]
                    [Photograph]</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://clairesplacefoundation.org/posts/2018/09/our-founder-claire-wineland-dies-one-week-after-lung-transplant&amp;sa=D&amp;source=editors&amp;ust=1650933356570251&amp;usg=AOvVaw3QM6d-mUCU8kktLlA9pElG"
                      >&nbsp;https://clairesplacefoundation.org/posts/2018/09/our-founder-claire-wineland-dies-one-week-after-lung-transplant</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1">Disney (2017) [Photo in Coco] [Poster]</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://movies.disney.com/coco&amp;sa=D&amp;source=editors&amp;ust=1650933356570521&amp;usg=AOvVaw2A-Ijk8gcwn6OtAE-GkiPB"
                      >&nbsp;https://movies.disney.com/coco</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c0"
                    >Frankl V. (1959) Man&rsquo;s Search for Meaning (Non
                    fiction) Beacon Press, United States.
                  </span>
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1">Ibizaglobalradio</span
                  ><span class="c6">&#65288;</span><span class="c1">2018</span
                  ><span class="c6">&#65289;</span
                  ><span class="c1">[Photo of afterlife] [Photograph]</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://ibizaglobalradio.com/afterlife-tale-us-arrives-hi-ibiza/&amp;sa=D&amp;source=editors&amp;ust=1650933356570954&amp;usg=AOvVaw2G5TGdpbgw0rUwOOJWzcCU"
                      >&nbsp;https://ibizaglobalradio.com/afterlife-tale-us-arrives-hi-ibiza/</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Jain Vaibhav (2021) [Picture in Soul]. Otakukart.</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://otakukart.com/183503/movie-review-pixars-soul/&amp;sa=D&amp;source=editors&amp;ust=1650933356571243&amp;usg=AOvVaw1HeGj9X_uqvsNt7zRHS5MO"
                      >&nbsp;https://otakukart.com/183503/movie-review-pixars-soul/</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c0"
                    >Kalanithi P. (2016) When Breath Becomes Air (Autobiography)
                    Random House, United States. Bodley Head, United Kingdom.
                  </span>
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c0"
                    >Moyes J. (2012) Me Before You (Romance Fiction) Michael
                    Joseph, United Kingdom.</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Netflix (2020) [Picture in Dick Johnson is Dead]</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DwfTmT6C5DnM&amp;sa=D&amp;source=editors&amp;ust=1650933356571636&amp;usg=AOvVaw39wn18C_UDZzNSsuRFVYbG"
                      >&nbsp;https://www.youtube.com/watch?v=wfTmT6C5DnM</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Paul and Lucy Kalanithi [Photo of the couple with their
                    baby]</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.thetimes.co.uk/article/when-breath-becomes-air-by-paul-kalanithi-gml8fgnmw&amp;sa=D&amp;source=editors&amp;ust=1650933356571933&amp;usg=AOvVaw1jwpKj_bd2aaDflHSkU_WK"
                      >&nbsp;https://www.thetimes.co.uk/article/when-breath-becomes-air-by-paul-kalanithi-gml8fgnmw</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Singer Leigh (2017) [Picture in the Brand New Testament].
                    [Photograph]. BFI</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www2.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/film-week-brand-new-testament&amp;sa=D&amp;source=editors&amp;ust=1650933356572235&amp;usg=AOvVaw2L7ksMEYVQGzf-M_JACQGL"
                      >&nbsp;https://www2.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/film-week-brand-new-testament</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c0"
                    >Wineland C. (2018) Meet Claire, Finding Beauty in the
                    Sadness, My Last Days (Documentary Series), The CW.</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >(2020) [Picture of Clock]. [Photograph]. </span
                  ><span class="c6"
                    >&#26524;&#26524;&#21237;&#24535;&#32178;</span
                  ><span class="c1 c10"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.gglzw.com/lizhiyuju/jingdian/369765.html&amp;sa=D&amp;source=editors&amp;ust=1650933356572641&amp;usg=AOvVaw3pmzgtRUCBAZKGF2VTM5vR"
                      >https://www.gglzw.com/lizhiyuju/jingdian/369765.html</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c1"
                    >Zhang Yimou (Director) (2003) To Live (Movie)</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.rottentomatoes.com/m/to_live&amp;sa=D&amp;source=editors&amp;ust=1650933356572911&amp;usg=AOvVaw0J8SS_avvEvAvcgOp7NcK8"
                      >&nbsp;https://www.rottentomatoes.com/m/to_live</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8"
                    >&#22823;&#34910;&#65294;&#20234;&#33883;&#38272;&#65288;</span
                  ><span class="c1">David Eagleman</span
                  ><span class="c8"
                    >&#65289;&#65288;&#20316;&#32773;&#65289;&#65288;</span
                  ><span class="c1">2009</span
                  ><span class="c8"
                    >&#65289;&#12290;&#12298;&#27515;&#24460;&#22235;&#21313;&#31278;&#29983;&#27963;&#12299;&#65288;</span
                  ><span class="c1">Forty Tales from the Afterlives)</span
                  ><span class="c8"
                    >&#12304;&#23567;&#35498;&#12305;&#12290;</span
                  ><span class="c1"
                    >Pantheon Books (US), Canongate Books (UK)</span
                  ><span class="c3">&#12290;</span>
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8"
                    >&#20239;&#21407;&#20581;&#20043;&#65288;&#23566;&#28436;&#65289;&#65288;</span
                  ><span class="c1">2017</span
                  ><span class="c3"
                    >&#65289;&#12290;&#12298;&#31309;&#23384;&#26178;&#38291;&#30340;&#29983;&#27963;&#12299;&#12304;&#32000;&#37636;&#29255;&#38651;&#24433;&#12305;&#12290;&#26481;&#28023;&#38651;&#35222;&#21488;&#35069;&#20316;&#12290;</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8"
                    >&#20313;&#33775;&#65288;&#20316;&#32773;&#65289;&#65288;</span
                  ><span class="c1">1992</span
                  ><span class="c3"
                    >&#65289;&#12290;&#12298;&#27963;&#33879;&#12299;&#12304;&#23567;&#35498;&#12305;&#12290;&#38263;&#27743;&#25991;&#34269;&#20986;&#29256;&#31038;&#12290;</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8 c4">&#20811;&#26031;&#27712;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c8 c4"
                    >&#32004;&#32752;&#36956;&#65288;&#23566;&#28436;&#65289;&#65288;</span
                  ><span class="c1 c4">2020</span
                  ><span class="c8 c4"
                    >&#65289;&#12290;&#12298;&#36842;&#20811;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c8 c4"
                    >&#32004;&#32752;&#36956;&#30340;&#21435;&#19990;&#12299;&#12304;&#21127;&#24773;&#32000;&#37636;&#29255;&#12305;&#12290;&#35069;&#29255;&#20844;&#21496;</span
                  ><span class="c1 c4">&nbsp;Big Mouth Productions</span
                  ><span class="c3 c4">&#12290;</span>
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8">&#20811;&#33802;&#20818;</span
                  ><span class="c1">&middot;</span
                  ><span class="c8"
                    >&#40613;&#20811;&#31119;&#29246;&#65288;</span
                  ><span class="c1">Claire Mcfall</span
                  ><span class="c8"
                    >&#65289;&#65288;&#20316;&#32773;&#65289;&#65288;</span
                  ><span class="c1">2015</span
                  ><span class="c3"
                    >&#65289;&#12290;&#12298;&#25850;&#28193;&#20154;&#12299;&#12304;&#23567;&#35500;&#12305;&#12290;&#33521;&#22283;&#12290;</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c6">&#22374;&#20811;</span
                  ><span class="c1">&nbsp;&#65288;2021</span
                  ><span class="c6"
                    >&#65289;&#12304;&#20837;&#27566;&#24107;</span
                  ><span class="c1"
                    >&nbsp;&#28711;&#30000;&#27915;&#20108;&#12305;&#12290;&#12304;&#29031;&#29255;&#12305;</span
                  ><span class="c10 c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://twgreatdaily.com/0QdGP3gBMMueE88vOQcY.html&amp;sa=D&amp;source=editors&amp;ust=1650933356574161&amp;usg=AOvVaw0Dv5HtSTpypCN_nyMj-uyu"
                      >https://twgreatdaily.com/0QdGP3gBMMueE88vOQcY.html</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8 c4">&#24444;&#29305;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c8 c4"
                    >&#36947;&#26684;&#29305;&#65288;&#30435;&#35069;&#12289;&#23566;&#28436;&#65289;&#65292;&#20977;&#26222;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c8 c4"
                    >&#39825;&#29246;&#26031;&#65288;&#23566;&#28436;&#65289;&#65288;</span
                  ><span class="c1 c4">2020</span
                  ><span class="c8 c4"
                    >&#65289;&#12290;&#12298;&#24515;&#38728;&#22855;&#26053;&#12299;&#12304;&#38651;&#24433;&#12305;&#12290;&#33775;&#29305;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c3 c4"
                    >&#36842;&#22763;&#23612;&#24433;&#29255;&#20844;&#21496;&#12289;&#30382;&#20811;&#26031;&#21205;&#30059;&#24037;&#20316;&#23460;&#12290;</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c6"
                    >&#28023;&#40300;&#24433;&#26989;&#65288;</span
                  ><span class="c1">2017</span
                  ><span class="c6"
                    >&#65289;&#12304;&#31309;&#23384;&#26178;&#38291;&#30340;&#29983;&#27963;&#12305;&#12290;&#12304;&#29031;&#29255;&#12305;</span
                  ><span class="c10 c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=https://www.epochtimes.com/b5/17/10/11/n9721896.htm&amp;sa=D&amp;source=editors&amp;ust=1650933356574750&amp;usg=AOvVaw3O3q9DTEOSvMxzwjMaWjOW"
                      >https://www.epochtimes.com/b5/17/10/11/n9721896.htm</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8 c4">&#38597;&#20811;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c8 c4">&#31684;</span
                  ><span class="c1 c4">&middot;</span
                  ><span class="c8 c4"
                    >&#22810;&#26757;&#29246;&#65288;&#23566;&#28436;&#65289;&#65288;</span
                  ><span class="c1 c4">2015</span
                  ><span class="c8 c4"
                    >&#65289;&#12290;&#12298;&#36229;&#26032;&#32004;&#20840;&#26360;&#12299;&#12304;&#38651;&#24433;&#12305;&#12290;&#35069;&#29255;&#20844;&#21496;</span
                  ><span class="c1 c4">&nbsp;Le Pacte</span
                  ><span class="c3 c4">&#12290;</span>
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c6"
                    >&#36938;&#25138;&#29399;&#21407;&#21109;</span
                  ><span class="c1">&nbsp;&#65288;2019</span
                  ><span class="c6"
                    >&#65289;&#12304;&#31532;&#20116;&#20154;&#26684;&#65292;&#20837;&#27566;&#24107;&#12305;&#12290;&#12304;&#29031;&#29255;&#12305;</span
                  ><span class="c1"
                    ><a
                      class="c2"
                      href="https://www.google.com/url?q=http://www.gamedog.cn/zswz/gl2544442.html&amp;sa=D&amp;source=editors&amp;ust=1650933356575368&amp;usg=AOvVaw2xdf4yRaCxmWsEPiIKK7kj"
                      >&nbsp;http://www.gamedog.cn/zswz/gl2544442.html</a
                    ></span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8">&#36948;&#25289;</span
                  ><span class="c1">&middot;K&middot;</span
                  ><span class="c8"
                    >&#23433;&#24503;&#26862;&#65288;&#30435;&#35069;&#65289;&#65292;&#26446;</span
                  ><span class="c1">&middot;</span
                  ><span class="c8"
                    >&#26114;&#20811;&#37324;&#22855;&#12289;&#38463;&#24503;&#37324;&#23433;</span
                  ><span class="c1">&middot;</span
                  ><span class="c8"
                    >&#33707;&#21033;&#32013;&#65288;&#23566;&#28436;&#65289;&#65288;</span
                  ><span class="c1">2017</span
                  ><span class="c8"
                    >&#65289;&#12290;&#12298;&#23563;&#22818;&#29872;&#28216;&#35352;&#12299;&#12304;&#38651;&#24433;&#12305;&#12290;&#33775;&#29305;</span
                  ><span class="c1">&middot;</span
                  ><span class="c3"
                    >&#36842;&#22763;&#23612;&#38651;&#24433;&#24037;&#20316;&#23460;&#12289;&#30382;&#20811;&#26031;&#21205;&#30059;&#24037;&#20316;&#23460;&#12290;</span
                  >
                </li>
                <li class="c5 li-bullet-0">
                  <span class="c8"
                    >&#28711;&#30000;&#27915;&#20108;&#37070;&#65288;&#23566;&#28436;&#65289;&#65288;</span
                  ><span class="c1">2008</span
                  ><span class="c3"
                    >&#65289;&#12290;&#38738;&#26408;&#26032;&#38272;&#65288;&#21407;&#20316;&#65289;&#12290;&#12298;&#20837;&#27566;&#24107;&#12299;&#12304;&#38651;&#24433;&#12305;&#12290;&#26494;&#31481;&#26144;&#30059;&#20986;&#21697;&#12290;</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "EndScene",
  props: {},
  data() {
    return {
      disqusLoaded: false,
      reference: false,
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
.modal-close {
  background-color: #44444430;
}
#ReferenceCard {
  /* box-shadow: 0 2px 3px 2px #ddd; */
  width: 70vw;
  /* border-radius: 1em; */
}
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
