(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cfe7e2"],{"1f98":function(t,e,n){"use strict";var r=n("f425"),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,l="lastIndex",a=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[l]||0!==e[l]}(),o=void 0!==/()??/.exec("")[1],u=a||o;u&&(s=function(t){var e,n,s,u,f=this;return o&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),a&&(e=f[l]),s=i.call(f,t),a&&s&&(f[l]=f.global?s.index+s[0].length:e),o&&s&&s.length>1&&c.call(s[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s}),t.exports=s},"261f":function(t,e,n){},"2c7c":function(t,e,n){"use strict";var r=n("261f"),i=n.n(r);i.a},"2f03":function(t,e,n){var r=n("c481"),i=n("f01a");t.exports=function(t){return function(e,n){var c,s,l=String(i(e)),a=r(n),o=l.length;return a<0||a>=o?t?"":void 0:(c=l.charCodeAt(a),c<55296||c>56319||a+1===o||(s=l.charCodeAt(a+1))<56320||s>57343?t?l.charAt(a):c:t?l.slice(a,a+2):s-56320+(c-55296<<10)+65536)}}},"34a3":function(t,e,n){"use strict";var r=n("a013"),i=n("db4b"),c=n("b146"),s=n("c481"),l=n("b0f4"),a=n("35dd"),o=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("629c")("replace",2,(function(t,e,n,h){return[function(r,i){var c=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,c,i):n.call(String(c),r,i)},function(t,e){var i=h(n,t,this,e);if(i.done)return i.value;var f=r(t),p=String(this),d="function"===typeof e;d||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var y=a(f,p);if(null===y)break;if(x.push(y),!b)break;var w=String(y[0]);""===w&&(f.lastIndex=l(p,c(f.lastIndex),m))}for(var C="",S=0,_=0;_<x.length;_++){y=x[_];for(var O=String(y[0]),k=o(u(s(y.index),p.length),0),E=[],I=1;I<y.length;I++)E.push(v(y[I]));var j=y.groups;if(d){var T=[O].concat(E,k,p);void 0!==j&&T.push(j);var $=String(e.apply(void 0,T))}else $=g(O,p,k,E,j,e);k>=S&&(C+=p.slice(S,k)+$,S=k+O.length)}return C+p.slice(S)}];function g(t,e,r,c,s,l){var a=r+t.length,o=c.length,u=d;return void 0!==s&&(s=i(s),u=p),n.call(l,u,(function(n,i){var l;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":l=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>o){var p=f(u/10);return 0===p?n:p<=o?void 0===c[p-1]?i.charAt(1):c[p-1]+i.charAt(1):n}l=c[u-1]}return void 0===l?"":l}))}}))},"35dd":function(t,e,n){"use strict";var r=n("4819"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"3a59":function(t,e,n){"use strict";var r=n("1f98");n("b2f5")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},"3c6b":function(t,e,n){"use strict";var r=n("a013"),i=n("b146"),c=n("b0f4"),s=n("35dd");n("629c")("match",1,(function(t,e,n,l){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=l(n,t,this);if(e.done)return e.value;var a=r(t),o=String(this);if(!a.global)return s(a,o);var u=a.unicode;a.lastIndex=0;var f,p=[],d=0;while(null!==(f=s(a,o))){var v=String(f[0]);p[d]=v,""===v&&(a.lastIndex=c(o,i(a.lastIndex),u)),d++}return 0===d?null:p}]}))},5362:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"musicList"},[t.list.length>0?[n("div",{staticClass:"list-item list-header"},[n("span",{staticClass:"list-name"},[t._v("歌曲")]),n("span",{staticClass:"list-artist"},[t._v("歌手")]),1===t.listType?n("span",{staticClass:"list-time"},[t._v("时长")]):n("span",{staticClass:"list-album"},[t._v("专辑")])]),n("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(e){return t.listScroll(e)}}},[t._l(t.list,(function(e,r){return n("div",{key:e.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===e.id},on:{dblclick:function(n){return t.selectItem(e,r,n)}}},[n("span",{staticClass:"list-num",domProps:{textContent:t._s(r+1)}}),n("div",{staticClass:"list-name"},[n("span",[t._v(t._s(e.name))]),n("div",{staticClass:"list-menu"},[n("span",{staticClass:"list-menu-icon-play",class:{on:t.playing&&t.currentMusic.id===e.id},on:{click:function(n){return n.stopPropagation(),t.selectItem(e,r)}}})])]),n("span",{staticClass:"list-artist"},[t._v(t._s(e.singer))]),1===t.listType?n("span",{staticClass:"list-time"},[t._v("\n          "+t._s(t._f("format")(e.duration%3600))+"\n          "),n("i",{staticClass:"list-menu-icon-del",on:{click:function(e){return e.stopPropagation(),t.deleteItem(r)}}})]):n("span",{staticClass:"list-album"},[t._v(t._s(e.album))])])})),t._t("listBtn")],2)]:n("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},i=[],c=(n("2338"),n("f763"),n("fb37"),n("5bf7")),s=(n("d4d5"),n("591a")),l=n("bbd5"),a=n("5af1");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"music-list",components:{MmNoResult:a["a"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:u({},Object(s["c"])(["playing","currentMusic"])),watch:{list:function(t,e){2===this.listType&&(t.length!==e.length?this.lockUp=!1:t[t.length-1].id!==e[e.length-1].id&&(this.lockUp=!1))}},activated:function(){this.scrollTop&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:u({listScroll:function(t){var e=t.target.scrollTop;if(this.scrollTop=e,2===this.listType&&!this.lockUp){var n=t.target,r=n.scrollHeight,i=n.offsetHeight;e+i>=r-50&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,e,n){n&&/list-menu-icon-del/.test(n.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,e))},deleteItem:function(t){this.$emit("del",t)}},Object(s["d"])({setPlaying:"SET_PLAYING"})),filters:{format:l["b"]}},p=f,d=(n("2c7c"),n("6691")),v=Object(d["a"])(p,r,i,!1,null,"f6755d2e",null);e["a"]=v.exports},"5af1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mm-no-result"},[n("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},i=[],c={name:"mm-no-result",props:{title:{type:String,default:""}}},s=c,l=(n("9673"),n("6691")),a=Object(l["a"])(s,r,i,!1,null,null,null);e["a"]=a.exports},"629c":function(t,e,n){"use strict";n("3a59");var r=n("e5ef"),i=n("743d"),c=n("b6f1"),s=n("f01a"),l=n("8b37"),a=n("1f98"),o=l("species"),u=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=l(t),d=!c((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=d?!c((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[o]=function(){return n}),n[p](""),!e})):void 0;if(!d||!v||"replace"===t&&!u||"split"===t&&!f){var h=/./[p],g=n(s,p,""[t],(function(t,e,n,r,i){return e.exec===a?d&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=g[0],m=g[1];r(String.prototype,t,b),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"7bc1":function(t,e,n){"use strict";var r=n("22e9"),i=n("a013"),c=n("0d5f"),s=n("b0f4"),l=n("b146"),a=n("35dd"),o=n("1f98"),u=n("b6f1"),f=Math.min,p=[].push,d="split",v="length",h="lastIndex",g=4294967295,b=!u((function(){RegExp(g,"y")}));n("629c")("split",2,(function(t,e,n,u){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[v]||2!="ab"[d](/(?:ab)*/)[v]||4!="."[d](/(.?)(.?)/)[v]||"."[d](/()()/)[v]>1||""[d](/.?/)[v]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var c,s,l,a=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?g:e>>>0,b=new RegExp(t.source,u+"g");while(c=o.call(b,i)){if(s=b[h],s>f&&(a.push(i.slice(f,c.index)),c[v]>1&&c.index<i[v]&&p.apply(a,c.slice(1)),l=c[0][v],f=s,a[v]>=d))break;b[h]===c.index&&b[h]++}return f===i[v]?!l&&b.test("")||a.push(""):a.push(i.slice(f)),a[v]>d?a.slice(0,d):a}:"0"[d](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):m.call(String(i),n,r)},function(t,e){var r=u(m,t,this,e,m!==n);if(r.done)return r.value;var o=i(t),p=String(this),d=c(o,RegExp),v=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(b?"y":"g"),x=new d(b?o:"^(?:"+o.source+")",h),y=void 0===e?g:e>>>0;if(0===y)return[];if(0===p.length)return null===a(x,p)?[p]:[];var w=0,C=0,S=[];while(C<p.length){x.lastIndex=b?C:0;var _,O=a(x,b?p:p.slice(C));if(null===O||(_=f(l(x.lastIndex+(b?0:C)),p.length))===w)C=s(p,C,v);else{if(S.push(p.slice(w,C)),S.length===y)return S;for(var k=1;k<=O.length-1;k++)if(S.push(O[k]),S.length===y)return S;C=w=_}}return S.push(p.slice(w)),S}]}))},9673:function(t,e,n){"use strict";var r=n("97c9"),i=n.n(r);i.a},"97c9":function(t,e,n){},b0f4:function(t,e,n){"use strict";var r=n("2f03")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},bbd5:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l}));n("d4d5"),n("34a3"),n("3c6b"),n("7bc1");function r(t,e){var n=-1,r=t.length;e||(e=new Array(r));while(++n<r)e[n]=t[n];return e}var i=function(t){var e=null==t?0:t.length;if(!e)return[];var n=-1,i=e-1,c=r(t);while(++n<e){var s=n+Math.floor(Math.random()*(i-n+1)),l=c[s];c[s]=c[n],c[n]=l}return c};function c(t){return t<10?"0"+t:t}function s(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;r++){var i=decodeURIComponent(e[r]),c=/\[\d*:\d*((\.|:)\d*)*\]/g,s=i.match(c);if(s)for(var l=i.replace(c,""),a=0,o=s.length;a<o;a++){var u=s[a],f=Number(String(u.match(/\[\d*/i)).slice(1)),p=Number(String(u.match(/:\d*/i)).slice(1)),d=60*f+p;""!==l&&n.push({time:d,text:l})}}return n}function l(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(c(e),":").concat(c(n))}},f425:function(t,e,n){"use strict";var r=n("a013");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}}}]);