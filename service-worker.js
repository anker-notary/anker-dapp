"use strict";var precacheConfig=[["/anker-dapp/index.html","de94a25b961f9fa684b17d067e1a65cc"],["/anker-dapp/static/css/main.dd3000f0.css","4167de81d99275eeb4500c2869b21c9d"],["/anker-dapp/static/js/main.4f764338.js","732c2e7d34fa5aa51a03a32d56bbceb4"],["/anker-dapp/static/media/Montserrat-Bold.88932dad.ttf","88932dadc42e1bba93b21a76de60ef7a"],["/anker-dapp/static/media/Montserrat-Regular.9c460951.ttf","9c46095118380d38f12e67c916b427f9"],["/anker-dapp/static/media/Montserrat-SemiBold.c88cecbf.ttf","c88cecbffad6d8e731fd95de49561ebd"],["/anker-dapp/static/media/anchor.1e935358.svg","1e93535856dfe67f7a43c0f65cad16c1"],["/anker-dapp/static/media/anker-logo.ff9047de.svg","ff9047deeb930a75798810e886916818"],["/anker-dapp/static/media/close.506c8461.svg","506c846118ee3fcaf87900ba0b90f00f"],["/anker-dapp/static/media/decentralized.abe58857.svg","abe588579ffef48a28eb636565d38a33"],["/anker-dapp/static/media/file.5ba0b5d5.svg","5ba0b5d5a9025ff0be357d13563617a3"],["/anker-dapp/static/media/fingerprint-icon.64ac96d0.svg","64ac96d0e90ef9df34085dc7bfbd4701"],["/anker-dapp/static/media/fingerprint.a1744acd.svg","a1744acd5da5ddbd4d060a360d108e21"],["/anker-dapp/static/media/header.098c62c7.png","098c62c7189857b2b815ee167eb9d483"],["/anker-dapp/static/media/ship.683c5315.svg","683c53155c11b55eb467a9c4d77a45b0"],["/anker-dapp/static/media/verify.416245ff.svg","416245ff033b1377d72f10b8bd741a2c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/anker-dapp/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});