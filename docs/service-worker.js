if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let l={};const f=e=>i(e,s),o={module:{uri:s},exports:l,require:f};a[s]=Promise.all(r.map((e=>o[e]||f(e)))).then((e=>(n(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"before"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"avg/audio/Crisscross.mp3",revision:"b929f4a0e2577ae2883bbe9b5879f3ce"},{url:"avg/audio/Crystal_Clear.mp3",revision:"3c11919951b99df50a46b2cf90ed0c60"},{url:"avg/audio/Fated.mp3",revision:"59edef589808468671f5ec225beefd98"},{url:"avg/audio/Fragile.mp3",revision:"7d16549e2bcebcba59e7768d5fe9a61a"},{url:"avg/audio/Way_to_home.mp3",revision:"cdfc9de0820283240a934048cc979b66"},{url:"avg/audio/click.mp3",revision:"95eabade0a421edca71b1a024f184613"},{url:"avg/image/Avatar_.png",revision:"dde7f2f0cc6a00eb79061476fc57d219"},{url:"avg/image/Avatar_Back.png",revision:"a84289cc78e73b70d59d2c25545bf37d"},{url:"avg/image/Avatar_Fall.png",revision:"04786e76633f859efe57009cd2593083"},{url:"avg/image/Avatar_Fall_grey.png",revision:"54f7ac7091b0ae1de57eda913d88a2b1"},{url:"avg/image/Avatar_Line.png",revision:"6a96ae14ef81672f0b32d73b4ffc76b6"},{url:"avg/image/Avatar_Line_White.png",revision:"552d41ab46ff798282f92a814d960a4d"},{url:"avg/image/black.jpg",revision:"05eed820ae684b26309ad41468e58a37"},{url:"avg/image/stars.jpg",revision:"f0d917f8bde73bcfe9fd16725fb14f30"},{url:"avg/image/主人公站立_原稿.png",revision:"6a96ae14ef81672f0b32d73b4ffc76b6"},{url:"before.json",revision:"15be68b386ccc3e3f634084fa9adbf57"},{url:"bulma.min.css",revision:"04ba689c01d96e600ef0cc16bb0bb72a"},{url:"css/app.6a4bf4f4.css",revision:null},{url:"img/Avatar_Back.aafc28ee.png",revision:null},{url:"img/Avatar_Line.27ed65d3.png",revision:null},{url:"img/building.0f5278a9.png",revision:null},{url:"img/cloud.042d1ea7.png",revision:null},{url:"img/stars.9bb42083.jpg",revision:null},{url:"img/title.38c2b84f.png",revision:null},{url:"index.html",revision:"2e2a6873388eb55b8f1e5a467f43a329"},{url:"js/app.23008014.js",revision:null},{url:"js/chunk-vendors.61b73e74.js",revision:null},{url:"manifest.json",revision:"3fe4b8f4e7358bcf8d770807a2d4f64d"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"tuesday.js",revision:"afc1fe6bcf5085dcaba23fb531762aad"},{url:"tuesday_visual.html",revision:"1cbca075a00d34dbc68b072f6327e5e0"}],{})}));
//# sourceMappingURL=service-worker.js.map
