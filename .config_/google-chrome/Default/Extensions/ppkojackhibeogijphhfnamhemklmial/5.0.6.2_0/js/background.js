!function(){var t,e={7757:function(t,e,r){t.exports=r(5666)},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function m(){}function v(){}function g(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==r&&n.call(E,i)&&(b=E);var x=g.prototype=m.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return v.prototype=g,c(x,"constructor",g),c(g,"constructor",v),v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(P.prototype),c(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),c(x,u,"Generator"),c(x,i,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},(t="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"5.0.6.2"},t.SENTRY_RELEASES=t.SENTRY_RELEASES||{},t.SENTRY_RELEASES["video-screenshot@video-screenshot"]={id:"5.0.6.2"},function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}var o=function(){function e(){t(this,e),this.init()}return r(e,[{key:"init",value:function(){chrome.runtime.onInstalled.addListener((function(t){chrome.runtime.getManifest().version,t.previousVersion;"install"===t.reason?chrome.tabs.create({url:"firstrun.html",active:!0},(function(t){})):t.reason}))}}]),e}();function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(){function e(){t(this,e),this.init()}return r(e,[{key:"init",value:function(){chrome.commands.onCommand.addListener((function(t){"screenshot-keyboard-shortcut"===t&&chrome.tabs.query({currentWindow:!0,active:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{action:"take-screenshot"})}))})),chrome.runtime.onMessage.addListener((function(t,e,r){if("GetShortcut"===t.type)return chrome.commands.getAll((function(t){var e,n=i(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;"screenshot-keyboard-shortcut"===o.name&&(chrome.storage.sync.set({shortcut:o.shortcut}),chrome.storage.sync.get(null,(function(t){var e="Not Set";""!==t.shortcut&&(e=t.shortcut),r(e)})))}}catch(t){n.e(t)}finally{n.f()}})),!1}))}}]),e}();function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}var f,l=n(7757),h=n.n(l),p=new Uint8Array(16);function d(){if(!f&&!(f="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(p)}var y=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(t){return"string"==typeof t&&y.test(t)},v=[],g=0;g<256;++g)v.push((g+256).toString(16).substr(1));var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(v[t[e+0]]+v[t[e+1]]+v[t[e+2]]+v[t[e+3]]+"-"+v[t[e+4]]+v[t[e+5]]+"-"+v[t[e+6]]+v[t[e+7]]+"-"+v[t[e+8]]+v[t[e+9]]+"-"+v[t[e+10]]+v[t[e+11]]+v[t[e+12]]+v[t[e+13]]+v[t[e+14]]+v[t[e+15]]).toLowerCase();if(!m(r))throw TypeError("Stringified UUID is invalid");return r};var w=function(t,e,r){var n=(t=t||{}).random||(t.rng||d)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return b(n)},E=function(){function e(){t(this,e),this.init()}return r(e,[{key:"init",value:function(){var t=[{name:"youtube",url:["youtube.com"],subs:!0,enabled:!0},{name:"netflix",url:["netflix.com"],subs:!0,enabled:!0},{name:"vimeo",url:["vimeo.com"],subs:!1,enabled:!0},{name:"amazon",url:["amazon","primevideo"],subs:!1,enabled:!0},{name:"hulu",url:["hulu.com"],subs:!1,enabled:!0},{name:"hbo",url:["hbomax.com"],subs:!1,enabled:!0},{name:"disney",url:["disneyplus.com"],subs:!1,enabled:!0},{name:"everythingelse",subs:!1,enabled:!0}];chrome.storage.sync.get(null,function(){var e=s(h().mark((function e(r){var n,o,i,a,u;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(u in""===(n={imageType:r.imageType||"image/jpeg",whitelist:r.whitelist||[],blacklist:r.blacklist||[],screenshotCount:r.screenshotCount||0,reviewed:!0===r.reviewed||!1,showReviewPrompt:!0===r.showReviewPrompt||!0,lastReviewPrompt:r.lastReviewPrompt||Date.now(),saveFolder:r.saveFolder||"",subsEnabled:!0===r.subsEnabled||!1,id:r.id||w(),autoCrop:!0===r.autoCrop||!1}).whitelist&&(n.whitelist=[]),""===n.blacklist&&(n.blacklist=[]),o=null==r?void 0:r.websites,i=[],a=function(e){var r=t[e],n=null==o?void 0:o.find((function(t){return t.name===r.name}));n&&(r.enabled=!0===n.enabled),i.push(r)},t)a(u);return n.websites=i,e.next=13,new Promise((function(t){chrome.storage.sync.clear((function(){t("done")}))}));case 13:return e.next=15,new Promise((function(t){chrome.storage.sync.set(n,(function(e){t("done")}))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),e}();function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=function(){function e(){t(this,e),this.init()}return r(e,[{key:"init",value:function(){chrome.runtime.onMessage.addListener((function(t,e,r){switch(t.type){case"ScreenshotDownload":return new Promise((function(t){chrome.storage.sync.get(["saveDirectory","lastReviewPrompt","showReviewPrompt","screenshotCount"],(function(e){t(e)}))})).then((function(e){t.useBackground&&chrome.downloads.download({url:t.url,filename:t.filename,saveAs:!0},(function(t){}));var r=Number(e.screenshotCount)+1;chrome.storage.sync.set({screenshotCount:r})})),!1;case"CopyToClipboardToBackground":return chrome.tabs.query({currentWindow:!0,active:!0},(function(e){chrome.tabs.sendMessage(e[0].id,P(P({},t),{},{type:"CopyToClipboardFromBackground",tabInfo:e[0]})),chrome.runtime.sendMessage(P(P({},t),{},{type:"CopyToClipboardFromBackground",tabInfo:e[0]}))})),!1;case"TabCaptureScreenshot":return chrome.tabs.captureVisibleTab((function(t){r({imgSrc:t})})),!0;default:return!1}}))}}]),e}(),j=function(){function e(){t(this,e),this.init()}return r(e,[{key:"init",value:function(){chrome.runtime.onMessage.addListener(function(){var t=s(h().mark((function t(e,r,n){var o,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("GAEvent"!==e.type){t.next=15;break}return t.next=3,new Promise((function(t){chrome.storage.sync.get(["id","screenshotCount"],function(){var e=s(h().mark((function e(r){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(r.id);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 3:return o=t.sent,(i=new URL("https://www.google-analytics.com/collect")).searchParams.append("v",1),i.searchParams.append("t","event"),i.searchParams.append("tid","UA-111508414-1"),i.searchParams.append("cid",o),i.searchParams.append("ec",e.event),i.searchParams.append("ea",e.action),i.searchParams.append("el",new URL(r.url).hostname),fetch(i,{method:"POST"}).then((function(t){})),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}())}}]),e}();new E,new o,new u,new O,new j}()}();
//# sourceMappingURL=chrome-extension://ppkojackhibeogijphhfnamhemklmial/js/background.js.map