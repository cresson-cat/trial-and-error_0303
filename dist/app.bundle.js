!function(e){function t(t){for(var r,i,c=t[0],u=t[1],a=t[2],f=0,d=[];f<c.length;f++)i=c[f],n[i]&&d.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);d.length;)d.shift()();return s.push.apply(s,a||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,c=1;c<o.length;c++){var u=o[c];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={1:0},s=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=u;s.push([8,0]),o()}({1:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){var e=this;this._observers={},this.add=function(t,o){e._observers[t]||(e._observers[t]=[]),e._observers[t].push(o)},this.remove=function(t,o){e._observers[t]&&Array.isArray(e._observers[t])&&e._observers[t].forEach(function(r,n){r===o&&e._observers[t].splice(n,1)})},this.notify=function(t){e._observers[t]&&Array.isArray(e._observers[t])&&e._observers[t].forEach(function(e,t){e()})}}}();t.default=r},2:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(1);t.default=function(){var e=new r.default,t="kitty on the lap";e.add("start",function(){return console.log("-----")}),e.add("peace",function(){return console.log(t)}),e.add("peace",function(){return console.log(t)}),e.add("peace",function(){return console.log(t)}),e.notify("start"),e.notify("peace")}},8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(7),n=o(6),s=o(2);new n.default({el:"#app",data:{message:"kitty on the lap",items:[{title:"MS Azureを試す",isChecked:!0},{title:"jquery.slimを試す",isChecked:!1},{title:"typescriptで簡単なobserverパターンのコードを書く（break through JSの本より）",isChecked:!1},{title:"fetch apiを試す（tsconfig.jsonのlib[“dom”]）",isChecked:!1},{title:"promiseを試す（tsconfig.jsonのlib[“es2015.promise”]）",isChecked:!1},{title:"async/awaitを試す（tsconfig.jsonのlib[“es2015.promise”]）",isChecked:!1}],newTitle:""},methods:{add:function(e){this.items.push({title:e,isChecked:!1}),this.newTitle="",this.saveTodo()},deleteTodo:function(){this.items=this.items.filter(function(e){return!1===e.isChecked}),this.saveTodo()},loadTodo:function(){var e=localStorage.getItem("items");null!==e&&(this.items=JSON.parse(e))},saveTodo:function(){localStorage.setItem("items",JSON.stringify(this.items))}},mounted:function(){this.loadTodo()}}),r(function(){s.default()})}});