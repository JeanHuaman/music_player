(function(e){function t(t){for(var c,s,r=t[0],i=t[1],u=t[2],o=0,j=[];o<r.length;o++)s=r[o],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&j.push(l[s][0]),l[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(j.length)j.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,r=1;r<a.length;r++){var i=a[r];0!==l[i]&&(c=!1)}c&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},l={app:0},n=[];function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/music_player/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var b=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"133f":function(e,t,a){e.exports=a.p+"img/foxbel-music.28028e75.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function l(e,t,a,l,n,s){var r=Object(c["k"])("Navbar"),i=Object(c["k"])("Search"),u=Object(c["k"])("Detail"),b=Object(c["k"])("Results"),o=Object(c["k"])("Player");return Object(c["h"])(),Object(c["d"])(c["a"],null,[Object(c["e"])(r),Object(c["e"])(i),Object(c["e"])(u),Object(c["e"])(b),Object(c["e"])(o)],64)}var n=a("133f"),s=a.n(n),r=Object(c["e"])("header",{class:"navbar "},[Object(c["e"])("div",{class:"logo"},[Object(c["e"])("img",{src:s.a,alt:"Logo"})]),Object(c["e"])("nav",{class:"navigation"},[Object(c["e"])("section",{class:"library"},[Object(c["e"])("h2",null,"Mi Librería"),Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Recientes")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Artistas")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Álbums")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Canciones")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Estaciones")])])]),Object(c["e"])("section",{class:"playlist"},[Object(c["e"])("h2",null,"Playlist"),Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Metal")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Para bailar")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Rock 90s")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:""},"Baladas")])])])])],-1),i=Object(c["e"])("span",{class:"hamburger-box"},[Object(c["e"])("span",{class:"hamburger-inner"})],-1);function u(e,t,a,l,n,s){return Object(c["h"])(),Object(c["d"])(c["a"],null,[r,Object(c["e"])("button",{onClick:t[1]||(t[1]=function(){return s.active&&s.active.apply(s,arguments)}),class:"hamburger hamburger--collapse btn-navbar",type:"button"},[i])],64)}var b={name:"Navbar",methods:{active:function(){var e=document.querySelector(".btn-navbar"),t=document.querySelector(".navbar");t.classList.contains("is-active")?(t.classList.remove("is-active"),e.classList.remove("is-active")):(t.classList.add("is-active"),e.classList.add("is-active"))}}};b.render=u;var o=b,j=(a("b0c0"),{class:"search"}),O={class:"search_form"},p=Object(c["e"])("i",{class:"fas fa-search"},null,-1),d=Object(c["e"])("div",{class:"search_user"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-user"})]),Object(c["e"])("h1",null,"Jean Huaman")],-1);function f(e,t,a,l,n,s){return Object(c["h"])(),Object(c["d"])("section",j,[Object(c["e"])("form",O,[Object(c["n"])(Object(c["e"])("input",{type:"search",placeholder:"Buscar","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.name=e})},null,512),[[c["l"],l.name]]),Object(c["e"])("button",{onClick:t[2]||(t[2]=Object(c["o"])((function(){return e.getApi&&e.getApi.apply(e,arguments)}),["prevent"]))},[p])]),d])}var m=a("5502"),h={name:"Search",setup:function(){var e=Object(m["b"])(),t=Object(c["j"])("");return Object(c["g"])((function(){e.dispatch("getApi")})),{name:t}}};h.render=f;var v=h,g=a("c121"),y=a.n(g),_={class:"detail"},x=Object(c["e"])("div",{class:"detail_user"},[Object(c["e"])("img",{src:y.a,alt:"usuario"})],-1),S=Object(c["e"])("article",{class:"detail_description"},[Object(c["e"])("h2"),Object(c["e"])("div",{class:"detail_description_subtitle"},[Object(c["e"])("h3",null,"Lo mejor de Adele"),Object(c["e"])("small",null,"321,123 seguidores")]),Object(c["e"])("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis provident vel culpa quia nisi iusto, numquam sit? Minima nulla iure nostrum magni doloribus, aliquid placeat assumenda aperiam fuga quasi. "),Object(c["e"])("div",{class:"detail_description_button"},[Object(c["e"])("button",{class:"detail_description_button_play"},"Reproducir"),Object(c["e"])("button",{class:"detail_description_button_follow"},"Seguir"),Object(c["e"])("span",null,"...")])],-1);function A(e,t,a,l,n,s){return Object(c["h"])(),Object(c["d"])("section",_,[x,S])}var k={name:"Detail",setup:function(){var e=Object(m["b"])(),t=Object(c["j"])(e.state.artist);return{artista:t}}};k.render=A;var w=k,P={class:"results"},L=Object(c["e"])("h2",null,"Resultados",-1),z=Object(c["e"])("div",{class:"results_albums"},[Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("span",null,[Object(c["e"])("i",{class:"fas fa-ellipsis-v"})]),Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])]),Object(c["e"])("article",{class:"results_albums_item"},[Object(c["e"])("figure",null,[Object(c["e"])("img",{src:y.a,alt:"Singer"}),Object(c["e"])("figcaption",null,[Object(c["e"])("h3",null,"21"),Object(c["e"])("h4",null,"Adele")])])])],-1);function R(e,t,a,l,n,s){return Object(c["h"])(),Object(c["d"])("section",P,[L,z])}var q={};q.render=R;var M=q,C={class:"player"},T=Object(c["e"])("div",{class:"player_user"},[Object(c["e"])("img",{src:y.a,alt:"Singer"})],-1),D=Object(c["e"])("div",{class:"player_controls_info"},[Object(c["e"])("h4",null,"Cancion"),Object(c["e"])("h5",null,"Artista - Album")],-1),E={class:"player_controls_play"},J=Object(c["e"])("button",null,[Object(c["e"])("i",{class:"fas fa-caret-left"})],-1),N=Object(c["e"])("i",{class:"fas fa-play"},null,-1),B=Object(c["e"])("button",null,[Object(c["e"])("i",{class:"fas fa-caret-right"})],-1),G=Object(c["e"])("div",{class:"player_controls_vol"},[Object(c["e"])("form",null,[Object(c["e"])("input",{type:"range",min:"0",max:"10",value:"5"})]),Object(c["e"])("button",null,[Object(c["e"])("i",{class:"fas fa-volume-off"})])],-1);function H(e,t,a,l,n,s){return Object(c["h"])(),Object(c["d"])("footer",C,[T,D,Object(c["e"])("div",E,[J,Object(c["e"])("button",{onClick:t[1]||(t[1]=function(){return l.play&&l.play.apply(l,arguments)})},[N]),B]),G])}var U={name:"Player",setup:function(){var e=Object(m["b"])(),t=Object(c["b"])((function(){return e.state.audio})),a=new Audio(e.state.audio),l=function(){a.play()};return{url:t,play:l}}};U.render=H;var V=U,F={name:"App",components:{Navbar:o,Search:v,Detail:w,Results:M,Player:V}};F.render=l;var I=F,K=a("1da1"),Q=(a("96cf"),a("d3b7"),Object(m["a"])({state:{audio:"",artists:[],artist:{}},mutations:{setaudio:function(e,t){e.audio=t},setartists:function(e,t){e.artists=t},setartist:function(e,t){e.artist=t}},actions:{catchAudio:function(e,t){var a=e.commit;a("setaudio",t)},getApi:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var a,c,l,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.state,t.prev=1,t.next=4,fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem&index=0&limit=8",{method:"GET",headers:{"x-rapidapi-key":"9cd7dcd2admsh5fd701ca0fa161cp11bbd2jsn921584877b1b","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com"}});case 4:return c=t.sent,t.next=7,c.json();case 7:return l=t.sent,a("setartists",l.data),a("setaudio",l.data[0].preview),t.prev=10,t.next=13,fetch("https://deezerdevs-deezer.p.rapidapi.com/album/".concat(l.data[0].album.id),{method:"GET",headers:{"x-rapidapi-key":"9cd7dcd2admsh5fd701ca0fa161cp11bbd2jsn921584877b1b","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com"}});case 13:return n=t.sent,t.next=16,n.json();case 16:s=t.sent,a("setartist",s),t.next=22;break;case 20:t.prev=20,t.t0=t["catch"](10);case 22:t.next=26;break;case 24:t.prev=24,t.t1=t["catch"](1);case 26:case"end":return t.stop()}}),t,null,[[1,24],[10,20]])})))()}},modules:{}}));Object(c["c"])(I).use(Q).mount("#app")},c121:function(e,t,a){e.exports=a.p+"img/user.f436eb7f.png"}});
//# sourceMappingURL=app.5c636ee8.js.map