if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),a={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-5361f2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-717280c5.css",revision:null},{url:"assets/index-ee2cf45f.js",revision:null},{url:"index.html",revision:"70decb4d1d833d578490b784e4fb48af"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"bdeb2b915105f31570a75f04717d4ec3"},{url:"images/icon/72.png",revision:"92b2f2a7e6502b7f741829fb8f5d9c3a"},{url:"images/icon/96.png",revision:"b9f82b92026c095b1beefe14b5db782a"},{url:"images/icon/128.png",revision:"db59290018756c0b56353921e36b2700"},{url:"images/icon/144.png",revision:"25a39aeb3e2dc916c168aacf4a128bed"},{url:"images/icon/192.png",revision:"083848b8070ddaa1484564bb6f8876f3"},{url:"images/icon/512.png",revision:"61317460c2ca3ddcce7067f766f2daa3"},{url:"manifest.webmanifest",revision:"f04495ea4c5c47af1c46d54e49fa8018"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
