(this["webpackJsonphulu-clone"]=this["webpackJsonphulu-clone"]||[]).push([[0],{17:function(e,a,t){e.exports=t(45)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),c=t.n(o);t(22),t(23);var i=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__icons"},r.a.createElement("div",{className:"header__icon header__icon--active"},r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"home w-6 h-6"},r.a.createElement("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})),r.a.createElement("p",null,"Home")),r.a.createElement("div",{className:"header__icon"},r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"light-bulb w-6 h-6"},r.a.createElement("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})),r.a.createElement("p",null,"Trending")),r.a.createElement("div",{className:"header__icon"},r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"check-circle w-6 h-6"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})),r.a.createElement("p",null,"My Stuff")),r.a.createElement("div",{className:"header__icon"},r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"collection w-6 h-6"},r.a.createElement("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})),r.a.createElement("p",null,"Collection")),r.a.createElement("div",{className:"header__icon"},r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"search w-6 h-6"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})),r.a.createElement("p",null,"Search")),r.a.createElement("div",{className:"header__icon"},r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"user w-6 h-6"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})),r.a.createElement("p",null,"Account"))),r.a.createElement("img",{src:"https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png",alt:"hulu"}))},l=(t(24),t(3)),s=Object(n.createContext)(),u=function(e){var a=e.children,t=Object(n.useState)("Trending"),o=Object(l.a)(t,2),c=o[0],i=o[1];return r.a.createElement(s.Provider,{value:{type:c,setType:i}},a)},m=[{key:"Trending",name:"Trending"},{key:"TopRated",name:"Top Rated"},{key:"Action",name:"Action"},{key:"Comedy",name:"Comedy"},{key:"Horror",name:"Horror"},{key:"Romance",name:"Romance"},{key:"Mystery",name:"Mystery"},{key:"SciFi",name:"Sci-fi"},{key:"Western",name:"Western"},{key:"Animation",name:"Animation"},{key:"TV",name:"Movies"}],d=function(){var e=Object(n.useContext)(s),a=e.type,t=e.setType;return r.a.createElement("nav",{className:"nav"},m.map((function(e){var n=e.key,o=e.name;return r.a.createElement("h2",{className:a===n?"active":"",onClick:function(){return t(n)}},o)})))},v=(t(25),function(e){var a=e.movie,t="".concat("https://image.tmdb.org/t/p/original/").concat(a.backdrop_path||a.poster_path);return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:a.title||a.original_name,loading:"lazy"}),r.a.createElement("p",{className:"overview"},a.overview),r.a.createElement("h2",null,a.title||a.original_name),r.a.createElement("p",{className:"card__stats"},a.release_date," ",r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"thumb-up w-6 h-6"},r.a.createElement("path",{d:"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"})),a.vote_count))}),h=(t(26),t(5)),p=t.n(h),f=t(2),g=t(16),E=t(4),w=t.n(E);w.a.defaults.baseURL="https://api.themoviedb.org/3",w.a.interceptors.request.use((function(e){var a=e.url.split("?"),t=Object(l.a)(a,2),n=t[0],r=t[1],o=new URLSearchParams(r);return o.set("api_key",Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_TMD_API_KEY),Object(f.a)(Object(f.a)({},e),{},{url:"".concat(n,"?").concat(o.toString())})}),(function(e){return Promise.reject(e)}));var _=w.a,y={isLoading:!1,data:null,error:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=Object(n.useState)(y),t=Object(l.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(g.a)(p.a.mark((function a(){var t;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(Object(f.a)(Object(f.a)({},r),{},{isLoading:!0})),a.prev=1,a.next=4,_.get(e);case 4:t=a.sent,o(Object(f.a)(Object(f.a)({},r),{},{isLoading:!1,data:t.data})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),o(Object(f.a)(Object(f.a)({},r),{},{isLoading:!1,error:a.t0}));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}})()()}),[e]),Object(f.a)({},r)},k={Trending:"/trending/all/week?language=en-US",TopRated:"/movie/top_rated?language=en-US",Action:"/discover/movie?with_genres=28",Comedy:"/discover/movie?with_genres=35",Horror:"/discover/movie?with_genres=27",Romance:"/discover/movie?with_genres=10749",Mystery:"/discover/movie?with_genres=9648",SciFi:"/discover/movie?with_genres=878",Western:"/discover/movie?with_genres=37",Animation:"/discover/movie?with_genres=16",TV:"/discover/movie?with_genres=10770"},N=function(){var e,a=Object(n.useContext)(s).type,t=b(k[a]),o=t.isLoading,c=t.data,i=t.error;return i?r.a.createElement("code",{className:"error"},JSON.stringify(i,null,4)):r.a.createElement("section",{className:"results"},o?"...":null===c||void 0===c||null===(e=c.results)||void 0===e?void 0:e.map((function(e){return r.a.createElement(v,{movie:e,key:e.id})})))};var O=function(){return r.a.createElement(u,null,r.a.createElement("div",{className:"app"},r.a.createElement(i,null),r.a.createElement(d,null),r.a.createElement(N,null)))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");M?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(a,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.c23e9815.chunk.js.map