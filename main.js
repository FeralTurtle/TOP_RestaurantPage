(()=>{"use strict";(()=>{const e=document.querySelector("#content"),t=document.createElement("header"),i=document.createElement("span");i.textContent="Logo";const a=document.createElement("nav"),s=document.createElement("a");s.textContent="Home",s.setAttribute("href","#");const n=document.createElement("a");n.textContent="Menu",n.setAttribute("href","#");const u=document.createElement("a");u.textContent="Hours",u.setAttribute("href","#");const r=document.createElement("a");r.textContent="Contact",r.setAttribute("href","#"),a.append(s),a.append(n),a.append(u),a.append(r),t.append(i),t.append(a);const o=document.createElement("div"),c=document.createElement("img");o.classList.add("banner"),c.setAttribute("img","../images/restaurant-main.jpg"),c.setAttribute("alt","restaurant-main"),o.append(c);const m=document.createElement("main"),l=document.createElement("h2");l.textContent="About the restaurant",m.append(l),["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Id consectetur purus ut faucibus pulvinar. Id ornare arcu odio ut sem. Nec tincidunt praesent semper feugiat nibh. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Euismod elementum nisi eleifend quam adipiscing vitae. Tristique risus nec feugiat in fermentum posuere urna nec. Ipsum dolor sit amet consectetur adipiscing elit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.","Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Sit amet porttitor eget dolor morbi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Suspendisse interdum consectetur libero id faucibus nisl. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.","A erat nam at lectus urna. Convallis posuere morbi leo urna molestie at elementum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Eu turpis egestas pretium aenean pharetra magna ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tincidunt praesent semper feugiat nibh. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. In est ante in nibh mauris cursus mattis molestie. Purus in massa tempor nec feugiat. Volutpat blandit aliquam etiam erat velit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Pretium nibh ipsum consequat nisl vel pretium lectus. Quis vel eros donec ac odio tempor orci dapibus.","Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Etpharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat. Pretium quam vulputate dignissim suspendisse in est ante in. Faucibus in ornare quam viverra. Vestibulum sed arcu non odio euismod lacinia at quis. Leo duis ut diam quam nulla porttitor massa id neque. Odio facilisis mauris sit amet. Dui nunc mattis enim ut. Risus pretium quam vulputate dignissim suspendisse in. Arcu dui vivamus arcu felis bibendum ut. Sed pulvinar proin gravida hendrerit lectus a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nibh mauris cursus mattis molestie a iaculis at erat. Posuere morbi leo urna molestie at."].forEach((e=>{const t=document.createElement("p");t.textContent=e,m.append(t)}));const d=document.createElement("footer");let p=1;for(let e=0;e<3;e++){const e=document.createElement("div");e.classList.add("footer-div"+p),e.append(document.createElement("p")),e.append(document.createElement("p")),d.append(e),p++}p=1;const g=document.querySelector(".footer-div1");console.log(g),e.append(t),e.append(o),e.append(m),e.append(d)})()})();