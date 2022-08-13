define("pages/folder-approval/pc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 (tt["webpackJsonp"]=tt["webpackJsonp"]||[]).push([[18],{660:function(e,t,n){e.exports={"folder-approval":"index__folder-approval___2nTV1","tab-bar":"index__tab-bar___28PsW","tab-bar-content":"index__tab-bar-content___28hf9","tab-item":"index__tab-item___2SCvg",title:"index__title___1ftmL",bottom:"index__bottom___hRY4m","scroll-container":"index__scroll-container___hIkH8","article-list-wrapper":"index__article-list-wrapper___2f6p5","article-list":"index__article-list___2H_EM",article:"index__article___3ibob",left:"index__left___2qb_p",center:"index__center___3Ah_-",right:"index__right___2Zc-F"}},672:function(e,t,n){"use strict";n.r(t);var a,i=n(23),_=n(11),c=n.n(_),r=n(2),l=n(1),o=n(13),s=n.n(o),d=n(48),b=n(72),x=n(7),p=n.n(x),f=n(12),u=n(10),v=n(4),m=n(21),h=n(25),j=n(14),g=n(3),O=n(9),k=n(19),w=n(5),L=(a={},Object(v["a"])(a,g["a"].zh,"\u7b80\u4f53\u4e2d\u6587"),Object(v["a"])(a,g["a"].en,"English"),Object(v["a"])(a,g["a"].jp,"\u65e5\u672c\u8a9e"),a),C=function(){var e=Object(m["useRouter"])(),t=e.params,n=t.token,a=void 0===n?"":n,i=Object(j["f"])(),_=i.data.isPC,c=Object(h["d"])({activeTabValue:g["a"].zh,articles:[],tabList:[],loading:!0,error:!1}),l=Object(u["a"])(c,2),o=l[0],s=l[1],d=function(e){var t,n=e.id,a=e.token;e.articleType!==w["d"].External?_?O["a"].navigateTo({url:"/pages/article-detail/pc/index?articleId=".concat(n,"&token=").concat(a,"&lang=").concat(o.activeTabValue,"&folderApproval")}):O["a"].navigateTo({url:"/pages/article-detail/mobile/index?articleId=".concat(n,"&token=").concat(a,"&lang=").concat(o.activeTabValue)}):O["a"].openSchema({schema:null===(t=e.externalContentDetail)||void 0===t?void 0:t.originalLink,external:!1})},b=function(e){return e.reduce((function(e,t){return""!==t.title.zhCn&&(e.zhCn=L.zhCn),""!==t.title.enUs&&(e.enUs=L.enUs),""!=t.title.jaJp&&(e.jaJp=L.jaJp),e}),{})},x=function(){var e=Object(f["a"])(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=13;break}return s({loading:!0}),e.prev=2,e.next=5,k["a"].getApprovalFolder({token:a});case 5:t=e.sent,n=t.data.folderDTO.articles,s({loading:!1,articles:n,tabList:Object(g["c"])(b(n)).map((function(e){return{txt:L[e],value:e}}))}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),s({loading:!1,error:!0});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r["useEffect"])((function(){x()}),[]),{title:Object(g["e"])("Business_ChooseArticle"),state:o,setState:s,onArticleClick:d,retry:x}},N=(n(660),n(0));var T={"./index.less":{"folder-approval":"index__folder-approval___2nTV1","tab-bar":"index__tab-bar___28PsW","tab-bar-content":"index__tab-bar-content___28hf9","tab-item":"index__tab-item___2SCvg",title:"index__title___1ftmL",bottom:"index__bottom___hRY4m","scroll-container":"index__scroll-container___hIkH8","article-list-wrapper":"index__article-list-wrapper___2f6p5","article-list":"index__article-list___2H_EM",article:"index__article___3ibob",left:"index__left___2qb_p",center:"index__center___3Ah_-",right:"index__right___2Zc-F"}};var y=function(){var e=C(),t=e.title,n=e.state,a=n.tabList,i=n.activeTabValue,_=n.articles,o=n.loading,x=n.error,p=e.setState,f=e.onArticleClick,u=e.retry,v=Object(r["useMemo"])((function(){var e=a.findIndex((function(e){return e.value===i}));return 0===e?{tabLeft:"20px",contentLeft:0}:1===e?{tabLeft:"96px",contentLeft:"-100vw"}:2===e?{tabLeft:"165px",contentLeft:"-200vw"}:{tabLeft:"20px",contentLeft:0}}),[i,a]),m=function(e){return Object(N["jsx"])(l["i"],{className:"index__article-list___2H_EM","scroll-y":!0,children:_.filter((function(t){return""!==t.title[e]})).map((function(t){var n=t.id,a=t.title,i=t.cover.articleCover,_=t.articleType;return Object(N["jsxs"])(l["n"],{className:"index__article___3ibob",onClick:function(){return f(t)},children:[Object(N["jsx"])(l["n"],{className:"index__left___2qb_p",children:Object(N["jsx"])(b["a"],{src:i,articleType:_})}),Object(N["jsx"])(l["n"],{className:"index__center___3Ah_-",children:Object(N["jsx"])(l["n"],{className:"index__title___1ftmL",children:a[e]})}),Object(N["jsx"])(l["n"],{className:"iconfont icon-arrow-right index__right___2Zc-F"})]},n)}))},e)};return Object(N["jsx"])(d["b"],{title:t,showBack:!1,showLoading:o,showError:x,showAdminEntry:!1,retry:u,children:Object(N["jsxs"])(l["n"],{className:"index__folder-approval___2nTV1",children:[a.length>1&&Object(N["jsx"])(l["n"],{className:"index__tab-bar___28PsW",children:Object(N["jsxs"])(l["n"],{className:"index__tab-bar-content___28hf9",children:[a.map((function(e){var t=e.value,n=e.txt;return Object(N["jsx"])(l["n"],{onClick:function(){p({activeTabValue:t})},className:c()(s()("tab-item",{}),T),children:Object(N["jsx"])(l["n"],{className:"index__title___1ftmL",children:n})},t)})),Object(N["jsx"])(l["n"],{className:"index__bottom___hRY4m",style:{left:v.tabLeft}})]})}),Object(N["jsx"])(l["n"],{className:"index__scroll-container___hIkH8",children:Object(N["jsx"])(l["n"],{className:"index__article-list-wrapper___2f6p5",style:{left:v.contentLeft},children:a.map((function(e){var t=e.value;return m(t)}))})})]})})},A=y,E={usingComponents:{"native-button":"../../../@native-mobile-components/button/index","native-dialog":"../../../@native-pc-components/dialog/index","native-fab":"../../../@native-mobile-components/fab/index","native-icon":"../../../@native-pc-components/icon/index","native-modal":"../../../@native-pc-components/modal/index","native-tag":"../../../@native-pc-components/tag/index","native-view":"../../../@native-pc-components/view/index"}};Page(Object(i["createPageConfig"])(A,"pages/folder-approval/pc/index",{root:{cn:[]}},E||{}))}},[[672,0,1,2,3]]]);
});