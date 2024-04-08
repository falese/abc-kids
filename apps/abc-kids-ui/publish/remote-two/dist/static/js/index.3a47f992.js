/*! For license information please see index.3a47f992.js.LICENSE.txt */
!function(){var e,t,r,n,o,i,u,a,c,s,f,l,d={6930:function(e,t,r){"use strict";r.r(t);var n=r("5893");r("6285");t.default=()=>(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h1",{children:"Rsbuild with React"}),(0,n.jsx)("p",{children:"Start building amazing things with Rsbuild."})]})},9506:function(e,t,r){"use strict";r.r(t);var n=r("5893"),o=r("6855"),i=r.n(o),u=r("745"),a=r("6930");u.createRoot(document.getElementById("root")).render((0,n.jsx)(i().StrictMode,{children:(0,n.jsx)(a.default,{})}))},6285:function(e){}},h={};function p(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={exports:{}};return d[e](r,r.exports,p),r.exports}p.m=d,p.c=h,p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,{a:t}),t},p.d=function(e,t){for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce(function(t,r){return p.f[r](e,t),t},[]))},p.k=function(e){return""+e+".css"},p.u=function(e){return"static/js/async/"+e+"."+({259:"6faf50e4",512:"63e6d344",987:"d81b22f4"})[e]+".js"},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="remote-two:",p.l=function(r,n,o,i){if(e[r]){e[r].push(n);return}if(void 0!==o){for(var u,a,c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}}!u&&(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,p.nc&&u.setAttribute("nonce",p.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[n];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(n)}),t)return t(n)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),a&&document.head.appendChild(u)},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r=[],p.O=function(e,t,n,o){if(t){o=o||0;for(var i=r.length;i>0&&r[i-1][2]>o;i--)r[i]=r[i-1];r[i]=[t,n,o];return}for(var u=1/0,i=0;i<r.length;i++){for(var t=r[i][0],n=r[i][1],o=r[i][2],a=!0,c=0;c<t.length;c++)u>=o&&Object.keys(p.O).every(function(e){return p.O[e](t[c])})?t.splice(c--,1):(a=!1,o<u&&(u=o));if(a){r.splice(i--,1);var s=n();void 0!==s&&(e=s)}}return e},p.p="/",p.S={},p.initializeSharingData={scopeToSharingDataMapping:{default:[{name:"react-dom",version:"18.2.0",factory:function(){return p.e("259").then(function(){return function(){return p("3935")}})},eager:0},{name:"react",version:"18.2.0",factory:function(){return p.e("512").then(function(){return function(){return p("7294")}})},eager:0}]},uniqueName:"remote-two"},p.I=function(){throw Error("should have __webpack_require__.I")},p.consumesLoadingData={chunkMapping:{512:[],259:["6855"],987:[]},moduleIdToConsumeDataMapping:{6466:{shareScope:"default",shareKey:"react-dom",import:"react-dom",requiredVersion:"*",strictVersion:!0,singleton:!1,eager:!1,fallback:function(){return p.e("987").then(function(){return function(){return p("3935")}})}},7864:{shareScope:"default",shareKey:"react",import:"react",requiredVersion:"*",strictVersion:!0,singleton:!1,eager:!1,fallback:function(){return p.e("512").then(function(){return function(){return p("7294")}})}},6855:{shareScope:"default",shareKey:"react",import:"react",requiredVersion:"^18.2.0",strictVersion:!0,singleton:!1,eager:!1,fallback:function(){return p.e("512").then(function(){return function(){return p("7294")}})}}},initialConsumes:["7864","6466","6855"]},p.f.consumes=function(){throw Error("should have __webpack_require__.f.consumes")},n={332:0,89:0},o="remote-two",i="data-webpack-loading",u=function(e,t,r,n){var u,a,c="chunk-"+e;if(!n){for(var s=document.getElementsByTagName("link"),f=0;f<s.length;f++){var l=s[f],d=l.getAttribute("href")||l.href;if(d&&!d.startsWith(p.p)&&(d=p.p+(d.startsWith("/")?d.slice(1):d)),"stylesheet"==l.rel&&(d&&d.startsWith(t)||l.getAttribute("data-webpack")==o+":"+c)){u=l;break}}if(!r)return u}!u&&(a=!0,(u=document.createElement("link")).setAttribute("data-webpack",o+":"+c),u.setAttribute(i,1),u.rel="stylesheet",u.href=t);var h=function(e,t){if(u.onerror=u.onload=null,u.removeAttribute(i),clearTimeout(m),t&&"load"!=t.type&&u.parentNode.removeChild(u),r(t),e)return e(t)};if(u.getAttribute(i)){var m=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload)}else h(void 0,{type:"load",target:u});return n?n.parentNode.insertBefore(u,n):a&&document.head.appendChild(u),u},p.f.css=function(e,t){var r=p.o(n,e)?n[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(980==e){var o=new Promise(function(t,o){r=n[e]=[t,o]});t.push(r[2]=o);var i=p.p+p.k(e),a=Error();u(e,i,function(t){if(p.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){if("load"!==t.type){var o=t&&t.type,i=t&&t.target&&t.target.src;a.message="Loading css chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}else r[0]()}})}else n[e]=0}},a=function(e,t){var r=t[0];e&&e(t);for(var o=0;o<r.length;o++)void 0===n[r[o]]&&(n[r[o]]=0)},(c=self.webpackChunkremote_two=self.webpackChunkremote_two||[]).forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c)),s={89:0,980:0},p.f.j=function(e,t){var r=p.o(s,e)?s[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(89!=e){var n=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=n);var o=p.p+p.u(e),i=Error();p.l(o,function(t){if(p.o(s,e)&&(0!==(r=s[e])&&(s[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}},"chunk-"+e,e)}else s[e]=0}},p.O.j=function(e){return 0===s[e]},f=function(e,t){var r=t[0],n=t[1],o=t[2],i,u,a=0;if(r.some(function(e){return 0!==s[e]})){for(i in n)p.o(n,i)&&(p.m[i]=n[i]);if(o)var c=o(p)}for(e&&e(t);a<r.length;a++)u=r[a],p.o(s,u)&&s[u]&&s[u][0](),s[u]=0;return p.O(c)},(l=self.webpackChunkremote_two=self.webpackChunkremote_two||[]).forEach(f.bind(null,0)),l.push=f.bind(null,l.push.bind(l)),p.O(void 0,["332","89"],function(){return p("7625")});var m=p.O(void 0,["332","89"],function(){return p("9506")});p.O(m)}();