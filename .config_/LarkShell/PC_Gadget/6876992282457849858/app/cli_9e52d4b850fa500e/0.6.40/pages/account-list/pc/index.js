define("pages/account-list/pc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 (tt["webpackJsonp"]=tt["webpackJsonp"]||[]).push([[11],{605:function(e,n,t){e.exports={"list-wraper":"index__list-wraper___2xWUJ",title:"index__title___3YlKs",pager:"index__pager___UoYrV",more:"index__more___2BotG",loading:"index__loading___fdbyw",icon:"index__icon___25zJE",rotate:"index__rotate___2jZTr",spin:"index__spin___o_gtx","list-wraper-new":"index__list-wraper-new___2oUnl"}},606:function(e,n,t){e.exports={"list-item":"index__list-item___1zMnL","list-item-inner":"index__list-item-inner___2cVmZ",img:"index__img___dsyUu",name:"index__name___1FI_C",content:"index__content___LU4pC",desc:"index__desc___3Zr9M","btn-wraper":"index__btn-wraper___LWDQ8",show:"index__show___3-jIV","btn-inner":"index__btn-inner___tho54","icon-button-plus":"index__icon-button-plus___2Hv2c","show-button":"index__show-button___Jp-4W","list-item-new":"index__list-item-new___3Zmx2"}},607:function(e,n,t){e.exports={"empty-wrapper":"index__empty-wrapper___2DVRW","list-container":"index__list-container___3FndV"}},669:function(e,n,t){"use strict";t.r(n);var o,i=t(23),c=t(6),l=t(17),a=t(4),_=t(7),r=t.n(_),s=t(12),d=t(48),u=t(65),f=t(57),w=t(5),b=t(9),j=t(8),p=t(14),x=t(1),m=t(19),O=t(130),g=t(3),h=t(2),L=t(18),v=(o={},Object(a["a"])(o,w["j"].Forced,Object(g["e"])("Account_ForcefollowTooltip")),Object(a["a"])(o,w["j"].Recommend,Object(g["e"])("Account_RecommandedfollowTooltip")),o),y=t(11),k=t.n(y),T=t(13),C=t.n(T),M=(t(605),t(0)),N={"./index.less":{"list-wraper":"index__list-wraper___2xWUJ",title:"index__title___3YlKs",pager:"index__pager___UoYrV",more:"index__more___2BotG",loading:"index__loading___fdbyw",icon:"index__icon___25zJE",rotate:"index__rotate___2jZTr",spin:"index__spin___o_gtx","list-wraper-new":"index__list-wraper-new___2oUnl"}};var F=function(e){var n=e.title,t=e.children,o=e.hasMore,i=e.loading,c=e.loadMore,l=e.newHome,a=void 0!==l&&l;return Object(M["jsxs"])(x["n"],{className:k()(C()("list-wraper",{"list-wraper-new":a}),N),children:[Object(M["jsx"])(x["n"],{className:"index__title___3YlKs",children:n}),Object(M["jsx"])(x["n"],{children:t}),o&&Object(M["jsx"])(x["n"],{className:"index__pager___UoYrV",children:i?Object(M["jsxs"])(x["n"],{className:"index__loading___fdbyw",children:[Object(M["jsx"])(x["n"],{className:"iconfont icon-loading index__icon___25zJE"}),Object(g["e"])("Common_Loading")]}):Object(M["jsxs"])(x["n"],{onClick:c,className:"index__more___2BotG",children:[Object(g["e"])("AccountList_More"),Object(M["jsx"])(x["n"],{className:"iconfont icon-down "+k()(C()("icon",{rotate:!o}),N)})]})})]})},U=F,A=t(10),H=t(21),V=t(25),z=t(15),D=t(103),E=t(49),W=1e3,Z=function(){var e=Object(V["d"])({followedList:[],unfollowedList:[],followedHasMore:!1,unfollowedHasMore:!1,followedLoading:!1,unfollowedLoading:!1,loading:!1,error:!1,empty:!1}),n=Object(A["a"])(e,2),t=n[0],o=n[1],i=Object(h["useMemo"])((function(){return{trace:z["b"].getTrace(z["a"]),isFirst:!0,followedToken:"",unfollowedToken:""}}),[]),c=function(e){o({error:!1}),e&&o({loading:!0}),Object(z["c"])("accountListStart",{},i.trace),Promise.all([m["a"].getUserAccountsV2({following:!0,size:W,token:""}),m["a"].getUserAccountsV2({following:!1,size:W,token:""})]).then((function(n){var t=Object(A["a"])(n,2),c=t[0].data,l=c.accounts,a=c.hasMore,_=c.token,r=t[1].data,s=r.accounts,d=r.hasMore,u=r.token;o({followedList:l,unfollowedList:s,followedHasMore:a,unfollowedHasMore:d,loading:!1,error:!1,empty:e&&!l.length&&!s.length}),i.followedToken=_,i.unfollowedToken=u,Object(z["c"])("accountListSuccess",{},i.trace)})).catch((function(){Object(z["c"])("accountListFail",{},i.trace),o({loading:!1,error:!0})}))},a=function(e){e?(o({followedLoading:!0}),m["a"].getUserAccountsV2({following:!0,size:W,token:i.followedToken}).then((function(e){var n=e.data,c=n.accounts,a=n.hasMore,_=n.token;i.followedToken=_,o({followedList:Object(E["d"])([].concat(Object(l["a"])(t.followedList),Object(l["a"])(c)),"id"),followedHasMore:a,followedLoading:!1})})).catch((function(){o({followedLoading:!1})}))):(o({unfollowedLoading:!0}),m["a"].getUserAccountsV2({following:!1,size:W,token:i.unfollowedToken}).then((function(e){var n=e.data,c=n.accounts,a=n.hasMore,_=n.token;i.unfollowedToken=_,o({unfollowedList:Object(E["d"])([].concat(Object(l["a"])(t.unfollowedList),Object(l["a"])(c)),"id"),unfollowedHasMore:a,unfollowedLoading:!1})})).catch((function(){o({unfollowedLoading:!1})})))};return Object(h["useEffect"])((function(){c(!0)}),[]),Object(H["useDidShow"])((function(){if(Object(j["Q"])("subscription_mp_account_list_view"),i.isFirst)i.isFirst=!1;else{var e=D["a"].getFollowRecord();if(!Object.keys(e).length)return;var n=Object(l["a"])(t.followedList),c=Object(l["a"])(t.unfollowedList),a=function(t){var o=e[t];o.followType===w["j"].Normal?n.find((function(e){return e.id===o.id}))||(n.push(o),c=c.filter((function(e){return e.id!==o.id}))):o.followType===w["j"].None&&(c.find((function(e){return e.id===o.id}))||(c.push(o),n=n.filter((function(e){return e.id!==o.id}))))};for(var _ in e)a(_);D["a"].clearFollowRecord(),o({followedList:n,unfollowedList:c})}})),{followedList:t.followedList,unfollowedList:t.unfollowedList,loading:t.loading,error:t.error,state:t,refresh:c,loadMore:a,setState:o}},J=Z,Q=t(214),R=t(215),S=(t(606),{"./index.less":{"list-item":"index__list-item___1zMnL","list-item-inner":"index__list-item-inner___2cVmZ",img:"index__img___dsyUu",name:"index__name___1FI_C",content:"index__content___LU4pC",desc:"index__desc___3Zr9M","btn-wraper":"index__btn-wraper___LWDQ8",show:"index__show___3-jIV","btn-inner":"index__btn-inner___tho54","icon-button-plus":"index__icon-button-plus___2Hv2c","show-button":"index__show-button___Jp-4W","list-item-new":"index__list-item-new___3Zmx2"}});var B=function(e){var n=e.avatar,t=e.name,o=e.desc,i=e.onClick,c=e.btnConfig,l=e.isLast,a=e.tag,_=e.newHome,r=c?Object(M["jsx"])(Q["a"],{type:c.type,onClick:c.onClick,disabled:c.disabled,icon:c.icon,size:"small",style:{minWidth:"72px"},children:Object(M["jsx"])(x["n"],{className:"index__btn-inner___tho54",children:c.txt})}):Object(M["jsx"])(x["n"],{});return Object(M["jsx"])(x["n"],{onClick:i,className:k()(C()("list-item",{"show-button":!0,"no-border":l,"list-item-new":_}),S),children:Object(M["jsxs"])(x["n"],{className:"index__list-item-inner___2cVmZ",children:[Object(M["jsx"])(x["d"],{src:n,className:"index__img___dsyUu"}),Object(M["jsxs"])(x["n"],{className:"index__content___LU4pC",children:[Object(M["jsxs"])(x["n"],{className:"index__name___1FI_C",children:[t,a]}),Object(M["jsx"])(x["n"],{className:"index__desc___3Zr9M",children:o})]}),!!c&&Object(M["jsx"])(x["n"],{className:"index__btn-wraper___LWDQ8",onClick:function(e){return e.stopPropagation()},children:c.tooltip?Object(M["jsx"])(R["a"],{text:c.tooltip,placement:"left",children:r}):r})]})})};B.options={addGlobalClass:!0};var I=B;t(607);var P=function(){var e=J(),n=e.followedList,t=e.unfollowedList,o=e.state,i=e.loading,_=e.error,y=e.refresh,k=e.loadMore,T=e.setState,C=Object(p["f"])(),N=C.data,F=N.isFeedMode,A=N.isAppCenter,H=Object(p["b"])(),V=H.data.newHome,z=function(e){Object(j["Q"])(j["e"],{id:e}),b["a"].navigateTo({url:"/pages/account-detail/pc/index?id="+e})},D=function(){var e=Object(s["a"])(r.a.mark((function e(i,_){var d,u,f,p,x,h,L;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d=new Promise(function(){var e=Object(s["a"])(r.a.mark((function e(n,t){var o,i;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(_!==w["j"].None){e.next=4;break}n(0),e.next=10;break;case 4:return Object(j["Q"])("subscription_account_unfollow_view",{is_allow_unfollow:_===w["j"].Recommend?1:0,locate_page:"account_list"}),e.next=7,O["a"].Confirm({title:Object(g["e"])("AccountList_UnfollowedConfirmTitle"),icon:"warning",okTxt:Object(g["e"])("AccountList_UnfollowedConfirmOkBtn"),cancelTxt:Object(g["e"])("AccountList_UnfollowedConfirmCancelBtn")});case 7:o=e.sent,i=o.success,i?n(0):t();case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),e.next=3,d;case 3:return u=_===w["j"].None?w["j"].Normal:w["j"].None,e.next=6,m["a"].changeFollowRelationV2({accountId:i,followType:u});case 6:f=e.sent,p=f.data.followType,u===w["j"].Normal?(Object(j["Q"])("subscription_follow_click",(x={click:"follow"},Object(a["a"])(x,"follow_from","account_list"),Object(a["a"])(x,"subscription_account_id",i),Object(a["a"])(x,"is_new_home",String(V)),x)),Object(j["Q"])(j["d"],{id:i,from:A?1:F?2:0})):Object(j["Q"])("subscription_account_unfollow_click",{is_allow_unfollow:_===w["j"].Recommend?1:0,locate_page:"account_list",subscription_account_id:i,click:"unfollow",target:"none"}),b["a"].showToast({title:Object(g["e"])("AccountList_SuccessfulOperation")}),u===w["j"].Normal?(h=t.find((function(e){return e.id===i})),T({followedList:[].concat(Object(l["a"])(o.followedList),[Object(c["a"])(Object(c["a"])({},h),{},{followType:p})]),unfollowedList:o.unfollowedList.filter((function(e){return e.id!==i}))})):(L=n.find((function(e){return e.id===i})),T({unfollowedList:[].concat(Object(l["a"])(o.unfollowedList),[Object(c["a"])(Object(c["a"])({},L),{},{followType:p})]),followedList:o.followedList.filter((function(e){return e.id!==i}))}));case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(M["jsx"])(d["b"],{title:Object(g["e"])("AccountList_PageTitle"),showLoading:i,showError:_,retry:function(){return y(!0)},search:{from:"accountList"},showTab:!V,noticeConfig:{enable:!0},children:o.empty?Object(M["jsx"])(x["n"],{className:"index__empty-wrapper___2DVRW",children:Object(M["jsx"])(f["a"],{img:Object(L["b"])("noAccount"),txt:Object(g["e"])("AccountList_Empty")})}):Object(M["jsxs"])(h["Fragment"],{children:[(n.length>0||o.followedHasMore)&&Object(M["jsx"])(U,{hasMore:o.followedHasMore,loading:o.followedLoading,loadMore:function(){return k(!0)},title:Object(g["e"])("AccountList_Followed"),newHome:V,children:n.map((function(e){return Object(M["jsx"])(I,{avatar:e.avatar,newHome:V,desc:Object(g["b"])(e.desc),name:Object(g["b"])(e.name),onClick:function(){return z(e.id)},tag:e.ownership.type===w["o"].Department?Object(M["jsx"])(u["b"].Dept,{}):e.ownership.type===w["o"].Enterprise?Object(M["jsx"])(u["b"].Enterprise,{}):Object(M["jsx"])(h["Fragment"],{}),btnConfig:{disabled:e.followType===w["j"].Forced,tooltip:v[e.followType]||"",onClick:function(){return D(e.id,e.followType)},type:"secondary",txt:e.followType===w["j"].Forced?Object(g["e"])("AccountList_ForceFollowed"):Object(g["e"])("AccountList_UnfollowedBtn")}},e.id+"follow")}))}),(t.length>0||o.unfollowedHasMore)&&Object(M["jsx"])(U,{title:Object(g["e"])("AccountList_Unfollowed"),hasMore:o.unfollowedHasMore,loading:o.unfollowedLoading,loadMore:function(){return k(!1)},newHome:V,children:t.map((function(e){return Object(M["jsx"])(I,{avatar:e.avatar,desc:Object(g["b"])(e.desc),name:Object(g["b"])(e.name),newHome:V,tag:e.ownership.type===w["o"].Department?Object(M["jsx"])(u["b"].Dept,{}):e.ownership.type===w["o"].Enterprise?Object(M["jsx"])(u["b"].Enterprise,{}):Object(M["jsx"])(h["Fragment"],{}),onClick:function(){return z(e.id)},btnConfig:{onClick:function(){return D(e.id,e.followType)},type:"secondary-primary",txt:Object(g["e"])("AccountList_FollowedBtn"),forceShow:!0,icon:"add_outlined"}},e.id+"unfollow")}))})]})})},Y=P,G={usingComponents:{"native-button":"../../../@native-mobile-components/button/index","native-dialog":"../../../@native-pc-components/dialog/index","native-fab":"../../../@native-mobile-components/fab/index","native-icon":"../../../@native-pc-components/icon/index","native-modal":"../../../@native-pc-components/modal/index","native-tag":"../../../@native-pc-components/tag/index","native-view":"../../../@native-pc-components/view/index"}};Page(Object(i["createPageConfig"])(Y,"pages/account-list/pc/index",{root:{cn:[]}},G||{}))}},[[669,0,1,2,3]]]);
});