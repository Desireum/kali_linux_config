define("pages/official-demotion/pc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 (tt["webpackJsonp"]=tt["webpackJsonp"]||[]).push([[26],{661:function(e,n,t){e.exports={"notice-content":"index__notice-content___14yYv","detail-btn":"index__detail-btn___2rR1b"}},662:function(e,n,t){e.exports={"page-wrapper":"index__page-wrapper___3fpEK","list-wrapper":"index__list-wrapper___T-leB",list:"index__list___VYuq6",item:"index__item___3OQoM",avatar:"index__avatar___2IJe9",content:"index__content___1a-ex","top-line":"index__top-line___30zfl",title:"index__title___1N1zI",time:"index__time___11AWG","bottom-line":"index__bottom-line___N5vZt"}},670:function(e,n,t){"use strict";t.r(n);var i,a=t(23),c=t(1),o=t(48),_=t(90),s=t.n(_),r=t(3),l=t(9),d=t(82),x=t(97),p=t(14),m=t(2),b=t(102),j=(t(661),t(4)),h=(i={},Object(j["a"])(i,r["a"].zh,"https://www.feishu.cn/hc/zh-CN/articles/878442725367"),Object(j["a"])(i,r["a"].en,"https://www.feishu.cn/hc/en-US/articles/878442725367"),Object(j["a"])(i,r["a"].jp,"https://www.feishu.cn/hc/en-US/articles/878442725367"),i),f=t(0);var u=function(){return Object(f["jsx"])(b["a"],{type:"warning",closable:!1,children:Object(f["jsxs"])(c["n"],{className:"index__notice-content___14yYv",children:[Object(r["e"])("OfficialDemotion_TipTitle"),Object(f["jsx"])(c["n"],{className:"index__detail-btn___2rR1b",onClick:function(){l["a"].openSchema({schema:h[Object(r["d"])()]})},children:Object(r["e"])("OfficialDemotion_TipBtn")})]})})},O=t(10),v=t(25),g=t(19),w=20,N=function(){var e=Object(v["d"])({loading:!1,error:!1,inited:!1,feeds:[],hasMore:!1,scrollId:""}),n=Object(O["a"])(e,2),t=n[0],i=n[1],a=function(e){i({loading:!0,error:!1}),g["a"].getUserOfficialFeeds({scrollId:t.scrollId,size:w}).then((function(n){var t=n.data,a=t.feeds,c=t.hasMore,o=t.scrollId,_={feeds:a,hasMore:c,scrollId:o,loading:!1,error:!1};e&&(_.inited=!0),i(_)})).catch((function(){i({loading:!1,error:!0})}))},c=function(){t.hasMore&&a()};return Object(m["useEffect"])((function(){a(!0)}),[]),{state:t,initLoading:!t.inited&&t.loading,nextLoading:t.inited&&t.loading,retry:a,onScrollBottom:c}};t(662);var T=function(){var e=N(),n=e.state,t=e.initLoading,i=e.nextLoading,a=e.retry,_=e.onScrollBottom,m=Object(p["f"])(),b=m.data.isFeedMode;return Object(f["jsx"])(o["b"],{showLoading:t,showError:n.error,retry:a,limitWidth:!b,children:Object(f["jsxs"])(c["n"],{className:"index__page-wrapper___3fpEK",children:[Object(f["jsx"])(u,{}),Object(f["jsx"])(c["n"],{className:"index__list-wrapper___T-leB",children:Object(f["jsxs"])(c["i"],{className:"index__list___VYuq6",scrollY:!0,onScrollToLower:function(){return _()},lowerThreshold:500,scrollWithAnimation:!0,children:[n.feeds.map((function(e){return Object(f["jsxs"])(c["n"],{className:"index__item___3OQoM",onClick:function(){l["a"].navigateTo({url:"/pages/account-detail/pc/index?id=".concat(e.id)})},children:[Object(f["jsx"])(c["n"],{className:"index__avatar___2IJe9",children:Object(f["jsx"])(d["a"],{url:e.avatar})}),Object(f["jsxs"])(c["n"],{className:"index__content___1a-ex",children:[Object(f["jsxs"])(c["n"],{className:"index__top-line___30zfl",children:[Object(f["jsx"])(c["n"],{className:"index__title___1N1zI",children:Object(r["b"])(e.name)}),Object(f["jsx"])(c["n"],{className:"index__time___11AWG",children:s()(e.displayTime).format("HH:mm")})]}),Object(f["jsx"])(c["n"],{className:"index__bottom-line___N5vZt",children:Object(r["b"])(e.summary)})]})]},e.id)})),Object(f["jsx"])(x["a"],{style:{marginTop:"24px"},hasMore:n.hasMore,loading:i})]})})]})})},y=T,I={usingComponents:{"native-button":"../../../@native-mobile-components/button/index","native-dialog":"../../../@native-pc-components/dialog/index","native-fab":"../../../@native-mobile-components/fab/index","native-icon":"../../../@native-pc-components/icon/index","native-modal":"../../../@native-pc-components/modal/index","native-tag":"../../../@native-pc-components/tag/index","native-view":"../../../@native-pc-components/view/index"}};Page(Object(a["createPageConfig"])(y,"pages/official-demotion/pc/index",{root:{cn:[]}},I||{}))}},[[670,0,1,2,3]]]);
});