define("pages/approval-transit/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 (tt["webpackJsonp"]=tt["webpackJsonp"]||[]).push([[13],{676:function(e,a,t){"use strict";t.r(a);var n=t(23),c=t(2),o=t(21),r=t(14),p=t(9),s=t(1),u=t(0),i=function(){var e=Object(o["useRouter"])(),a=e.params,t=a.token,n=void 0===t?"":t,i=Object(r["f"])(),f=i.data.isPC;return Object(c["useEffect"])((function(){f?p["a"].reLaunch({url:"/pages/folder-approval/pc/index?token=".concat(n)}):p["a"].reLaunch({url:"/pages/folder-approval/mobile/index?token=".concat(n)})}),[]),Object(u["jsx"])(s["n"],{})},f=i,b={};Page(Object(n["createPageConfig"])(f,"pages/approval-transit/index",{root:{cn:[]}},b||{}))}},[[676,0,1,2,3]]]);
});