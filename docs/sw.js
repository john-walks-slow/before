if(!self.define){let i,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(l,r)=>{const u=i||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let s={};const a=i=>n(i,u),d={module:{uri:u},exports:s,require:a};e[u]=Promise.all(l.map((i=>d[i]||a(i)))).then((i=>(r(...i),s)))}}define(["./workbox-9b44b0ca"],(function(i){"use strict";i.setCacheNameDetails({prefix:"before"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/bulma.min.css",revision:"04ba689c01d96e600ef0cc16bb0bb72a"},{url:"/css/index.8bf97476.css",revision:null},{url:"/img/Avatar_Back.9f176cc0.webp",revision:null},{url:"/img/Avatar_End_Animation.8d8e1f52.webp",revision:null},{url:"/img/Avatar_Fall.91277c07.webp",revision:null},{url:"/img/Avatar_Fall_Animation.a01384e7.webp",revision:null},{url:"/img/Avatar_Fall_grey.eaf67a42.webp",revision:null},{url:"/img/Avatar_Line.eb141750.webp",revision:null},{url:"/img/Avatar_Line_Color.8cb6f542.webp",revision:null},{url:"/img/Avatar_Line_Color2.af5e4582.webp",revision:null},{url:"/img/Avatar_Line_White.59eb373f.webp",revision:null},{url:"/img/Story1A.32ba1ae2.webp",revision:null},{url:"/img/Story1B.4c6163a9.webp",revision:null},{url:"/img/Story1C.4e922635.webp",revision:null},{url:"/img/Story1D.d1b60824.webp",revision:null},{url:"/img/Story1E.567823bd.webp",revision:null},{url:"/img/building.9f7186d4.webp",revision:null},{url:"/img/cloud.128af60b.webp",revision:null},{url:"/img/firsthand1.ae7cbc44.webp",revision:null},{url:"/img/firsthand10.309d2810.webp",revision:null},{url:"/img/firsthand11.29d2980d.webp",revision:null},{url:"/img/firsthand12.e150e89e.webp",revision:null},{url:"/img/firsthand13.93c0bdc0.webp",revision:null},{url:"/img/firsthand14.95d595a1.webp",revision:null},{url:"/img/firsthand15.fd8b80a0.webp",revision:null},{url:"/img/firsthand16.8b22a8ba.webp",revision:null},{url:"/img/firsthand17.2fcc6ca8.webp",revision:null},{url:"/img/firsthand18.4736a529.webp",revision:null},{url:"/img/firsthand19.cedc6eda.webp",revision:null},{url:"/img/firsthand2.52eb8693.webp",revision:null},{url:"/img/firsthand20.d8bcb57a.webp",revision:null},{url:"/img/firsthand3.d2c24594.webp",revision:null},{url:"/img/firsthand4.d548a372.webp",revision:null},{url:"/img/firsthand5.87b77454.webp",revision:null},{url:"/img/firsthand6.d9803bef.webp",revision:null},{url:"/img/firsthand7.2c122e1b.webp",revision:null},{url:"/img/firsthand8.b397a0a4.webp",revision:null},{url:"/img/firsthand9.2c79256f.webp",revision:null},{url:"/img/galaxy.fa1d763b.webp",revision:null},{url:"/img/healthcare.14213562.webp",revision:null},{url:"/img/secondhand1.bd312832.webp",revision:null},{url:"/img/secondhand10.595685cb.webp",revision:null},{url:"/img/secondhand11.b3687d27.webp",revision:null},{url:"/img/secondhand12.2aa7fe6a.webp",revision:null},{url:"/img/secondhand13.24357dc7.webp",revision:null},{url:"/img/secondhand14.c6e5d2be.webp",revision:null},{url:"/img/secondhand2.380da171.webp",revision:null},{url:"/img/secondhand4.979eee8f.webp",revision:null},{url:"/img/secondhand5.b743bfa3.webp",revision:null},{url:"/img/secondhand6.f391fec4.webp",revision:null},{url:"/img/secondhand7.aa702daf.webp",revision:null},{url:"/img/secondhand8.74a641f8.webp",revision:null},{url:"/img/secondhand9.41220416.webp",revision:null},{url:"/img/secondhandcard1.3206680e.webp",revision:null},{url:"/img/secondhandcard10.4b536af3.webp",revision:null},{url:"/img/secondhandcard11.a3761d46.webp",revision:null},{url:"/img/secondhandcard12.6fd4a1e1.webp",revision:null},{url:"/img/secondhandcard13.c8c1dd54.webp",revision:null},{url:"/img/secondhandcard14.98a88657.webp",revision:null},{url:"/img/secondhandcard2.e5b3fd10.webp",revision:null},{url:"/img/secondhandcard3.08e9c9db.webp",revision:null},{url:"/img/secondhandcard4.99889e12.webp",revision:null},{url:"/img/secondhandcard5.3f141b64.webp",revision:null},{url:"/img/secondhandcard6.5f639fb6.webp",revision:null},{url:"/img/secondhandcard7.c1ac9b24.webp",revision:null},{url:"/img/secondhandcard8.c389fc1f.webp",revision:null},{url:"/img/stars.5fa72af4.webp",revision:null},{url:"/img/window1.afbc6a96.webp",revision:null},{url:"/img/window2.dc1a77fa.webp",revision:null},{url:"/img/window3.3157cccd.webp",revision:null},{url:"/img/window4.cd850666.webp",revision:null},{url:"/img/window5.e2ab8601.webp",revision:null},{url:"/img/window6.21c194cc.webp",revision:null},{url:"/img/window7.6927674a.webp",revision:null},{url:"/img/window8.db20317d.webp",revision:null},{url:"/img/window9.4795d1c2.webp",revision:null},{url:"/index.html",revision:"ab8386fcc4583b87d8d99802a3560be1"},{url:"/js/chunk-vendors.a56ce7fb.js",revision:null},{url:"/js/index.40b40dbc.js",revision:null},{url:"/manifest.json",revision:"4d28d44cb69fcf271c5e56ef0d947971"},{url:"/media/Fragile.62a7447f.mp3",revision:null},{url:"/media/School_days.f6708f52.mp3",revision:null},{url:"/media/Way_to_home.a40b8f25.mp3",revision:null},{url:"/media/city.6b44db11.mp3",revision:null},{url:"/media/crash.a046899f.mp3",revision:null},{url:"/media/glass.069faf7c.mp3",revision:null},{url:"/media/laugh.838bd6e3.mp3",revision:null},{url:"/media/phone.1c35bb8b.mp3",revision:null},{url:"/media/rm.bf9b8189.mp3",revision:null},{url:"/media/whoosh.9f25c89e.mp3",revision:null},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/tagcanvas.js",revision:"717adb067b094ee3d26ff7b22a69414b"},{url:"/tuesday.js",revision:"77e69c1aa2e258e44a3ceecb3d256333"},{url:"/tuesday_visual.html",revision:"1cbca075a00d34dbc68b072f6327e5e0"}],{}),i.registerRoute(/\/$/,new i.NetworkFirst({cacheName:"index",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
