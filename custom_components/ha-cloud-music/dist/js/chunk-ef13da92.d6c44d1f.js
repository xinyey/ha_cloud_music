(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef13da92"],{2332:function(t,e,n){"use strict";var r=n("c239"),a=n.n(r);a.a},"3d93":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("2338"),n("f763"),n("fb37");var r=n("5bf7"),a=n("591a");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s({},Object(a["c"])(["playing","currentMusic"])),s({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(a["d"])({setPlaying:"SET_PLAYING"}),{},Object(a["b"])(["selectPlay"]));var c={data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}}},"650b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),n("div",{staticClass:"search-head"},[t._l(t.Artists.slice(0,5),(function(e,r){return n("span",{key:r,on:{click:function(n){return t.clickHot(e.first)}}},[t._v(t._s(e.first))])})),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"音乐/歌手"},domProps:{value:t.searchValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},input:function(e){e.target.composing||(t.searchValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})],2),n("music-list",{ref:"musicList",attrs:{list:t.list,listType:2},on:{select:t.selectItem,pullUp:t.pullUpLoad}})],1)},a=[],i=(n("2338"),n("f763"),n("fb37"),n("63ff"),n("ad3e")),s=n("987a"),c=(n("34a3"),n("5bf7")),o=n("591a"),l=n("365c"),u=n("8dd1"),d=n("f904"),f=n("5362"),h=n("3d93");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={name:"search",mixins:[h["a"]],components:{MmLoading:d["a"],MusicList:f["a"]},data:function(){return{Artists:[],list:[],page:0,searchValue:"",lockUp:!0}},computed:m({},Object(o["c"])(["playing","currentMusic"])),watch:{list:function(t,e){t.length!==e.length?this.lockUp=!1:t[t.length-1].id!==e[e.length-1].id&&(this.lockUp=!1)}},created:function(){var t=this;Object(l["k"])().then((function(e){200===e.data.code&&(t.Artists=e.data.result.hots,t.mmLoadShow=!1)}))},methods:m({clickHot:function(t){this.searchValue=t,this.onEnter()},onEnter:function(){var t=this;""!==this.searchValue.replace(/(^\s+)|(\s+$)/g,"")?(this.mmLoadShow=!0,this.page=0,this.list.length>0&&this.$refs.musicList.scrollTo(),Object(l["j"])(this.searchValue).then((function(e){200===e.data.code&&(t.list=Object(u["b"])(e.data.result.songs),t._hideLoad())}))):this.$mmToast("搜索内容不能为空！")},pullUpLoad:function(){var t=this;this.mmLoadShow=!0,this.page+=1,Object(l["j"])(this.searchValue,this.page).then((function(e){if(200===e.data.code){if(!e.data.result.songs)return t.$mmToast("没有更多歌曲啦！"),void(t.mmLoadShow=!1);t.list=[].concat(Object(s["a"])(t.list),Object(s["a"])(Object(u["b"])(e.data.result.songs))),t._hideLoad()}}))},selectItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._getMusicDetail(e.id);case 2:n=t.sent,e.image=n,this.selectAddPlay(e);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),_getMusicDetail:function(t){return Object(l["e"])(t).then((function(t){if(200===t.data.code)return t.data.songs[0].al.picUrl}))}},Object(o["d"])({setPlaying:"SET_PLAYING"}),{},Object(o["b"])(["selectAddPlay"]))},g=b,O=(n("df8d"),n("6691")),y=Object(O["a"])(g,r,a,!1,null,"a0298a9a",null);e["default"]=y.exports},9176:function(t,e,n){},c239:function(t,e,n){},df8d:function(t,e,n){"use strict";var r=n("9176"),a=n.n(r);a.a},f904:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[n("div",{staticClass:"mm-loading-content"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},a=[],i={name:"mm-loading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String}}},s=i,c=(n("2332"),n("6691")),o=Object(c["a"])(s,r,a,!1,null,null,null);e["a"]=o.exports}}]);