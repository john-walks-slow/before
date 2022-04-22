(function(){var n={5474:function(n,e,o){"use strict";var t=o(9242),i=o(3396);const r={class:"max"};function s(n,e,o,t,s,c){const u=(0,i.up)("DescriptionScene"),d=(0,i.up)("AVGScene"),a=(0,i.up)("BuildingScene"),l=(0,i.up)("StarScene");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(u,{show:"Description"==n.scene,onProceedStory:c.proceedStory},null,8,["show","onProceedStory"]),(0,i.Wm)(d,{show:"story"==n.scene},null,8,["show"]),(0,i.Wm)(a,{show:"Building"==n.scene,onProceedStory:c.proceedStory},null,8,["show","onProceedStory"]),(0,i.Wm)(l,{show:"Star"==n.scene,onProceedStory:c.proceedStory},null,8,["show","onProceedStory"])])}const c={class:"nothing"};function u(n,e,o,t,r,s){return(0,i.wg)(),(0,i.iD)("div",c)}var d={name:"AVGScene",props:{show:Boolean},mounted:()=>{},watch:{show(n,e){console.log(n,e),n?document.getElementById("tuesday").classList.remove("fade"):document.getElementById("tuesday").classList.add("fade")}}},a=o(89);const l=(0,a.Z)(d,[["render",u]]);var p=l,f=o(7139);const g=["src"],w={id:"clouds"},h=["src"],m=["src"],v=["src"],y=["src"],_={id:"BuildingContainer"},b=["src"],S={id:"BuildingGrid"},k=["id"];function x(n,e,t,r,s,c){return(0,i.wg)(),(0,i.iD)("div",{id:"Sky",class:(0,f.C_)({hide:!t.show})},[(0,i._)("img",{id:"Avatar",src:o(7117),style:(0,f.j5)({filter:`saturate(${.7*s.scrollProgress})`})},null,12,g),(0,i._)("div",w,[(0,i._)("img",{id:"Cloud1",src:o(3778)},null,8,h),(0,i._)("img",{id:"Cloud2",src:o(3778)},null,8,m),(0,i._)("img",{id:"Cloud3",src:o(3778)},null,8,v)]),(0,i._)("div",null,[(0,i._)("img",{id:"Building",src:o(5857)},null,8,y),(0,i._)("div",_,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(9,(n=>(0,i._)("img",{key:n,class:"window",src:o(2233)("./window"+n.toString()+".png")},null,8,b))),64))]),(0,i._)("div",S,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(20,(n=>(0,i._)("div",{key:n,class:"window_trigger",id:`WindowTrigger${n}`},null,8,k))),64))])])],2)}var D={name:"BuildingScene",props:{show:Boolean},data(){return{scrollProgress:0}},mounted(){},watch:{show(n){n?(scrollTo(0,0),setInterval((()=>{var n=document.documentElement,e=document.body,o="scrollTop",t="scrollHeight";this.scrollProgress=(n[o]||e[o])/((n[t]||e[t])-n.clientHeight),this.scrollProgress>.99&&this.$emit("proceedStory")}),100)):clearInterval()}}};const B=(0,a.Z)(D,[["render",x],["__scopeId","data-v-45e4e42b"]]);var C=B;const O=n=>((0,i.dD)("data-v-8fba7edc"),n=n(),(0,i.Cn)(),n),A=O((()=>(0,i._)("b",null,"簡介：",-1))),P=O((()=>(0,i._)("p",null,[(0,i.Uk)(" 死亡是什麽樣的？沒人見過。沒人知道。但是，讀著這行字的你正活著。"),(0,i._)("br"),(0,i.Uk)(" 有時我聽見你說：太痛苦了，一切都不會好起來！"),(0,i._)("br"),(0,i.Uk)(" 我多想告訴你，你因為活著而擁有的魄力就在你的身體裏。"),(0,i._)("br"),(0,i.Uk)(" 把這場展覽當作一次旅行。請你看一看，那些與死亡近距離接觸過的人，"),(0,i._)("br"),(0,i.Uk)(" 他們的窗門裏面藏著的秘密。請你聽聽那些見證過死亡、"),(0,i._)("br"),(0,i.Uk)(" 經歷過痛苦、與死神擦肩過的人，他們想說的話。"),(0,i._)("br"),(0,i.Uk)(" 落地之前，你會發現什麽？ ")],-1))),T=[A,P],j={id:"BG",class:"max flex"},E=["src"],U=["src"],$=["src"];function I(n,e,t,r,s,c){return(0,i.wg)(),(0,i.iD)("div",{class:(0,f.C_)(["max",{hide:!t.show}])},[(0,i._)("div",{id:"Description",class:(0,f.C_)({fade:1!=n.isDescriptionShow})},T,2),(0,i._)("div",j,[(0,i._)("img",{id:"Avatar",src:o(8958)},null,8,E),(0,i._)("img",{id:"AvatarLine",src:o(1917)},null,8,U),(0,i._)("img",{class:(0,f.C_)(["flex a-center",{fade:1==n.isDescriptionShow}]),id:"Title",src:o(8988)},null,10,$)]),(0,i._)("button",{id:"ContinueButton",class:(0,f.C_)(["flex a-center button",{moved:1==n.isDescriptionShow}]),onClick:e[0]||(e[0]=(...n)=>c.continueButton&&c.continueButton(...n))},(0,f.zw)(n.continueText),3)],2)}var L={name:"DescriptionScene",props:{show:Boolean},data:function(){return{isDescriptionShow:!1,continueText:"▶"}},methods:{continueButton:function(){this.isDescriptionShow?this.$emit("proceedStory"):(this.isDescriptionShow=!0,this.continueText="開始")}}};const G=(0,a.Z)(L,[["render",I],["__scopeId","data-v-8fba7edc"]]);var F=G;const N=n=>((0,i.dD)("data-v-0dbb2fc7"),n=n(),(0,i.Cn)(),n),W=N((()=>(0,i._)("h1",{style:{color:"white","font-size":"3em"}},"施工中",-1)));function Z(n,e,o,t,r,s){return(0,i.wg)(),(0,i.iD)("div",{id:"BG",class:(0,f.C_)({hide:!o.show})},[W,(0,i._)("button",{style:{"font-size":"3em"},onClick:e[0]||(e[0]=n=>this.$emit("proceedStory"))}," 進入片尾 ")],2)}var z={name:"StarScene",props:{show:Boolean}};const H=(0,a.Z)(z,[["render",Z],["__scopeId","data-v-0dbb2fc7"]]);var Y=H;const V=["intro","interlude","outro"];var K={name:"App",components:{AVGScene:p,BuildingScene:C,DescriptionScene:F,StarScene:Y},data:function(){return{scene:"Description",story:-1}},methods:{proceedStory:function(){this.story++,this.scene="story",go_to(V[this.story])}},mounted:function(){window.onload=()=>{load_story("file","before.json")},tuesday.tilt=(n="center",e="100%",o=6e4)=>{tuesday.style.backgroundPositionY=`${n}`,setTimeout((()=>{tuesday.style.transition=`background-position ${o}ms ease 0s`,tuesday.style.backgroundPositionY=`${e}`}),1)},tuesday.fade=()=>{tuesday.style.transition="background-image 3000ms ease-in 1s"},tuesday.addEventListener("intro_end",(()=>{this.scene="Building"})),tuesday.addEventListener("interlude_end",(()=>{this.scene="Star"}))}};const M=(0,a.Z)(K,[["render",s]]);var q=M,J=o(5431);(0,J.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(n){console.error("Error during service worker registration:",n)}}),(0,t.ri)(q).mount("#app")},2233:function(n,e,o){var t={"./window1.png":3861,"./window2.png":9938,"./window3.png":7028,"./window4.png":8131,"./window5.png":8930,"./window6.png":9544,"./window7.png":6082,"./window8.png":333,"./window9.png":1964};function i(n){var e=r(n);return o(e)}function r(n){if(!o.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}i.keys=function(){return Object.keys(t)},i.resolve=r,n.exports=i,i.id=2233},8958:function(n,e,o){"use strict";n.exports=o.p+"img/Avatar_Back.aafc28ee.png"},7117:function(n,e,o){"use strict";n.exports=o.p+"img/Avatar_Fall_Animation.8edcca33.gif"},1917:function(n,e,o){"use strict";n.exports=o.p+"img/Avatar_Line.27ed65d3.png"},5857:function(n,e,o){"use strict";n.exports=o.p+"img/building.0f5278a9.png"},3778:function(n,e,o){"use strict";n.exports=o.p+"img/cloud.042d1ea7.png"},8988:function(n,e,o){"use strict";n.exports=o.p+"img/title.38c2b84f.png"},3861:function(n,e,o){"use strict";n.exports=o.p+"img/window1.5cc14299.png"},9938:function(n,e,o){"use strict";n.exports=o.p+"img/window2.9345271e.png"},7028:function(n,e,o){"use strict";n.exports=o.p+"img/window3.306e10e2.png"},8131:function(n,e,o){"use strict";n.exports=o.p+"img/window4.31fed563.png"},8930:function(n,e,o){"use strict";n.exports=o.p+"img/window5.e6290177.png"},9544:function(n,e,o){"use strict";n.exports=o.p+"img/window6.a7673bef.png"},6082:function(n,e,o){"use strict";n.exports=o.p+"img/window7.72a0fe12.png"},333:function(n,e,o){"use strict";n.exports=o.p+"img/window8.d9e13005.png"},1964:function(n,e,o){"use strict";n.exports=o.p+"img/window9.2713f121.png"}},e={};function o(t){var i=e[t];if(void 0!==i)return i.exports;var r=e[t]={exports:{}};return n[t](r,r.exports,o),r.exports}o.m=n,function(){var n=[];o.O=function(e,t,i,r){if(!t){var s=1/0;for(a=0;a<n.length;a++){t=n[a][0],i=n[a][1],r=n[a][2];for(var c=!0,u=0;u<t.length;u++)(!1&r||s>=r)&&Object.keys(o.O).every((function(n){return o.O[n](t[u])}))?t.splice(u--,1):(c=!1,r<s&&(s=r));if(c){n.splice(a--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var a=n.length;a>0&&n[a-1][2]>r;a--)n[a]=n[a-1];n[a]=[t,i,r]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){o.p="/"}(),function(){var n={143:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var i,r,s=t[0],c=t[1],u=t[2],d=0;if(s.some((function(e){return 0!==n[e]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(u)var a=u(o)}for(e&&e(t);d<s.length;d++)r=s[d],o.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return o.O(a)},t=self["webpackChunkbefore"]=self["webpackChunkbefore"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(5474)}));t=o.O(t)})();
//# sourceMappingURL=app.9f0e429f.js.map