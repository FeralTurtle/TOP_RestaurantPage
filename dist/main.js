(()=>{"use strict";var e={421:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(558),i=n.n(a),r=n(361),s=n.n(r)()(i());s.push([e.id,":root {\n    --brown: #662200;\n    --white: #f2f2f2;\n    --wheat: #f5deb3;\n}\n\nbody, #content {\n    min-height: 100vh;\n    margin: 0;\n    background-color: var(--brown);\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 150px 1fr;\n    align-content: center;\n    height: 75px;\n    color: var(--white);\n}\n\nheader > span {\n    justify-self: center;\n}\n\nnav {\n    justify-self: right;\n    padding-right: 35px;\n}\n\nnav > a {\n    padding: 0px 12px;\n    text-decoration: none;\n}\n\na:link, a:visited {\n    color: var(--white);\n}\n\nimg {\n    width: 100%;\n    height: 100%;\n    max-height: 600px;\n}\n\nmain {\n    padding: 12px;\n    color: var(--white);\n}\n\nh2 {\n    text-align: center;\n    color: var(--wheat);\n}\n\nfooter {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 12px;\n    padding: 0px 120px;\n    color: var(--white);\n    padding-bottom: 29px;\n}\n\nfooter > div > p {\n    text-align: center;\n}\n\nfooter > div > ul {\n    text-align: center;\n}\n\n/* Menu */\n.menu {\n    text-align: center;\n}\n\n.menu-item > img {\n    width: auto;\n    height: auto;\n    max-height: none;\n}\n\n/* Business hours */\n.business-hours {\n    text-align: center;\n}\n\n/* Contact */\n.contacts {\n    text-align: center;\n}\n\n.contact > img {\n    width: auto;\n    height: auto;\n    max-height: none;\n}\n\np {\n    color: var(--white);\n}\n",""]);const o=s},361:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);a&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},558:e=>{e.exports=function(e){return e[1]}},487:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},s=[],o=0;o<e.length;o++){var c=e[o],u=a.base?c[0]+a.base:c[0],d=r[u]||0,l="".concat(u," ").concat(d);r[u]=d+1;var m=n(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var g=i(p,a);a.byIndex=o,t.splice(o,0,{identifier:l,updater:g,references:1})}s.push(l)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var o=n(r[s]);t[o].references--}for(var c=a(e,i),u=0;u<r.length;u++){var d=n(r[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},52:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},469:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},10:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},631:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},329:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},153:(e,t,n)=>{e.exports=n.p+"images/19841570256194245afe.jpg"},41:(e,t,n)=>{e.exports=n.p+"images/50c03fe1d0b66f905e4f.jpg"},358:(e,t,n)=>{e.exports=n.p+"images/a1e6aa6cea1997bd9a66.jpg"},190:(e,t,n)=>{e.exports=n.p+"images/14f7d7c5ae089775a98b.jpg"},717:(e,t,n)=>{e.exports=n.p+"images/dbf7da7bd0906b58dc0a.png"},159:(e,t,n)=>{e.exports=n.p+"images/e9e583eec1cfcb24b221.png"},548:(e,t,n)=>{e.exports=n.p+"images/11ec5a345805b9c81503.png"},219:(e,t,n)=>{e.exports=n.p+"images/8e1a30fec249ce49b0d2.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(219);const t=()=>{const t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("banner");const a=document.createElement("img");a.src=e,n.append(a);const i=document.createElement("main"),r=document.createElement("h2");r.textContent="About the restaurant";const s=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Id consectetur purus ut faucibus pulvinar. Id ornare arcu odio ut sem. Nec tincidunt praesent semper feugiat nibh. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Euismod elementum nisi eleifend quam adipiscing vitae. Tristique risus nec feugiat in fermentum posuere urna nec. Ipsum dolor sit amet consectetur adipiscing elit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.","Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Sit amet porttitor eget dolor morbi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Suspendisse interdum consectetur libero id faucibus nisl. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.","A erat nam at lectus urna. Convallis posuere morbi leo urna molestie at elementum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Eu turpis egestas pretium aenean pharetra magna ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tincidunt praesent semper feugiat nibh. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. In est ante in nibh mauris cursus mattis molestie. Purus in massa tempor nec feugiat. Volutpat blandit aliquam etiam erat velit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Pretium nibh ipsum consequat nisl vel pretium lectus. Quis vel eros donec ac odio tempor orci dapibus.","Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Etpharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat. Pretium quam vulputate dignissim suspendisse in est ante in. Faucibus in ornare quam viverra. Vestibulum sed arcu non odio euismod lacinia at quis. Leo duis ut diam quam nulla porttitor massa id neque. Odio facilisis mauris sit amet. Dui nunc mattis enim ut. Risus pretium quam vulputate dignissim suspendisse in. Arcu dui vivamus arcu felis bibendum ut. Sed pulvinar proin gravida hendrerit lectus a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nibh mauris cursus mattis molestie a iaculis at erat. Posuere morbi leo urna molestie at."];i.append(r);for(let e=0;e<4;e++){const t=document.createElement("p");t.textContent=s[e],i.append(t)}const o=document.createElement("footer");for(let e=0;e<3;e++){const t=document.createElement("div");t.classList.add("footer-div"+(e+1));const n=document.createElement("p"),a=document.createElement("p");if(n.textContent="Some text",a.textContent="Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.",t.append(n),2==e){const e=document.createElement("ul");t.append(e);for(let t=0;t<4;t++){const n=document.createElement("li");n.textContent="Item "+(t+1),e.append(n)}}else 1==e&&(a.textContent="Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus"),t.append(a);o.append(t)}t.append(n),t.append(i),t.append(o)};var a=n(153),i=n(41),r=n(358),s=n(190),o=n(717),c=n(159),u=n(548),d=n(487),l=n.n(d),m=n(631),p=n.n(m),g=n(52),f=n.n(g),h=n(10),v=n.n(h),b=n(469),E=n.n(b),x=n(329),y=n.n(x),q=n(421),w={};w.styleTagTransform=y(),w.setAttributes=v(),w.insert=f().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=E(),l()(q.Z,w),q.Z&&q.Z.locals&&q.Z.locals,(()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("span");n.textContent="Logo";const a=document.createElement("nav"),i=["home","menu","hours","contact"],r=["Home","Our menu","Business hours","Contact us"];for(let e=0;e<4;e++){const t=document.createElement("a");t.setAttribute("href","#"),t.id=i[e],t.textContent=r[e],a.append(t)}t.append(n),t.append(a),e.append(t)})(),t();const C=document.querySelector("#content"),S=document.querySelector("#home"),I=document.querySelector("#menu"),L=document.querySelector("#hours"),T=document.querySelector("#contact");function j(){for(;C.lastChild&&"HEADER"!=C.lastChild.tagName;)C.lastChild.remove()}S.addEventListener("click",(()=>{j(),t()})),I.addEventListener("click",(()=>{j(),(()=>{const e=document.querySelector("#content"),t=document.createElement("main"),n=document.createElement("div");n.classList.add("menu"),t.append(n);for(let e=0;e<4;e++){const t=document.createElement("div");t.classList.add("menu-item");const o=document.createElement("h3");o.textContent="Item "+(e+1);const c=[a,i,r,s],u=document.createElement("img");u.src=c[e];const d=document.createElement("p");d.textContent="Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit.",t.append(o),t.append(u),t.append(d),n.append(t)}e.append(t)})()})),L.addEventListener("click",(()=>{j(),(()=>{const e=document.querySelector("#content"),t=document.createElement("main"),n=document.createElement("div");n.classList.add("business-hours");const a=document.createElement("p");a.textContent="Business hours";const i=document.createElement("ul");for(let e=0;e<4;e++){const t=document.createElement("li");t.textContent="Item "+(e+1),i.append(t)}n.append(a),n.append(i),t.append(n),e.append(t)})()})),T.addEventListener("click",(()=>{j(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contacts");const n=document.createElement("div");n.classList.add("contact");for(let e=0;e<3;e++){const a=[o,c,u],i=document.createElement("img");i.src=a[e];const r=document.createElement("p");r.textContent="Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.",n.append(i),n.append(r),t.append(n)}const a=document.createElement("footer"),i=document.createElement("a");i.textContent="User icons created by Freepik - Flaticon",a.append(i),e.append(t),e.append(a)})()}))})()})();