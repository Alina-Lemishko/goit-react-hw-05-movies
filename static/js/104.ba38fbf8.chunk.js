"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[104],{6104:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=n(885),r=n(2791),a=n(6871),c=n(2179),o=n(184),u=function(){var t=(0,r.useState)([]),e=(0,i.Z)(t,2),n=e[0],u=e[1],p=(0,a.UO)().movieId;return(0,r.useEffect)((function(){(0,c.CL)(p).then((function(t){var e=t.cast;return u(e.slice(0,12))}))}),[p]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:null===n||void 0===n?void 0:n.map((function(t){return(0,o.jsxs)("li",{style:{width:"260px",display:"flex",flexDirection:"column",marginBottom:"20px"},children:[(0,o.jsx)("img",{src:null!==t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://www.seekpng.com/png/full/423-4235598_no-image-for-noimage-icon.png",alt:t.name,width:"80"}),(0,o.jsx)("p",{children:t.name}),(0,o.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},2179:function(t,e,n){n.d(e,{BG:function(){return o},CL:function(){return f},FE:function(){return u},wH:function(){return p},wr:function(){return c}});var i=n(4569),r=n.n(i),a="e7e97d56d25ec1e4b049a81d5db4fb3b",c=function(){return r().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a)).then((function(t){return t.data}))},o=function(t){return r().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=en-US"))},u=function(t){return r().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&page=1&query=").concat(t,"&include_adult=false")).then((function(t){return t.data}))},p=function(t){return r().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(t){return t.data}))},f=function(t){return r().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US&page=1")).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=104.ba38fbf8.chunk.js.map