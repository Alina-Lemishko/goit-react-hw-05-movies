"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[677],{5677:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var i,r,a=e(885),c=e(2791),o=e(6871),u=e(2179),p=e(168),d=e(6031),f=d.ZP.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),s=d.ZP.li(r||(r=(0,p.Z)(["\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),h=e(184),l=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],r=(0,o.UO)().movieId;return(0,c.useEffect)((function(){(0,u.CL)(r).then((function(n){var t=n.cast;return i(t.slice(0,12))}))}),[r]),(0,h.jsx)("div",{children:(0,h.jsx)(f,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,h.jsxs)(s,{children:[(0,h.jsx)("img",{src:null!==n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"https://www.seekpng.com/png/full/423-4235598_no-image-for-noimage-icon.png",alt:n.name,width:"250"}),(0,h.jsx)("p",{children:n.name}),(0,h.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}},2179:function(n,t,e){e.d(t,{BG:function(){return o},CL:function(){return d},FE:function(){return u},wH:function(){return p},wr:function(){return c}});var i=e(4569),r=e.n(i),a="e7e97d56d25ec1e4b049a81d5db4fb3b",c=function(){return r().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a)).then((function(n){return n.data}))},o=function(n){return r().get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"))},u=function(n){return r().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&page=1&query=").concat(n,"&include_adult=false")).then((function(n){return n.data}))},p=function(n){return r().get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(n){return n.data}))},d=function(n){return r().get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US&page=1")).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=677.36cc1a6e.chunk.js.map