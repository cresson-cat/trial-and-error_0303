!function(e){function t(t){for(var o,i,u=t[0],a=t[1],c=t[2],f=0,d=[];f<u.length;f++)i=u[f],n[i]&&d.push(n[i][0]),n[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(l&&l(t);d.length;)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,u=1;u<r.length;u++){var a=r[u];0!==n[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={1:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=a;s.push([8,0]),r()}({1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){var e=this;this._observers={},this.add=function(t,r){e._observers[t]||(e._observers[t]=[]),e._observers[t].push(r)},this.remove=function(t,r){e._observers[t]&&Array.isArray(e._observers[t])&&e._observers[t].forEach(function(o,n){o===r&&e._observers[t].splice(n,1)})},this.notify=function(t){e._observers[t]&&Array.isArray(e._observers[t])&&e._observers[t].forEach(function(e,t){e()})}}}();t.default=o},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);t.default=function(){var e=new o.default,t="kitty on the lap";e.add("start",function(){return console.log("-----")}),e.add("peace",function(){return console.log(t)}),e.add("peace",function(){return console.log(t)}),e.add("peace",function(){return console.log(t)}),e.notify("start"),e.notify("peace")}},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),n=r(6),s=r(2);new n.default({el:"#app",data:{message:"kitty on the lap",items:[{title:"MS Azureを試す",isChecked:!0},{title:"Vue.jsのコンポーネントを試す（本アプリ）",isChecked:!1},{title:"typescriptでobserverパターンのコードを書く（break through JS 参照）",isChecked:!0},{title:"fetch apiを試す（tsconfig.jsonのlib[“dom”]）",isChecked:!1},{title:"jquery.slimを試す（$.ajaxをasync/await化してみる）",isChecked:!1},{title:"observerパターンのコードを拡張する（break through JS 参照）",isChecked:!1}],newTitle:""},methods:{add:function(e){this.items.push({title:e,isChecked:!1}),this.newTitle="",this.saveTodo()},deleteTodo:function(){this.items=this.items.filter(function(e){return!1===e.isChecked}),this.saveTodo()},loadTodo:function(){var e=localStorage.getItem("items");null!==e&&(this.items=JSON.parse(e))},saveTodo:function(){localStorage.setItem("items",JSON.stringify(this.items))}},mounted:function(){this.loadTodo()}}),o(function(){s.default()})}});