"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[218],{823:function(n,t,e){e.d(t,{$0:function(){return d},Dx:function(){return f},Ei:function(){return l},Zb:function(){return h},aV:function(){return p}});var i,r,o,a,u,c=e(168),s=e(6031),d=s.ZP.section(i||(i=(0,c.Z)(["\n  padding-top: 10px;\n  padding-bottom: 20px;\n"]))),p=s.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin-right: -32px;\n  margin-bottom: -32px;\n  margin-right: -16px;\n"]))),h=s.ZP.li(o||(o=(0,c.Z)(["\n  position: relative;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  transition: transform 0.5s linear;\n  width: calc(100% / 5 - 16px);\n  margin-right: 16px;\n  margin-bottom: 10px;\n"]))),l=s.ZP.img(a||(a=(0,c.Z)(["\n  width: 250px;\n  overflow: hidden;\n  border-radius: 5px;\n"]))),f=s.ZP.h2(u||(u=(0,c.Z)(["\n  margin-top: 5px;\n  font-size: 20px;\n  line-height: 1.2;\n"])))},1218:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var i=e(885),r=e(2791),o=e(501),a=e(6871),u=e(823),c=e(184),s=function(n){var t=n.movies,e=(0,a.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:(0,c.jsx)(u.aV,{children:t.map((function(n){return(0,c.jsx)(u.Zb,{children:(0,c.jsxs)(o.OL,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,c.jsx)(u.Ei,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),(0,c.jsx)(u.Dx,{children:n.title})]})},n.id)}))})})})},d=e(2179),p=function(n){var t=n.onSubmit,e=n.queryForSearch,o=(0,r.useState)(""),a=(0,i.Z)(o,2),u=a[0],p=a[1],h=(0,r.useState)([]),l=(0,i.Z)(h,2),f=l[0],g=l[1];return(0,r.useEffect)((function(){null!==e&&(0,d.FE)(e).then((function(n){var t=n.results;return g(t)})).catch((function(n){return console.log(n.message)}))}),[e]),(0,c.jsxs)("section",{children:[(0,c.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(u),p("")},children:[(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"text",value:u,onChange:function(n){p(n.target.value.trim())},required:!0})}),(0,c.jsx)("button",{type:"submit",children:"Search"})]}),null!==e?(0,c.jsx)(s,{movies:f}):(0,c.jsx)("h2",{children:"You can find the movies by keywords"})]})}},2179:function(n,t,e){e.d(t,{BG:function(){return u},CL:function(){return d},FE:function(){return c},wH:function(){return s},wr:function(){return a}});var i=e(4569),r=e.n(i),o="e7e97d56d25ec1e4b049a81d5db4fb3b",a=function(){return r().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(n){return n.data}))},u=function(n){return r().get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"))},c=function(n){return r().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&page=1&query=").concat(n,"&include_adult=false")).then((function(n){return n.data}))},s=function(n){return r().get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.data}))},d=function(n){return r().get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=218.df5d6249.chunk.js.map