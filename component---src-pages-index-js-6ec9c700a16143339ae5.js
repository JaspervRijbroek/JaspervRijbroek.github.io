/*! For license information please see component---src-pages-index-js-6ec9c700a16143339ae5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d})),r.d(t,"IndexPageQuery",(function(){return p}));var n=r("dI71"),a=r("q1tI"),o=r.n(a),s=r("sweJ"),u=r("YLfg"),i=r.n(u),c=function(e){return o.a.createElement("div",{className:"search"},o.a.createElement("input",{className:"search__input",type:"text",placeholder:"Search",onKeyUp:e.onKeyUp}))},f=r("xKDr"),l=i()("IMR7H3NXXW","c559f11f4c0ecb1bf2540a712cda78d5").initIndex("Posts"),d=function(e){function t(){var t;return(t=e.call(this)||this).state={currentPage:0,postLimit:5},t}Object(n.a)(t,e);var r=t.prototype;return r.updateSearch=function(e){var t=this;if(!e)return this.setState({searchResults:!1});l.search(e).then((function(e){var r=e.hits;t.setState({currentPage:0,searchResults:r.sort((function(e,t){var r=new Date(e.fields.date).getTime(),n=new Date(t.fields.date).getTime();return r===n?0:r>n?-1:1})).map((function(e){return e.id=e.objectID,{node:e}}))})}))},r.getPosts=function(){return this.state&&this.state.searchResults?this.state.searchResults:this.props.data.allContentfulPost.edges},r.render=function(){var e=this,t=this.getPosts(),r=t.length>this.state.postLimit,n=t.slice(this.state.postLimit*this.state.currentPage,this.state.postLimit*this.state.currentPage+this.state.postLimit);return o.a.createElement(s.default,{isHome:!0},o.a.createElement(c,{onKeyUp:function(t){return e.updateSearch(t.target.value)}}),t&&t.length>0&&o.a.createElement(f.a,{posts:n}),(!t||!t.length)&&o.a.createElement("p",null,"No posts found!"),r&&o.a.createElement("nav",{id:"post-nav"},this.state.currentPage>0&&o.a.createElement("span",{className:"prev"},o.a.createElement("button",{type:"button",title:"Previous page",onClick:function(){return e.setState({currentPage:e.state.currentPage-1}),!1},style:{cursor:"hand"}},o.a.createElement("span",{className:"arrow"},"←")," Newer Posts")),n.length>=this.state.postLimit&&o.a.createElement("span",{className:"next"},o.a.createElement("button",{type:"button",title:"Previous page",onClick:function(){return e.setState({currentPage:e.state.currentPage+1}),!1},style:{cursor:"hand"}},"Older Posts ",o.a.createElement("span",{className:"arrow"},"→")))))},t}(o.a.Component),p="568568381"},YLfg:function(e,t,r){e.exports=function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){e(r,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},o=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=o()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=a(e,2),n=t[0],o=t[1];return Promise.all([n,o||r.miss(n)])})).then((function(e){return a(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var a=o();return a[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(a)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=o();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function u(e){var t=o(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return a(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,a).catch((function(){return u({caches:t}).get(e,n,a)}))},set:function(e,n){return r.set(e,n).catch((function(){return u({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return u({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return u({caches:t}).clear()}))}}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in t)return Promise.resolve(e.serializable?JSON.parse(t[o]):t[o]);var s=n(),u=a&&a.miss||function(){return Promise.resolve()};return s.then((function(e){return u(e)})).then((function(){return s}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===m.WithinHeaders?n:{}},queryParameters:function(){return e===m.WithinQueryParameters?n:{}}}}function f(e){var t=0;return e((function r(){return t++,new Promise((function(n){setTimeout((function(){n(e(r))}),Math.min(100*t,1e3))}))}))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return Promise.resolve()};return Object.assign(e,{wait:function(r){return l(e.then((function(e){return Promise.all([t(e,r),e])})).then((function(e){return e[1]})))}})}function d(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function p(e,t){return t?(Object.keys(t).forEach((function(r){e[r]=t[r](e)})),e):e}function h(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[a++])}))}var m={WithinQueryParameters:0,WithinHeaders:1};function y(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var g={Read:1,Write:2,Any:3};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:g.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||g.Any}}var P="DELETE",w="GET",O="POST";function I(e,t,n,a){var s=[],u=function(e,t){if(e.method!==w&&(void 0!==e.data||void 0!==t.data)){var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}}(n,a),i=function(e,t){var n=r(r({},e.headers),t.headers),a={};return Object.keys(n).forEach((function(e){var t=n[e];a[e.toLowerCase()]=t})),a}(e,a),c=n.method,f=n.method!==w?{}:r(r({},n.data),a.data),l=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),f),a.queryParameters),d=0,p=function t(r,o){var f=r.pop();if(void 0===f)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:k(s)};var p={data:u,headers:i,method:c,url:D(f,n.path,l),connectTimeout:o(d,e.timeouts.connect),responseTimeout:o(d,a.timeout)},h=function(e){var t={request:p,response:e,host:f,triesLeft:r.length};return s.push(t),t},m={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var a=h(n);return n.isTimedOut&&d++,Promise.all([e.logger.info("Retryable failure",S(a)),e.hostsCache.set(f,v(f,n.isTimedOut?3:2))]).then((function(){return t(r,o)}))},onFail:function(e){throw h(e),function(e,t){var r=e.content,n=e.status,a=r;try{a=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(a,n,t)}(e,k(s))}};return e.requester.send(p).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)}(e,m)}))};return function(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(v(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return 1===e.status||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return 3===e.status&&Date.now()-e.lastUpdate<=12e4}(e)})),a=[].concat(o(r),o(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:a.length>0?a.map((function(e){return b(e)})):t}}))}(e.hostsCache,t).then((function(e){return p(o(e.statelessHosts).reverse(),e.getTimeout)}))}function j(e){var t=e.hostsCache,r=e.logger,n=e.requester,o=e.requestsCache,s=e.responsesCache,u=e.timeouts,i=e.userAgent,c=e.hosts,f=e.queryParameters,l={hostsCache:t,logger:r,requester:n,requestsCache:o,responsesCache:s,timeouts:u,userAgent:i,headers:e.headers,queryParameters:f,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=y(t,l.timeouts.read),n=function(){return I(l,l.hosts.filter((function(e){return 0!=(e.accept&g.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var o={request:e,mappedRequestOptions:r,transporter:{queryParameters:l.queryParameters,headers:l.headers}};return l.responsesCache.get(o,(function(){return l.requestsCache.get(o,(function(){return l.requestsCache.set(o,n()).then((function(e){return Promise.all([l.requestsCache.delete(o),e])}),(function(e){return Promise.all([l.requestsCache.delete(o),Promise.reject(e)])})).then((function(e){var t=a(e,2);return t[0],t[1]}))}))}),{miss:function(e){return l.responsesCache.set(o,e)}})},write:function(e,t){return I(l,l.hosts.filter((function(e){return 0!=(e.accept&g.Write)})),e,y(t,l.timeouts.write))}};return l}function x(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function D(e,t,r){var n=q(r),a="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(a+="?".concat(n)),a}function q(e){return Object.keys(e).map((function(t){return h("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function k(e){return e.map((function(e){return S(e)}))}function S(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var N=function(e){return function(t,r){return e.transporter.write({method:O,path:"2/abtests",data:t},r)}},T=function(e){return function(t,r){return e.transporter.write({method:P,path:h("2/abtests/%s",t)},r)}},E=function(e){return function(t,r){return e.transporter.read({method:w,path:h("2/abtests/%s",t)},r)}},R=function(e){return function(t){return e.transporter.read({method:w,path:"2/abtests"},t)}},A=function(e){return function(t,r){return e.transporter.write({method:O,path:h("2/abtests/%s/stop",t)},r)}},C=function(e){return function(t){return e.transporter.read({method:w,path:"1/strategies/personalization"},t)}},U=function(e){return function(t,r){return e.transporter.write({method:O,path:"1/strategies/personalization",data:t},r)}};function J(e){return function t(r){return e.request(r).then((function(n){if(void 0!==e.batch&&e.batch(n.hits),!e.shouldStop(n))return n.cursor?t({cursor:n.cursor}):t({page:(r.page||0)+1})}))}({})}var H=function(e){return function(t,a){var o=a||{},s=o.queryParameters,u=n(o,["queryParameters"]),i=r({acl:t},void 0!==s?{queryParameters:s}:{});return l(e.transporter.write({method:O,path:"1/keys",data:i},u),(function(t,r){return f((function(n){return B(e)(t.key,r).catch((function(e){if(404!==e.status)throw e;return n()}))}))}))}},z=function(e){return function(t,r,n){var a=y(n);return a.queryParameters["X-Algolia-User-ID"]=t,e.transporter.write({method:O,path:"1/clusters/mapping",data:{cluster:r}},a)}},M=function(e){return function(t,r,n){return e.transporter.write({method:O,path:"1/clusters/mapping/batch",data:{users:t,cluster:r}},n)}},K=function(e){return function(t,r,n){return l(e.transporter.write({method:O,path:h("1/indexes/%s/operation",t),data:{operation:"copy",destination:r}},n),(function(r,n){return Y(e)(t,{methods:{waitTask:Ve}}).waitTask(r.taskID,n)}))}},L=function(e){return function(t,n,a){return K(e)(t,n,r(r({},a),{},{scope:[Ye.Rules]}))}},F=function(e){return function(t,n,a){return K(e)(t,n,r(r({},a),{},{scope:[Ye.Settings]}))}},W=function(e){return function(t,n,a){return K(e)(t,n,r(r({},a),{},{scope:[Ye.Synonyms]}))}},_=function(e){return function(t,r){return l(e.transporter.write({method:P,path:h("1/keys/%s",t)},r),(function(r,n){return f((function(r){return B(e)(t,n).then(r).catch((function(e){if(404!==e.status)throw e}))}))}))}},B=function(e){return function(t,r){return e.transporter.read({method:w,path:h("1/keys/%s",t)},r)}},Q=function(e){return function(t){return e.transporter.read({method:w,path:"1/logs"},t)}},G=function(e){return function(t){return e.transporter.read({method:w,path:"1/clusters/mapping/top"},t)}},V=function(e){return function(t,r){return e.transporter.read({method:w,path:h("1/clusters/mapping/%s",t)},r)}},X=function(e){return function(t){var r=t||{},a=r.retrieveMappings,o=n(r,["retrieveMappings"]);return!0===a&&(o.getClusters=!0),e.transporter.read({method:w,path:"1/clusters/mapping/pending"},o)}},Y=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return p(n,r.methods)}},Z=function(e){return function(t){return e.transporter.read({method:w,path:"1/keys"},t)}},$=function(e){return function(t){return e.transporter.read({method:w,path:"1/clusters"},t)}},ee=function(e){return function(t){return e.transporter.read({method:w,path:"1/indexes"},t)}},te=function(e){return function(t){return e.transporter.read({method:w,path:"1/clusters/mapping"},t)}},re=function(e){return function(t,r,n){return l(e.transporter.write({method:O,path:h("1/indexes/%s/operation",t),data:{operation:"move",destination:r}},n),(function(r,n){return Y(e)(t,{methods:{waitTask:Ve}}).waitTask(r.taskID,n)}))}},ne=function(e){return function(t,r){return l(e.transporter.write({method:O,path:"1/indexes/*/batch",data:{requests:t}},r),(function(t,r){return Promise.all(Object.keys(t.taskID).map((function(n){return Y(e)(n,{methods:{waitTask:Ve}}).waitTask(t.taskID[n],r)})))}))}},ae=function(e){return function(t,r){return e.transporter.read({method:O,path:"1/indexes/*/objects",data:{requests:t}},r)}},oe=function(e){return function(t,n){var a=t.map((function(e){return r(r({},e),{},{params:q(e.params||{})})}));return e.transporter.read({method:O,path:"1/indexes/*/queries",data:{requests:a},cacheable:!0},n)}},se=function(e){return function(t,a){return Promise.all(t.map((function(t){var o=t.params,s=o.facetName,u=o.facetQuery,i=n(o,["facetName","facetQuery"]);return Y(e)(t.indexName,{methods:{searchForFacetValues:_e}}).searchForFacetValues(s,u,r(r({},a),i))})))}},ue=function(e){return function(t,r){var n=y(r);return n.queryParameters["X-Algolia-User-ID"]=t,e.transporter.write({method:P,path:"1/clusters/mapping"},n)}},ie=function(e){return function(t,r){return l(e.transporter.write({method:O,path:h("1/keys/%s/restore",t)},r),(function(r,n){return f((function(r){return B(e)(t,n).catch((function(e){if(404!==e.status)throw e;return r()}))}))}))}},ce=function(e){return function(t,r){return e.transporter.read({method:O,path:"1/clusters/mapping/search",data:{query:t}},r)}},fe=function(e){return function(t,r){var a=Object.assign({},r),o=r||{},s=o.queryParameters,u=n(o,["queryParameters"]),i=s?{queryParameters:s}:{},c=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return l(e.transporter.write({method:"PUT",path:h("1/keys/%s",t),data:i},u),(function(r,n){return f((function(r){return B(e)(t,n).then((function(e){return function(e){return Object.keys(a).filter((function(e){return-1!==c.indexOf(e)})).every((function(t){return e[t]===a[t]}))}(e)?Promise.resolve():r()}))}))}))}},le=function(e){return function(t,r){return l(e.transporter.write({method:O,path:h("1/indexes/%s/batch",e.indexName),data:{requests:t}},r),(function(t,r){return Ve(e)(t.taskID,r)}))}},de=function(e){return function(t){return J(r(r({shouldStop:function(e){return void 0===e.cursor}},t),{},{request:function(r){return e.transporter.read({method:O,path:h("1/indexes/%s/browse",e.indexName),data:r},t)}}))}},pe=function(e){return function(t){var n=r({hitsPerPage:1e3},t);return J(r(r({shouldStop:function(e){return e.hits.length<n.hitsPerPage}},n),{},{request:function(t){return Be(e)("",r(r({},n),t)).then((function(e){return r(r({},e),{},{hits:e.hits.map((function(e){return delete e._highlightResult,e}))})}))}}))}},he=function(e){return function(t){var n=r({hitsPerPage:1e3},t);return J(r(r({shouldStop:function(e){return e.hits.length<n.hitsPerPage}},n),{},{request:function(t){return Qe(e)("",r(r({},n),t)).then((function(e){return r(r({},e),{},{hits:e.hits.map((function(e){return delete e._highlightResult,e}))})}))}}))}},me=function(e){return function(t,r,a){var o=a||{},s=o.batchSize,u=n(o,["batchSize"]),i={taskIDs:[],objectIDs:[]};return l(function n(){var a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=[];for(a=o;a<t.length&&(c.push(t[a]),c.length!==(s||1e3));a++);return 0===c.length?Promise.resolve(i):le(e)(c.map((function(e){return{action:r,body:e}})),u).then((function(e){return i.objectIDs=i.objectIDs.concat(e.objectIDs),i.taskIDs.push(e.taskID),a++,n(a)}))}(),(function(t,r){return Promise.all(t.taskIDs.map((function(t){return Ve(e)(t,r)})))}))}},ye=function(e){return function(t){return l(e.transporter.write({method:O,path:h("1/indexes/%s/clear",e.indexName)},t),(function(t,r){return Ve(e)(t.taskID,r)}))}},ge=function(e){return function(t){var r=t||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),l(e.transporter.write({method:O,path:h("1/indexes/%s/rules/clear",e.indexName)},o),(function(t,r){return Ve(e)(t.taskID,r)}))}},ve=function(e){return function(t){var r=t||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),l(e.transporter.write({method:O,path:h("1/indexes/%s/synonyms/clear",e.indexName)},o),(function(t,r){return Ve(e)(t.taskID,r)}))}},be=function(e){return function(t,r){return l(e.transporter.write({method:O,path:h("1/indexes/%s/deleteByQuery",e.indexName),data:t},r),(function(t,r){return Ve(e)(t.taskID,r)}))}},Pe=function(e){return function(t){return l(e.transporter.write({method:P,path:h("1/indexes/%s",e.indexName)},t),(function(t,r){return Ve(e)(t.taskID,r)}))}},we=function(e){return function(t,r){return l(Oe(e)([t],r).then((function(e){return{taskID:e.taskIDs[0]}})),(function(t,r){return Ve(e)(t.taskID,r)}))}},Oe=function(e){return function(t,r){var n=t.map((function(e){return{objectID:e}}));return me(e)(n,Xe.DeleteObject,r)}},Ie=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,s=y(n(a,["forwardToReplicas"]));return o&&(s.queryParameters.forwardToReplicas=1),l(e.transporter.write({method:P,path:h("1/indexes/%s/rules/%s",e.indexName,t)},s),(function(t,r){return Ve(e)(t.taskID,r)}))}},je=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,s=y(n(a,["forwardToReplicas"]));return o&&(s.queryParameters.forwardToReplicas=1),l(e.transporter.write({method:P,path:h("1/indexes/%s/synonyms/%s",e.indexName,t)},s),(function(t,r){return Ve(e)(t.taskID,r)}))}},xe=function(e){return function(t){return Te(e)(t).then((function(){return!0})).catch((function(e){if(404!==e.status)throw e;return!1}))}},De=function(e){return function(t,o){var s=o||{},u=s.query,i=s.paginate,c=n(s,["query","paginate"]),f=0;return function n(){return We(e)(u||"",r(r({},c),{},{page:f})).then((function(e){for(var r=0,o=Object.entries(e.hits);r<o.length;r++){var s=a(o[r],2),u=s[0],c=s[1];if(t(c))return{object:c,position:parseInt(u,10),page:f}}if(f++,!1===i||f>=e.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return n()}))}()}},qe=function(e){return function(t,r){return e.transporter.read({method:w,path:h("1/indexes/%s/%s",e.indexName,t)},r)}},ke=function(){return function(e,t){for(var r=0,n=Object.entries(e.hits);r<n.length;r++){var o=a(n[r],2),s=o[0];if(o[1].objectID===t)return parseInt(s,10)}return-1}},Se=function(e){return function(t,a){var o=a||{},s=o.attributesToRetrieve,u=n(o,["attributesToRetrieve"]),i=t.map((function(t){return r({indexName:e.indexName,objectID:t},s?{attributesToRetrieve:s}:{})}));return e.transporter.read({method:O,path:"1/indexes/*/objects",data:{requests:i}},u)}},Ne=function(e){return function(t,r){return e.transporter.read({method:w,path:h("1/indexes/%s/rules/%s",e.indexName,t)},r)}},Te=function(e){return function(t){return e.transporter.read({method:w,path:h("1/indexes/%s/settings",e.indexName),data:{getVersion:2}},t)}},Ee=function(e){return function(t,r){return e.transporter.read({method:w,path:h("1/indexes/%s/synonyms/%s",e.indexName,t)},r)}},Re=function(e){return function(t,r){return l(Ae(e)([t],r).then((function(e){return{objectID:e.objectIDs[0],taskID:e.taskIDs[0]}})),(function(t,r){return Ve(e)(t.taskID,r)}))}},Ae=function(e){return function(t,r){var a=r||{},o=a.createIfNotExists,s=n(a,["createIfNotExists"]),u=o?Xe.PartialUpdateObject:Xe.PartialUpdateObjectNoCreate;return me(e)(t,u,s)}},Ce=function(e){return function(t,s){var u=s||{},i=u.safe,c=u.autoGenerateObjectIDIfNotExist,f=u.batchSize,d=n(u,["safe","autoGenerateObjectIDIfNotExist","batchSize"]),p=function(t,r,n,a){return l(e.transporter.write({method:O,path:h("1/indexes/%s/operation",t),data:{operation:n,destination:r}},a),(function(t,r){return Ve(e)(t.taskID,r)}))},m=Math.random().toString(36).substring(7),y="".concat(e.indexName,"_tmp_").concat(m),g=ze({appId:e.appId,transporter:e.transporter,indexName:y}),v=[],b=p(e.indexName,y,"copy",r(r({},d),{},{scope:["settings","synonyms","rules"]}));return v.push(b),l((i?b.wait(d):b).then((function(){var e=g(t,r(r({},d),{},{autoGenerateObjectIDIfNotExist:c,batchSize:f}));return v.push(e),i?e.wait(d):e})).then((function(){var t=p(y,e.indexName,"move",d);return v.push(t),i?t.wait(d):t})).then((function(){return Promise.all(v)})).then((function(e){var t=a(e,3),r=t[0],n=t[1],s=t[2];return{objectIDs:n.objectIDs,taskIDs:[r.taskID].concat(o(n.taskIDs),[s.taskID])}})),(function(e,t){return Promise.all(v.map((function(e){return e.wait(t)})))}))}},Ue=function(e){return function(t,n){return Ke(e)(t,r(r({},n),{},{clearExistingRules:!0}))}},Je=function(e){return function(t,n){return Fe(e)(t,r(r({},n),{},{replaceExistingSynonyms:!0}))}},He=function(e){return function(t,r){return l(ze(e)([t],r).then((function(e){return{objectID:e.objectIDs[0],taskID:e.taskIDs[0]}})),(function(t,r){return Ve(e)(t.taskID,r)}))}},ze=function(e){return function(t,r){var a=r||{},o=a.autoGenerateObjectIDIfNotExist,s=n(a,["autoGenerateObjectIDIfNotExist"]),u=o?Xe.AddObject:Xe.UpdateObject;if(u===Xe.UpdateObject){var i=!0,c=!1,f=void 0;try{for(var d,p=t[Symbol.iterator]();!(i=(d=p.next()).done);i=!0)if(void 0===d.value.objectID)return l(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}))}catch(e){c=!0,f=e}finally{try{i||null==p.return||p.return()}finally{if(c)throw f}}}return me(e)(t,u,s)}},Me=function(e){return function(t,r){return Ke(e)([t],r)}},Ke=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,s=a.clearExistingRules,u=y(n(a,["forwardToReplicas","clearExistingRules"]));return o&&(u.queryParameters.forwardToReplicas=1),s&&(u.queryParameters.clearExistingRules=1),l(e.transporter.write({method:O,path:h("1/indexes/%s/rules/batch",e.indexName),data:t},u),(function(t,r){return Ve(e)(t.taskID,r)}))}},Le=function(e){return function(t,r){return Fe(e)([t],r)}},Fe=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,s=a.replaceExistingSynonyms,u=y(n(a,["forwardToReplicas","replaceExistingSynonyms"]));return o&&(u.queryParameters.forwardToReplicas=1),s&&(u.queryParameters.replaceExistingSynonyms=1),l(e.transporter.write({method:O,path:h("1/indexes/%s/synonyms/batch",e.indexName),data:t},u),(function(t,r){return Ve(e)(t.taskID,r)}))}},We=function(e){return function(t,r){return e.transporter.read({method:O,path:h("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},_e=function(e){return function(t,r,n){return e.transporter.read({method:O,path:h("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},Be=function(e){return function(t,r){return e.transporter.read({method:O,path:h("1/indexes/%s/rules/search",e.indexName),data:{query:t}},r)}},Qe=function(e){return function(t,r){return e.transporter.read({method:O,path:h("1/indexes/%s/synonyms/search",e.indexName),data:{query:t}},r)}},Ge=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,s=y(n(a,["forwardToReplicas"]));return o&&(s.queryParameters.forwardToReplicas=1),l(e.transporter.write({method:"PUT",path:h("1/indexes/%s/settings",e.indexName),data:t},s),(function(t,r){return Ve(e)(t.taskID,r)}))}},Ve=function(e){return function(t,r){return f((function(n){return function(e){return function(t,r){return e.transporter.read({method:w,path:h("1/indexes/%s/task/%s",e.indexName,t.toString())},r)}}(e)(t,r).then((function(e){return"published"!==e.status?n():void 0}))}))}},Xe={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject",DeleteIndex:"delete",ClearIndex:"clear"},Ye={Settings:"settings",Synonyms:"synonyms",Rules:"rules"};function Ze(e,t,n){var a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,a=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},o=a(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(o),n=a(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(o),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(o),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:{debug:function(e,t){return Promise.resolve()},info:function(e,t){return Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}},responsesCache:i(),requestsCache:i({serializable:!1}),hostsCache:u({caches:[s({key:"".concat("4.6.0","-").concat(e)}),i()]}),userAgent:x("4.6.0").add({segment:"Browser"})};return function(e){var t=e.appId,n=c(void 0!==e.authMode?e.authMode:m.WithinHeaders,t,e.apiKey),a=j(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:g.Read},{url:"".concat(t,".algolia.net"),accept:g.Write}].concat(d([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return p({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)}(r(r(r({},a),n),{},{methods:{search:oe,searchForFacetValues:se,multipleBatch:ne,multipleGetObjects:ae,multipleQueries:oe,copyIndex:K,copySettings:F,copySynonyms:W,copyRules:L,moveIndex:re,listIndices:ee,getLogs:Q,listClusters:$,multipleSearchForFacetValues:se,getApiKey:B,addApiKey:H,listApiKeys:Z,updateApiKey:fe,deleteApiKey:_,restoreApiKey:ie,assignUserID:z,assignUserIDs:M,getUserID:V,searchUserIDs:ce,listUserIDs:te,getTopUserIDs:G,removeUserID:ue,hasPendingMappings:X,initIndex:function(e){return function(t){return Y(e)(t,{methods:{batch:le,delete:Pe,getObject:qe,getObjects:Se,saveObject:He,saveObjects:ze,search:We,searchForFacetValues:_e,waitTask:Ve,setSettings:Ge,getSettings:Te,partialUpdateObject:Re,partialUpdateObjects:Ae,deleteObject:we,deleteObjects:Oe,deleteBy:be,clearObjects:ye,browseObjects:de,getObjectPosition:ke,findObject:De,exists:xe,saveSynonym:Le,saveSynonyms:Fe,getSynonym:Ee,searchSynonyms:Qe,browseSynonyms:he,deleteSynonym:je,clearSynonyms:ve,replaceAllObjects:Ce,replaceAllSynonyms:Je,searchRules:Be,getRule:Ne,deleteRule:Ie,saveRule:Me,saveRules:Ke,replaceAllRules:Ue,browseRules:pe,clearRules:ge}})}},initAnalytics:function(){return function(e){return function(e){var t=e.region||"us",n=c(m.WithinHeaders,e.appId,e.apiKey),a=j(r(r({hosts:[{url:"analytics.".concat(t,".algolia.com")}]},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return p({appId:e.appId,transporter:a},e.methods)}(r(r(r({},a),e),{},{methods:{addABTest:N,getABTest:E,getABTests:R,stopABTest:A,deleteABTest:T}}))}},initRecommendation:function(){return function(e){return function(e){var t=e.region||"us",n=c(m.WithinHeaders,e.appId,e.apiKey),a=j(r(r({hosts:[{url:"recommendation.".concat(t,".algolia.com")}]},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return p({appId:e.appId,transporter:a},e.methods)}(r(r(r({},a),e),{},{methods:{getPersonalizationStrategy:C,setPersonalizationStrategy:U}}))}}}}))}return Ze.version="4.6.0",Ze}()},sweJ:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("a7gn"),s=r("qhky");t.default=function(e){var t=e.children,r=e.isHome,n=e.pageContext;return a.a.createElement(o.a,{isPage:!0,isHome:r},a.a.createElement(s.a,null,a.a.createElement("title",null,function(e,t){return e?"Home":t.page.node.title}(r,n)," | Jvar")),t,!t&&a.a.createElement("section",{className:"post__body",dangerouslySetInnerHTML:{__html:n.page.node.body.childMarkdownRemark.html}}))}},xKDr:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),s=function(e){var t=e.post,r=e.isArchive,n=void 0!==r&&r;return t=t.node||t,a.a.createElement("li",{className:"list-row"+(n?" archive":"")},a.a.createElement(o.Link,{title:[t.title],to:t.fields.path},a.a.createElement("aside",{className:"dates"},t.date),t.title,!n&&t.teaser&&a.a.createElement("h2",null,t.teaser.childMarkdownRemark.html.replace(/(<([^>]+)>)/gi,""))))};t.a=function(e){var t=e.posts,r=e.isArchive,n=void 0!==r&&r;return a.a.createElement("div",{className:"post-list"+(n?"--archive":"")},n&&a.a.createElement("h3",{className:"post-list__title"},"More like this"),a.a.createElement("ul",null,t&&t.map((function(e,t){return a.a.createElement(s,{post:e,isArchive:n,key:t})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6ec9c700a16143339ae5.js.map