(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{289:function(e,t,n){(function(e){!function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},r=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},i=function(e){return decodeURIComponent(e).replace(/\+/g," ")};"URLSearchParams"in e&&"a=1"===new URLSearchParams("?a=1").toString()||function(){var o=function(e){if(Object.defineProperty(this,"_entries",{writable:!0,value:{}}),"string"==typeof e)""!==e&&this._fromString(e);else if(e instanceof o){var t=this;e.forEach(function(e,n){t.append(n,e)})}},a=o.prototype;a.append=function(e,t){e in this._entries?this._entries[e].push(t.toString()):this._entries[e]=[t.toString()]},a.delete=function(e){delete this._entries[e]},a.get=function(e){return e in this._entries?this._entries[e][0]:null},a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},a.has=function(e){return e in this._entries},a.set=function(e,t){this._entries[e]=[t.toString()]},a.forEach=function(e,t){var n;for(var r in this._entries)if(this._entries.hasOwnProperty(r)){n=this._entries[r];for(var i=0;i<n.length;i++)e.call(t,n[i],r,this)}},a.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),n(e)},a.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},a.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),n(e)},t&&(a[Symbol.iterator]=a.entries),a.toString=function(){var e=[];return this.forEach(function(t,n){e.push(r(n)+"="+r(t))}),e.join("&")},Object.defineProperty(a,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){this._entries={};for(var t,n=(e=e.replace(/^\?/,"")).split("&"),r=0;r<n.length;r++)t=n[r].split("="),this.append(i(t[0]),t.length>1?i(t[1]):"")}}),e.URLSearchParams=o}(),"function"!=typeof URLSearchParams.prototype.sort&&(URLSearchParams.prototype.sort=function(){var e=this,t=[];this.forEach(function(n,r){t.push([r,n]),e._entries||e.delete(r)}),t.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this),function(e){if(function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t));var r,i=document;if(n&&(void 0===e.location||n!==e.location.href)){(r=(i=document.implementation.createHTMLDocument("")).createElement("base")).href=n,i.head.appendChild(r);try{if(0!==r.href.indexOf(n))throw new Error(r.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var o=i.createElement("a");if(o.href=t,r&&(i.body.appendChild(o),o.href=o.href),":"===o.protocol||!/:/.test(o.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:o});var a=new URLSearchParams(this.search),s=!0,c=!0,h=this;["append","delete","set"].forEach(function(e){var t=a[e];a[e]=function(){t.apply(a,arguments),s&&(c=!1,h.search=a.toString(),c=!0)}}),Object.defineProperty(this,"searchParams",{value:a,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,c&&(s=!1,this.searchParams._fromString(this.search),s=!0))}})},r=n.prototype;["hash","host","hostname","port","protocol"].forEach(function(e){!function(e){Object.defineProperty(r,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)}),Object.defineProperty(r,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval(function(){e.location.origin=t()},100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this)}).call(this,n(81))},290:function(e,t,n){"use strict";n.r(t);n(289);var r=n(112),i=n(111);t.default=class{constructor(){}getNews(e){let t=e.map(e=>{let t=new URL(i.a.ArticlesUrl),n={source:e,apiKey:i.a.ApiKey};return Object.keys(n).forEach(e=>t.searchParams.append(e,n[e])),t});(new r.a).sendRequestForJson(t,this.showNews)}showNews(e){let t=document.getElementById("news-container");t.innerHTML="";let n=[];for(let t=0;t<e.length;t++)n.push(...e[t].articles);n=n.sort((e,t)=>Date.parse(t.publishedAt)-Date.parse(e.publishedAt));for(let e=0;e<i.a.NumberOfNews;e++){if(!n[e])return;let r=n[e],i=document.createElement("div"),o=r.publishedAt?`Published: ${r.publishedAt.substr(0,10)}. `:"",a=r.description?r.description:"",s="";s=/(?<=http)s?:\/\//i.test(r.urlToImage)?`<img src='${r.urlToImage}'/></a>`:r.urlToImage?`<img src='${r.url.toString().concat(r.urlToImage)}'/></a>`:"See more...",i.innerHTML=`<div class='article'>\n                <div class='article-header'><h2>${r.title}</h2></div>\n                <div class='article-body'> <a href='${r.url}' target='_blank'>${s}</a> ${a}</div>\n                <div class='article-footer'> \n                    ${o}\n                    <a href='https://newsapi.org' target='_blank'>Powered by NewsAPI.org</a>\n                </div>\n            </div>`,t.appendChild(i)}}applyFilters(){let e=Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"),0).filter(e=>e.checked).map(e=>e.id);this.getNews(e)}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJsLXBvbHlmaWxsL3VybC1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQXJ0aWNsZXNTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsIml0ZXJhdG9yU3VwcG9ydGVkIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJlcnJvciIsImNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkIiwiY3JlYXRlSXRlcmF0b3IiLCJpdGVtcyIsIm5leHQiLCJ2YWx1ZSIsInNoaWZ0IiwiZG9uZSIsInNlcmlhbGl6ZVBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImRlc2VyaWFsaXplUGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsInNlYXJjaFN0cmluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidGhpcyIsIndyaXRhYmxlIiwiX2Zyb21TdHJpbmciLCJfdGhpcyIsImZvckVhY2giLCJuYW1lIiwiYXBwZW5kIiwicHJvdG8iLCJwcm90b3R5cGUiLCJfZW50cmllcyIsInB1c2giLCJkZWxldGUiLCJnZXQiLCJnZXRBbGwiLCJzbGljZSIsImhhcyIsInNldCIsImNhbGxiYWNrIiwidGhpc0FyZyIsImVudHJpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsZW5ndGgiLCJjYWxsIiwia2V5cyIsInZhbHVlcyIsInNlYXJjaEFycmF5Iiwiam9pbiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJhdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwic3BsaXQiLCJwb2x5ZmlsbFVSTFNlYXJjaFBhcmFtcyIsInNvcnQiLCJhIiwiYiIsIndpbmRvdyIsInNlbGYiLCJ1IiwiVVJMIiwicGF0aG5hbWUiLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZSIsImNoZWNrSWZVUkxJc1N1cHBvcnRlZCIsIl9VUkwiLCJ1cmwiLCJiYXNlIiwiU3RyaW5nIiwiYmFzZUVsZW1lbnQiLCJkb2MiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiaW5kZXhPZiIsIkVycm9yIiwiZXJyIiwiYW5jaG9yRWxlbWVudCIsImJvZHkiLCJwcm90b2NvbCIsInRlc3QiLCJUeXBlRXJyb3IiLCJzZWFyY2giLCJlbmFibGVTZWFyY2hVcGRhdGUiLCJlbmFibGVTZWFyY2hQYXJhbXNVcGRhdGUiLCJtZXRob2ROYW1lIiwibWV0aG9kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhdHRyaWJ1dGVOYW1lIiwiX2FuY2hvckVsZW1lbnQiLCJsaW5rVVJMV2l0aEFuY2hvckF0dHJpYnV0ZSIsIl91cGRhdGVTZWFyY2hQYXJhbXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwib3JpZ2luIiwiZXhwZWN0ZWRQb3J0IiwiaHR0cDoiLCJodHRwczoiLCJmdHA6IiwiYWRkUG9ydFRvT3JpZ2luIiwicG9ydCIsImhvc3RuYW1lIiwicGFzc3dvcmQiLCJ1c2VybmFtZSIsImNyZWF0ZU9iamVjdFVSTCIsImJsb2IiLCJyZXZva2VPYmplY3RVUkwiLCJwb2x5ZmlsbFVSTCIsImdldE9yaWdpbiIsInNldEludGVydmFsIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsInIiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX2NvcmVfVXRpbHNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsIl9jb3JlX0NvbnN0YW50c19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fIiwiW29iamVjdCBPYmplY3RdIiwic291cmNlIiwidXJscyIsIm1hcCIsInMiLCJTb3VyY2VVcmwiLCJBcnRpY2xlc1VybCIsInBhcmFtcyIsImFwaUtleSIsIkFwaUtleSIsImtleSIsInNlbmRSZXF1ZXN0Rm9ySnNvbiIsInNob3dOZXdzIiwiZGF0YSIsIm5ld3NDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImFydGljbGVzIiwieCIsInkiLCJEYXRlIiwicGFyc2UiLCJwdWJsaXNoZWRBdCIsIk51bWJlck9mTmV3cyIsImFydCIsImFydGljbGVUZW1wbGF0ZSIsInB1Ymxpc2hlZCIsInN1YnN0ciIsImFydERlc2MiLCJkZXNjcmlwdGlvbiIsImFydEltZyIsInVybFRvSW1hZ2UiLCJjb25jYXQiLCJ0aXRsZSIsInNvdXJjZXNJZHMiLCJBcnJheSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmaWx0ZXIiLCJjIiwiY2hlY2tlZCIsImlkIiwiZ2V0TmV3cyJdLCJtYXBwaW5ncyI6IjhFQUFBLFNBQUFBLElBQUEsU0FBQUEsR0FPQSxJQVNBQyxFQVRBLFdBQ0EsSUFDQSxRQUFBQyxPQUFBQyxTQUNLLE1BQUFDLEdBQ0wsVUFLQUMsR0FFQUMsRUFBQSxTQUFBQyxHQUNBLElBQUFKLEVBQUEsQ0FDQUssS0FBQSxXQUNBLElBQUFDLEVBQUFGLEVBQUFHLFFBQ0EsT0FBZ0JDLFVBQUEsSUFBQUYsYUFVaEIsT0FOQVIsSUFDQUUsRUFBQUQsT0FBQUMsVUFBQSxXQUNBLE9BQUFBLElBSUFBLEdBT0FTLEVBQUEsU0FBQUgsR0FDQSxPQUFBSSxtQkFBQUosR0FBQUssUUFBQSxhQUdBQyxFQUFBLFNBQUFOLEdBQ0EsT0FBQU8sbUJBQUFQLEdBQUFLLFFBQUEsWUF3SEEsb0JBQUFkLEdBQUEsWUFBQWlCLGdCQUFBLFFBQUFDLFlBckhBLFdBRUEsSUFBQUQsRUFBQSxTQUFBRSxHQUdBLEdBRkFDLE9BQUFDLGVBQUFDLEtBQUEsWUFBK0NDLFVBQUEsRUFBQWQsTUFBQSxLQUUvQyxpQkFBQVUsRUFDQSxLQUFBQSxHQUNBRyxLQUFBRSxZQUFBTCxRQUVPLEdBQUFBLGFBQUFGLEVBQUEsQ0FDUCxJQUFBUSxFQUFBSCxLQUNBSCxFQUFBTyxRQUFBLFNBQUFqQixFQUFBa0IsR0FDQUYsRUFBQUcsT0FBQUQsRUFBQWxCLE9BS0FvQixFQUFBWixFQUFBYSxVQUVBRCxFQUFBRCxPQUFB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QTdFLElBQUFuRCxXQUFBd0ksT0FBQVIsRUFBQU8scUJBQTBDLGNBR2pHTixFQUFBVCxvRkFDa0RRLEVBQUFTLHlFQUNJVCxFQUFBN0Usd0JBQTRCbUYsU0FBY0YsK0VBRTFFRiw4SUFLdEJaLEVBQUF4RCxZQUFBbUUsSUFJQXpCLGVBQ0EsSUFBQWtDLEVBQUFDLE1BQUEvSCxVQUFBTSxNQUFBUyxLQUFBNkIsU0FBQW9GLHVCQUFBLHNCQUNBQyxPQUFBQyxLQUFBQyxTQUNBcEMsSUFBQW1DLEtBQUFFLElBQ0E1SSxLQUFBNkksUUFBQVAiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oZ2xvYmFsKSB7XHJcbiAgLyoqXHJcbiAgICogUG9seWZpbGwgVVJMU2VhcmNoUGFyYW1zXHJcbiAgICpcclxuICAgKiBJbnNwaXJlZCBmcm9tIDogaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vdXJsLXNlYXJjaC1wYXJhbXMvYmxvYi9tYXN0ZXIvc3JjL3VybC1zZWFyY2gtcGFyYW1zLmpzXHJcbiAgICovXHJcblxyXG4gIHZhciBjaGVja0lmSXRlcmF0b3JJc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuICEhU3ltYm9sLml0ZXJhdG9yO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgaXRlcmF0b3JTdXBwb3J0ZWQgPSBjaGVja0lmSXRlcmF0b3JJc1N1cHBvcnRlZCgpO1xyXG5cclxuICB2YXIgY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgdmFyIGl0ZXJhdG9yID0ge1xyXG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xyXG4gICAgICAgIHJldHVybiB7IGRvbmU6IHZhbHVlID09PSB2b2lkIDAsIHZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpdGVyYXRvclN1cHBvcnRlZCkge1xyXG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVyYXRvcjtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTZWFyY2ggcGFyYW0gbmFtZSBhbmQgdmFsdWVzIHNob3VsZCBiZSBlbmNvZGVkIGFjY29yZGluZyB0byBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybGVuY29kZWQtc2VyaWFsaXppbmdcclxuICAgKiBlbmNvZGVVUklDb21wb25lbnQoKSBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQgZXhjZXB0IGVuY29kaW5nIHNwYWNlcyBhcyBgJTIwYCBpbnN0ZWFkIG9mIGArYC5cclxuICAgKi9cclxuICB2YXIgc2VyaWFsaXplUGFyYW0gPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTIwL2csICcrJyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRlc2VyaWFsaXplUGFyYW0gPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvXFwrL2csICcgJyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHBvbHlmaWxsVVJMU2VhcmNoUGFyYW1zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIFVSTFNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uKHNlYXJjaFN0cmluZykge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19lbnRyaWVzJywgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBzZWFyY2hTdHJpbmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFN0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuX2Zyb21TdHJpbmcoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoU3RyaW5nIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZWFyY2hTdHJpbmcuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgICAgX3RoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvdG8gPSBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xyXG5cclxuICAgIHByb3RvLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIGlmIChuYW1lIGluIHRoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICB0aGlzLl9lbnRyaWVzW25hbWVdLnB1c2godmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZW50cmllc1tuYW1lXSA9IFt2YWx1ZS50b1N0cmluZygpXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5kZWxldGUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9lbnRyaWVzW25hbWVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIHJldHVybiAobmFtZSBpbiB0aGlzLl9lbnRyaWVzKSA/IHRoaXMuX2VudHJpZXNbbmFtZV1bMF0gOiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5nZXRBbGwgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIHJldHVybiAobmFtZSBpbiB0aGlzLl9lbnRyaWVzKSA/IHRoaXMuX2VudHJpZXNbbmFtZV0uc2xpY2UoMCkgOiBbXTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uaGFzID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICByZXR1cm4gKG5hbWUgaW4gdGhpcy5fZW50cmllcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2VudHJpZXNbbmFtZV0gPSBbdmFsdWUudG9TdHJpbmcoKV07XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xyXG4gICAgICB2YXIgZW50cmllcztcclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9lbnRyaWVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VudHJpZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLl9lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgZW50cmllc1tpXSwgbmFtZSwgdGhpcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmtleXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3IoaXRlbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by52YWx1ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGl0ZW1zLnB1c2godmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yKGl0ZW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uZW50cmllcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvcihpdGVtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpdGVyYXRvclN1cHBvcnRlZCkge1xyXG4gICAgICBwcm90b1tTeW1ib2wuaXRlcmF0b3JdID0gcHJvdG8uZW50cmllcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90by50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VhcmNoQXJyYXkgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgc2VhcmNoQXJyYXkucHVzaChzZXJpYWxpemVQYXJhbShuYW1lKSArICc9JyArIHNlcmlhbGl6ZVBhcmFtKHZhbHVlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc2VhcmNoQXJyYXkuam9pbignJicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdfZnJvbVN0cmluZycsIHtcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKHNlYXJjaFN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2VudHJpZXMgPSB7fTtcclxuICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcucmVwbGFjZSgvXlxcPy8sICcnKTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHNlYXJjaFN0cmluZy5zcGxpdCgnJicpO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICB0aGlzLmFwcGVuZChcclxuICAgICAgICAgICAgZGVzZXJpYWxpemVQYXJhbShhdHRyaWJ1dGVbMF0pLFxyXG4gICAgICAgICAgICAoYXR0cmlidXRlLmxlbmd0aCA+IDEpID8gZGVzZXJpYWxpemVQYXJhbShhdHRyaWJ1dGVbMV0pIDogJydcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xyXG4gIH07XHJcblxyXG4gIGlmICghKCdVUkxTZWFyY2hQYXJhbXMnIGluIGdsb2JhbCkgfHwgKG5ldyBVUkxTZWFyY2hQYXJhbXMoJz9hPTEnKS50b1N0cmluZygpICE9PSAnYT0xJykpIHtcclxuICAgIHBvbHlmaWxsVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuc29ydCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xyXG4gICAgICAgIGlmICghX3RoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICAgIF90aGlzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZiAoYVswXSA8IGJbMF0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFbMF0gPiBiWzBdKSB7XHJcbiAgICAgICAgICByZXR1cm4gKzE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChfdGhpcy5fZW50cmllcykgeyAvLyBmb3JjZSByZXNldCBiZWNhdXNlIElFIGtlZXBzIGtleXMgaW5kZXhcclxuICAgICAgICBfdGhpcy5fZW50cmllcyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFwcGVuZChpdGVtc1tpXVswXSwgaXRlbXNbaV1bMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gSFRNTEFuY2hvckVsZW1lbnRcclxuXHJcbn0pKFxyXG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgPyBnbG9iYWxcclxuICAgIDogKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3dcclxuICAgIDogKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IHRoaXMpKVxyXG4pO1xyXG5cclxuKGZ1bmN0aW9uKGdsb2JhbCkge1xyXG4gIC8qKlxyXG4gICAqIFBvbHlmaWxsIFVSTFxyXG4gICAqXHJcbiAgICogSW5zcGlyZWQgZnJvbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcnYvRE9NLVVSTC1Qb2x5ZmlsbC9ibG9iL21hc3Rlci9zcmMvdXJsLmpzXHJcbiAgICovXHJcblxyXG4gIHZhciBjaGVja0lmVVJMSXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciB1ID0gbmV3IFVSTCgnYicsICdodHRwOi8vYScpO1xyXG4gICAgICB1LnBhdGhuYW1lID0gJ2MlMjBkJztcclxuICAgICAgcmV0dXJuICh1LmhyZWYgPT09ICdodHRwOi8vYS9jJTIwZCcpICYmIHUuc2VhcmNoUGFyYW1zO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBwb2x5ZmlsbFVSTCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIF9VUkwgPSBnbG9iYWwuVVJMO1xyXG5cclxuICAgIHZhciBVUkwgPSBmdW5jdGlvbih1cmwsIGJhc2UpIHtcclxuICAgICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB1cmwgPSBTdHJpbmcodXJsKTtcclxuXHJcbiAgICAgIC8vIE9ubHkgY3JlYXRlIGFub3RoZXIgZG9jdW1lbnQgaWYgdGhlIGJhc2UgaXMgZGlmZmVyZW50IGZyb20gY3VycmVudCBsb2NhdGlvbi5cclxuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LCBiYXNlRWxlbWVudDtcclxuICAgICAgaWYgKGJhc2UgJiYgKGdsb2JhbC5sb2NhdGlvbiA9PT0gdm9pZCAwIHx8IGJhc2UgIT09IGdsb2JhbC5sb2NhdGlvbi5ocmVmKSkge1xyXG4gICAgICAgIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XHJcbiAgICAgICAgYmFzZUVsZW1lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xyXG4gICAgICAgIGJhc2VFbGVtZW50LmhyZWYgPSBiYXNlO1xyXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKGJhc2VFbGVtZW50LmhyZWYuaW5kZXhPZihiYXNlKSAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKGJhc2VFbGVtZW50LmhyZWYpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVUkwgdW5hYmxlIHRvIHNldCBiYXNlICcgKyBiYXNlICsgJyBkdWUgdG8gJyArIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGFuY2hvckVsZW1lbnQuaHJlZiA9IHVybDtcclxuICAgICAgaWYgKGJhc2VFbGVtZW50KSB7XHJcbiAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yRWxlbWVudCk7XHJcbiAgICAgICAgYW5jaG9yRWxlbWVudC5ocmVmID0gYW5jaG9yRWxlbWVudC5ocmVmOyAvLyBmb3JjZSBocmVmIHRvIHJlZnJlc2hcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFuY2hvckVsZW1lbnQucHJvdG9jb2wgPT09ICc6JyB8fCAhLzovLnRlc3QoYW5jaG9yRWxlbWVudC5ocmVmKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVVJMJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2FuY2hvckVsZW1lbnQnLCB7XHJcbiAgICAgICAgdmFsdWU6IGFuY2hvckVsZW1lbnRcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgLy8gY3JlYXRlIGEgbGlua2VkIHNlYXJjaFBhcmFtcyB3aGljaCByZWZsZWN0IGl0cyBjaGFuZ2VzIG9uIFVSTFxyXG4gICAgICB2YXIgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLnNlYXJjaCk7XHJcbiAgICAgIHZhciBlbmFibGVTZWFyY2hVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB2YXIgZW5hYmxlU2VhcmNoUGFyYW1zVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgWydhcHBlbmQnLCAnZGVsZXRlJywgJ3NldCddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBzZWFyY2hQYXJhbXNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgc2VhcmNoUGFyYW1zW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBtZXRob2QuYXBwbHkoc2VhcmNoUGFyYW1zLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgaWYgKGVuYWJsZVNlYXJjaFVwZGF0ZSkge1xyXG4gICAgICAgICAgICBlbmFibGVTZWFyY2hQYXJhbXNVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3RoaXMuc2VhcmNoID0gc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3NlYXJjaFBhcmFtcycsIHtcclxuICAgICAgICB2YWx1ZTogc2VhcmNoUGFyYW1zLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgc2VhcmNoID0gdm9pZCAwO1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ191cGRhdGVTZWFyY2hQYXJhbXMnLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgc2VhcmNoID0gdGhpcy5zZWFyY2g7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGVTZWFyY2hQYXJhbXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICBlbmFibGVTZWFyY2hVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5fZnJvbVN0cmluZyh0aGlzLnNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgZW5hYmxlU2VhcmNoVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm90byA9IFVSTC5wcm90b3R5cGU7XHJcblxyXG4gICAgdmFyIGxpbmtVUkxXaXRoQW5jaG9yQXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGF0dHJpYnV0ZU5hbWUsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvckVsZW1lbnRbYXR0cmlidXRlTmFtZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50W2F0dHJpYnV0ZU5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBbJ2hhc2gnLCAnaG9zdCcsICdob3N0bmFtZScsICdwb3J0JywgJ3Byb3RvY29sJ11cclxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgIGxpbmtVUkxXaXRoQW5jaG9yQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdzZWFyY2gnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvckVsZW1lbnRbJ3NlYXJjaCddO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudFsnc2VhcmNoJ10gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocHJvdG8sIHtcclxuXHJcbiAgICAgICd0b1N0cmluZyc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhyZWY7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgICdocmVmJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudC5ocmVmLnJlcGxhY2UoL1xcPyQvLCAnJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50LmhyZWYgPSB2YWx1ZTtcclxuICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ3BhdGhuYW1lJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudC5wYXRobmFtZS5yZXBsYWNlKC8oXlxcLz8pLywgJy8nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnQucGF0aG5hbWUgPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgICdvcmlnaW4nOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8vIGdldCBleHBlY3RlZCBwb3J0IGZyb20gcHJvdG9jb2xcclxuICAgICAgICAgIHZhciBleHBlY3RlZFBvcnQgPSB7ICdodHRwOic6IDgwLCAnaHR0cHM6JzogNDQzLCAnZnRwOic6IDIxIH1bdGhpcy5fYW5jaG9yRWxlbWVudC5wcm90b2NvbF07XHJcbiAgICAgICAgICAvLyBhZGQgcG9ydCB0byBvcmlnaW4gaWYsIGV4cGVjdGVkIHBvcnQgaXMgZGlmZmVyZW50IHRoYW4gYWN0dWFsIHBvcnRcclxuICAgICAgICAgIC8vIGFuZCBpdCBpcyBub3QgZW1wdHkgZi5lIGh0dHA6Ly9mb286ODA4MFxyXG4gICAgICAgICAgLy8gODA4MCAhPSA4MCAmJiA4MDgwICE9ICcnXHJcbiAgICAgICAgICB2YXIgYWRkUG9ydFRvT3JpZ2luID0gdGhpcy5fYW5jaG9yRWxlbWVudC5wb3J0ICE9IGV4cGVjdGVkUG9ydCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50LnBvcnQgIT09ICcnO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50LnByb3RvY29sICtcclxuICAgICAgICAgICAgJy8vJyArXHJcbiAgICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnQuaG9zdG5hbWUgK1xyXG4gICAgICAgICAgICAoYWRkUG9ydFRvT3JpZ2luID8gKCc6JyArIHRoaXMuX2FuY2hvckVsZW1lbnQucG9ydCkgOiAnJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAncGFzc3dvcmQnOiB7IC8vIFRPRE9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ3VzZXJuYW1lJzogeyAvLyBUT0RPXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIFVSTC5jcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgIHJldHVybiBfVVJMLmNyZWF0ZU9iamVjdFVSTC5hcHBseShfVVJMLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgIHJldHVybiBfVVJMLnJldm9rZU9iamVjdFVSTC5hcHBseShfVVJMLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnbG9iYWwuVVJMID0gVVJMO1xyXG5cclxuICB9O1xyXG5cclxuICBpZiAoIWNoZWNrSWZVUkxJc1N1cHBvcnRlZCgpKSB7XHJcbiAgICBwb2x5ZmlsbFVSTCgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKChnbG9iYWwubG9jYXRpb24gIT09IHZvaWQgMCkgJiYgISgnb3JpZ2luJyBpbiBnbG9iYWwubG9jYXRpb24pKSB7XHJcbiAgICB2YXIgZ2V0T3JpZ2luID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBnbG9iYWwubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZ2xvYmFsLmxvY2F0aW9uLmhvc3RuYW1lICsgKGdsb2JhbC5sb2NhdGlvbi5wb3J0ID8gKCc6JyArIGdsb2JhbC5sb2NhdGlvbi5wb3J0KSA6ICcnKTtcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbC5sb2NhdGlvbiwgJ29yaWdpbicsIHtcclxuICAgICAgICBnZXQ6IGdldE9yaWdpbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBnbG9iYWwubG9jYXRpb24ub3JpZ2luID0gZ2V0T3JpZ2luKCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoXHJcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSA/IGdsb2JhbFxyXG4gICAgOiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvd1xyXG4gICAgOiAoKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogdGhpcykpXHJcbik7XHJcbiIsImltcG9ydCAndXJsLXBvbHlmaWxsJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2NvcmUvVXRpbHMuanMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvcmUvQ29uc3RhbnRzLmpzJztcclxuXHJcbmNsYXNzIEFydGljbGVzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmxzID0gc291cmNlLm1hcChzID0+IHtcclxuICAgICAgICAgICAgbGV0IFNvdXJjZVVybCA9IG5ldyBVUkwoQ29uc3RhbnRzLkFydGljbGVzVXJsKTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgc291cmNlOiBzLCBhcGlLZXk6IENvbnN0YW50cy5BcGlLZXkgfTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4gU291cmNlVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbXNba2V5XSkpXHJcbiAgICAgICAgICAgIHJldHVybiBTb3VyY2VVcmw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHV0aWxzID0gbmV3IFV0aWxzKCk7XHJcbiAgICAgICAgdXRpbHMuc2VuZFJlcXVlc3RGb3JKc29uKHVybHMsIHRoaXMuc2hvd05ld3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93TmV3cyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IG5ld3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIG5ld3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbGV0IGFydGljbGVzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnRpY2xlcy5wdXNoKC4uLihkYXRhW2ldLmFydGljbGVzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnRpY2xlcyA9IGFydGljbGVzLnNvcnQoKHgsIHkpID0+IERhdGUucGFyc2UoeS5wdWJsaXNoZWRBdCkgLSBEYXRlLnBhcnNlKHgucHVibGlzaGVkQXQpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuTnVtYmVyT2ZOZXdzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFhcnRpY2xlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJ0ID0gYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZXQgcHVibGlzaGVkID0gYXJ0LnB1Ymxpc2hlZEF0ID8gYFB1Ymxpc2hlZDogJHthcnQucHVibGlzaGVkQXQuc3Vic3RyKDAsIDEwKX0uIGAgOiBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgYXJ0RGVzYyA9IGFydC5kZXNjcmlwdGlvbiA/IGFydC5kZXNjcmlwdGlvbiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJ0SW1nID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBwYXQgPSAvKD88PWh0dHApcz86XFwvXFwvL2k7XHJcbiAgICAgICAgICAgIGlmIChwYXQudGVzdChhcnQudXJsVG9JbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgIGFydEltZyA9IGA8aW1nIHNyYz0nJHthcnQudXJsVG9JbWFnZX0nLz48L2E+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFydEltZyA9IGFydC51cmxUb0ltYWdlID8gYDxpbWcgc3JjPScke2FydC51cmwudG9TdHJpbmcoKS5jb25jYXQoYXJ0LnVybFRvSW1hZ2UpfScvPjwvYT5gIDogJ1NlZSBtb3JlLi4uJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJ0aWNsZVRlbXBsYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdhcnRpY2xlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FydGljbGUtaGVhZGVyJz48aDI+JHthcnQudGl0bGV9PC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FydGljbGUtYm9keSc+IDxhIGhyZWY9JyR7YXJ0LnVybH0nIHRhcmdldD0nX2JsYW5rJz4ke2FydEltZ308L2E+ICR7YXJ0RGVzY308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FydGljbGUtZm9vdGVyJz4gXHJcbiAgICAgICAgICAgICAgICAgICAgJHtwdWJsaXNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9uZXdzYXBpLm9yZycgdGFyZ2V0PSdfYmxhbmsnPlBvd2VyZWQgYnkgTmV3c0FQSS5vcmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZVRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXJzKCkge1xyXG4gICAgICAgIGxldCBzb3VyY2VzSWRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvdXJjZS1jaGVja2JveFwiKSwgMCkgLy9jb252ZXJ0IHRvIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjLmNoZWNrZWQpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLmlkKTtcclxuICAgICAgICB0aGlzLmdldE5ld3Moc291cmNlc0lkcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzU2VydmljZTsiXSwic291cmNlUm9vdCI6IiJ9