import{_ as m,e as L,o as n,c as l,d as s,t as r,r as S,b as k,w as I,f as w,g as T,u as O,h as V,a as x,i as H,F as v,j as A,n as F,k as E,l as U,v as M,m as z,p as j,q as G}from"./index.ccc4dacf.js";const K={props:{AG_ABBR:String,AG_FULL:String,AG_URL:String,AG_LOGO:String,SUB_AG_ABBR:String,SUB_AG_FULL:String,SUB_AG_URL:String},setup(d){const _=L(()=>"Link to "+d.AG_ABBR+" homepage"),a=L(()=>"Link to "+d.SUB_AG_ABBR+" homepage");return{agTitleValue:_,subAgTitleValue:a}}},W={class:"fds-tophat"},Y={class:"fds-tophat__bd"},X={class:"fds-tophat__primary"},q={class:"fds-tophat__agency"},J=["href","title"],Q=["src"],Z={class:"fds-tophat__agency-abbr",title:""},ss={class:"fds-tophat__agency-fullname"},es={class:"fds-tophat__secondary"},ts={class:"fds-tophat__subagency"},as=["href","title"];function os(d,_,a,t,u,f){return n(),l("div",W,[s("div",Y,[s("div",X,[s("span",q,[s("a",{href:a.AG_URL,class:"fds-tophat__link",title:t.agTitleValue},[s("img",{role:"presentation",class:"fds-tophat__agency-logo",src:a.AG_LOGO,alt:""},null,8,Q),s("abbr",Z,r(a.AG_ABBR),1),s("span",ss,r(a.AG_FULL),1)],8,J)])]),s("div",es,[s("span",ts,[s("a",{href:a.SUB_AG_URL,class:"fds-tophat__link",title:t.subAgTitleValue},r(a.SUB_AG_FULL),9,as)])])])])}const ns=m(K,[["render",os]]),ls={props:{APP_ABBR_NAME:String,APP_FULL_NAME:String,PROFILE_NAME:String,LOGOFF_URL:String},setup(d){return{appTitleValue:L(()=>d.APP_ABBR_NAME+" Prototype Kit")}}},_s={class:"fds-header-app"},ds={class:"fds-header-app__bd"},is={class:"fds-header-app__primary"},rs={class:"fds-header-app__app-name"},cs=["title"],us={class:"fds-header-app__app-full"},fs={class:"fds-header-app__secondary"},hs={class:"fds-header-app__profile"},bs=["href"],ps={class:"fds-header-app__profile-name"};function gs(d,_,a,t,u,f){const e=S("router-link");return n(),l("div",_s,[s("div",ds,[s("div",is,[k(e,{to:"/",class:"fds-header-app__home-link"},{default:I(()=>[s("span",rs,[s("abbr",{class:"fds-header-app__app-abbr",title:t.appTitleValue},r(a.APP_ABBR_NAME),9,cs),s("span",us,r(a.APP_FULL_NAME),1)])]),_:1})]),s("div",fs,[s("span",hs,[s("a",{href:a.LOGOFF_URL,class:"fds-header-app__profile-link"},[s("span",ps,r(a.PROFILE_NAME),1)],8,bs)])])])])}const vs=m(ls,[["render",gs]]);function As(){let d=w(!1),_=T({}),a=T({});const t=i=>{d=i},u=(i,p)=>{console.log("openMenu"),_=i,a=p;let g=i.getAttribute("aria-controls");i.setAttribute("aria-expanded","true"),document.getElementById(g).setAttribute("aria-hidden","false"),t(!0)},f=(i,p=!1)=>{let g=i.getAttribute("aria-controls");g&&(i.setAttribute("aria-expanded","false"),document.getElementById(g).setAttribute("aria-hidden","true"),t(!1))},e=i=>{i.addEventListener("focus",c)},o=i=>{i.removeEventListener("focus",c)},c=i=>{i.currentTarget},y=i=>{if(d&&_)try{let p=_.contains(i.target),g=a.contains(i.target);!p&&!g&&(C("closeAllMenus"),t(!1))}catch{}},N=i=>{d&&i.keyCode==27&&(C("closeAllMenus"),t(!1))},C=(i,p=null)=>{let g=document.getElementsByClassName("fds-nav-global__link--has-sub-menu");for(let P=0;P<g.length;P++){let h=g[P];h.cb=C,R(i,h)}},R=(i,p)=>{i=="addFocusListeners"?e(p):i=="removeFocusListeners"?o(p):i=="closeAllMenus"&&f(p,!0)};return{isMenuOpen:d,theItem:_,theMenu:a,openMenu:u,closeMenu:f,loopItems:C,listenForKeys:N,documentClickHandler:y}}function D(){const d=O();return{goto:(a,t="")=>{a.includes("http")?t=="_blank"?window.open(a,t):window.location.href=a:d.push(a)}}}const ms={props:{NAV_DATA:Object,EXTRA_CLASSES:String,USE_SEARCH:String,USE_SCOPED_SEARCH:String},setup(d,{emit:_}){const{openMenu:a,closeMenu:t,loopItems:u,listenForKeys:f,documentClickHandler:e}=As(),{goto:o}=D();let c="/nps/".substring(0,5-1);const y=w(c),N=w({}),C=L(()=>d.NAV_DATA),R=h=>{let b=h.main,B=h.side?h.side:[];return b.forEach($=>{$.uid&&($.uid=M())}),B.forEach($=>{$.uid&&($.uid=M())}),{main:b,side:B}};V(C,h=>{N.value=R(h)});function i(h){let b=document.getElementById(h),B=b.nextSibling,$=b.getAttribute("aria-expanded");u("closeAllMenus"),$=="true"?t(b,B):a(b,B)}const p=h=>{let b=document.getElementById("searchPhrase").value;console.log("p",b),_("emitSearch",{type:"default",phrase:b})},g=h=>{let b=document.getElementById("searchPhrase").value,B=document.getElementById("scopedCategory").selected;_("emitSearch",{type:"scoped",scope:B,phrase:b})},P=(h,b)=>{i(h),o(b)};return x(()=>{window.addEventListener("keydown",f),document.addEventListener("click",e),u("addFocusListeners")}),H(()=>{window.removeEventListener("keydown",f),document.removeEventListener("click",e),u("removeFocusListeners")}),{navData:N,navigateTo:P,goto:o,basePath:y,openMenu:a,closeMenu:t,loopItems:u,listenForKeys:f,toggleMenu:i,doSearch:p,doScopedSearch:g}}},Ss={class:"fds-nav-global"},ks={class:"fds-nav-global__bd"},ys={class:"fds-nav-global__list","aria-label":"Primary Navigation",id:"primary-navigation"},Bs=["data-control-id"],$s={key:0},Cs=["id","onClick","aria-controls"],Es=["id"],Ps=["id"],Ls=["aria-labelledby"],Ns=["id"],Us=["aria-labelledby"],Rs=["href","onClick"],ws={key:1},Ts=["id","onClick","aria-controls"],Fs=["id"],Ms=["id"],xs={class:"fds-nav-global__sub-menu-bd"},Gs=["aria-labelledby"],Ds=["href","onClick"],Is={key:2},Os=["id","onClick","aria-controls"],Vs=["id"],Hs=["id"],zs=["aria-labelledby"],js=["id"],Ks=["aria-labelledby"],Ws=["href","onClick"],Ys={key:3},Xs=["id","onClick","aria-controls"],qs=["id"],Js=["id"],Qs={class:"fds-nav-global__sub-menu-bd"},Zs=["aria-labelledby"],se=["href","onClick"],ee={key:4},te=["href","onClick"],ae={class:"fds-nav-global__text"},oe={key:0,class:"fds-nav-global__aside"},ne={class:"fds-level"},le=["href","onClick"],_e={class:"fds-level fds-level--inline fds-level--gutter-xs"},de=["d"],ie={key:1,class:"fds-nav-global__search"},re={class:"fds-search fds-search--small",role:"search"},ce={class:"fds-search__bd"},ue=s("div",{class:"fds-search__entry fds-search__entry--grow"},[s("label",{class:"fds-search__label fds-search__label--sr-only",for:"searchPhrase"},"Search [app-name]"),s("input",{placeholder:"Search",class:"fds-input fds-input--small fds-search__input",id:"searchPhrase",type:"search",name:"searchPhrase"})],-1),fe={class:"fds-search__submit"},he=s("span",{class:"fds-search__text"},"Search",-1),be=[he],pe={key:2,class:"fds-nav-global__search"},ge={class:"fds-search fds-search--small",role:"search"},ve={class:"fds-search__bd"},Ae=s("div",{class:"fds-search__entry fds-search__entry--grow"},[s("label",{class:"fds-search__label fds-search__label--sr-only",for:"scopedSearchPhrase"},"Search [app-name]"),s("input",{placeholder:"Search",class:"fds-input fds-input--small fds-search__input",id:"scopedSearchPhrase",type:"search",name:"scopedSearchPhrase"})],-1),me={class:"fds-search__entry"},Se=s("label",{class:"fds-search__label fds-search__label--sr-only",for:"scopedCategory"},"Search Category",-1),ke={class:"fds-select fds-select--small fds-search__select",name:"scopedCategory",id:"scopedCategory"},ye=["value","selected"],Be={class:"fds-search__submit"},$e=s("span",{class:"fds-search__text"},"Search",-1),Ce=[$e];function Ee(d,_,a,t,u,f){return n(),l("nav",null,[s("div",Ss,[s("div",ks,[s("ul",ys,[(n(!0),l(v,null,A(t.navData.main,e=>(n(),l("li",{key:e.uid,"data-control-id":e.uid,class:F("fds-nav-global__list-item "+e.columnClass)},[e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="true"?(n(),l("div",$s,[s("button",{id:e.uid+"-BTN",onClick:o=>t.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},r(e.label),9,Es)],8,Cs),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",{class:"fds-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[(n(!0),l(v,null,A(e.children,o=>(n(),l("div",{key:o.uid,class:"fds-nav-global__sub-menu-group"},[s("h3",{class:"fds-nav-global__sub-menu-title",id:o.uid},r(o.header),9,Ns),s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":o.uid},[(n(!0),l(v,null,A(o.group,c=>(n(),l("li",{key:c.uid,class:"fds-nav-global__sub-menu-item"},[s("a",{href:t.basePath+c.path,onClick:E(y=>t.navigateTo(e.uid+"-BTN",c.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},r(c.label),9,Rs)]))),128))],8,Us)]))),128))],8,Ls)],8,Ps)])):e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="false"?(n(),l("div",ws,[s("button",{id:e.uid+"-BTN",onClick:o=>t.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},r(e.label),9,Fs)],8,Ts),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",xs,[s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(n(!0),l(v,null,A(e.children,o=>(n(),l("li",{key:o.uid,class:"fds-nav-global__sub-menu-item"},[s("a",{href:t.basePath+o.path,onClick:E(c=>t.navigateTo(e.uid+"-BTN",o.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},r(o.label),9,Ds)]))),128))],8,Gs)])],8,Ms)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="true"?(n(),l("div",Is,[s("button",{id:e.uid+"-BTN",onClick:o=>t.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},r(e.label),9,Vs)],8,Os),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[(n(!0),l(v,null,A(e.children,o=>(n(),l("div",{key:o.uid,class:"fds-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[s("h3",{class:"fds-nav-global__sub-menu-title",id:o.uid},r(o.header),9,js),s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":o.uid},[(n(!0),l(v,null,A(o.group,c=>(n(),l("li",{key:c.uid,class:"fds-nav-global__sub-menu-item"},[s("a",{href:t.basePath+c.path,onClick:E(y=>t.navigateTo(e.uid+"-BTN",c.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},r(c.label),9,Ws)]))),128))],8,Ks)],8,zs))),128))],8,Hs)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="false"?(n(),l("div",Ys,[s("button",{id:e.uid+"-BTN",onClick:o=>t.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},r(e.label),9,qs)],8,Xs),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",Qs,[s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(n(!0),l(v,null,A(e.children,o=>(n(),l("li",{key:o.id,class:"fds-nav-global__sub-menu-item"},[s("a",{href:t.basePath+o.path,onClick:E(c=>t.navigateTo(e.uid+"-BTN",o.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},r(o.label),9,se)]))),128))],8,Zs)])],8,Js)])):(n(),l("div",ee,[s("a",{href:t.basePath+e.path,onClick:E(o=>t.goto(e.path),["prevent"]),class:"fds-nav-global__link"},[s("span",ae,r(e.label),1)],8,te)]))],10,Bs))),128))]),t.navData.side?(n(),l("div",oe,[s("div",ne,[(n(!0),l(v,null,A(t.navData.side,e=>(n(),l("span",{key:e.uid},[s("a",{href:t.basePath+e.path,onClick:E(o=>t.goto(e.path),["prevent"])},[s("span",_e,[e.icon?(n(),l("svg",{key:0,class:F(e.icon.class),"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:e.icon.path},null,8,de)],2)):U("",!0),s("span",null,r(e.label),1)])],8,le)]))),128))])])):U("",!0),a.USE_SEARCH=="true"?(n(),l("div",ie,[s("div",re,[s("div",ce,[ue,s("div",fe,[s("button",{onClick:_[0]||(_[0]=(...e)=>t.doSearch&&t.doSearch(...e)),class:"fds-btn fds-btn--small fds-search__btn fds-search__btn--icon"},be)])])])])):U("",!0),a.USE_SCOPED_SEARCH=="true"?(n(),l("div",pe,[s("div",ge,[s("div",ve,[Ae,s("div",me,[Se,s("select",ke,[(n(!0),l(v,null,A(d.SCOPED_SEARCH_CATEGORIES,e=>(n(),l("option",{key:e.label,value:e.val,selected:e.selected},r(e.label),9,ye))),128))])]),s("div",Be,[s("button",{onClick:_[1]||(_[1]=(...e)=>t.doScopedSearch&&t.doScopedSearch(...e)),class:"fds-btn fds-btn--small fds-search__btn fds-search__btn--icon"},Ce)])])])])):U("",!0)])])])}const Pe=m(ms,[["render",Ee]]),Le={props:{NAV_TYPE:String},components:{tophat:ns,headerApp:vs,globalNav:Pe},setup(d,{emit:_}){const a=z(),t=L(()=>a.getters["navigation/getNavigation"]);return x(()=>{let u={type:d.NAV_TYPE?d.NAV_TYPE:""};a.dispatch("navigation/setNavigation",u)}),{navigationData:t}}};function Ne(d,_,a,t,u,f){const e=S("tophat"),o=S("headerApp"),c=S("globalNav");return n(),l("header",null,[k(e,{AG_ABBR:"USDA",AG_FULL:"United States Department of Agriculture",AG_URL:"//www.usda.gov",AG_LOGO:"/src/_static/img/usda-logo--white.svg",SUB_AG_ABBR:"FPAC",SUB_AG_FULL:"Farm Production and Conservation",SUB_AG_URL:"//fsa.usda.gov"}),k(o,{APP_ABBR_NAME:"NPS",APP_FULL_NAME:"National Payment Service",PROFILE_NAME:"Michael Scott (Log off)",LOGOFF_URL:"https://www.eauth.usda.gov/Logout/logoff.asp"}),k(c,{NAV_DATA:t.navigationData,EXTRA_CLASSES:"fds-nav-global__list-item--multi-column"},null,8,["NAV_DATA"])])}const mt=m(Le,[["render",Ne]]),Ue={},Re={class:"fds-topper"},we=s("div",{class:"fds-topper__bd"},[s("a",{class:"fds-topper__link",href:"#main-content"},"Return to top")],-1),Te=[we];function Fe(d,_,a,t,u,f){return n(),l("div",Re,Te)}const Me=m(Ue,[["render",Fe]]),xe={props:{APP_ABBR_NAME:String},setup(d){const{goto:_}=D();return{goto:_}}},Ge={class:"fds-footer"},De={class:"fds-footer__bd"},Ie={class:"fds-grid"},Oe={class:"fds-footer__primary fds-grid__1/1 fds-grid__9/12@l"},Ve={class:"fds-grid"},He={class:"fds-grid__1/1 fds-grid__1/3@m"},ze=s("h3",{class:"fds-footer__cat-header"},"Program Information",-1),je={class:"fds-footer__list"},Ke={class:"fds-footer__list-item"},We={to:"/",target:"_blank"},Ye={class:"fds-footer__list-item"},Xe={href:"/",target:"_blank"},qe={class:"fds-footer__list-item"},Je={href:"/",target:"_blank"},Qe=G('<div class="fds-grid__1/1 fds-grid__1/3@m"><h3 class="fds-footer__cat-header">Agency Guidelines</h3><ul class="fds-footer__list"><li class="fds-footer__list-item"><a href="/" target="_blank">Publications</a></li><li class="fds-footer__list-item"><a href="/" target="_blank">Handbooks</a></li><li class="fds-footer__list-item"><a href="/" target="_blank">Notices</a></li><li class="fds-footer__list-item"><a href="/" target="_blank">FFAS Employee Forms</a></li><li class="fds-footer__list-item"><a href="/" target="_blank">Software Transmittals</a></li></ul></div><div class="fds-grid__1/1 fds-grid__1/3@m"><h3 class="fds-footer__cat-header">Resources</h3><ul class="fds-footer__list"><li class="fds-footer__list-item"><a href="/" target="_blank">Inside FSA</a></li><li class="fds-footer__list-item"><a href="/" target="_blank">Policies and Links</a></li></ul></div>',2),Ze={class:"fds-footer__secondary fds-grid__1/1 fds-grid__3/12@l"},st={class:"fds-footer__list fds-footer__secondary-list"},et={class:"fds-footer__list-item fds-footer__secondary-list-item"},tt=s("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),at=G('<li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="tel:+8005551234" target="_blank">1-800-555-1234</a></li><li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="//www.fsa.usda.gov/" target="_blank">FSA Website</a></li><li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>',3);function ot(d,_,a,t,u,f){return n(),l("div",Ge,[s("div",De,[s("div",Ie,[s("div",Oe,[s("div",Ve,[s("div",He,[ze,s("ul",je,[s("li",Ke,[s("a",We,"About "+r(a.APP_ABBR_NAME),1)]),s("li",Ye,[s("a",Xe,r(a.APP_ABBR_NAME)+" - Handbook 1",1)]),s("li",qe,[s("a",Je,r(a.APP_ABBR_NAME)+" - Handbook 2",1)])])]),Qe])]),s("div",Ze,[s("ul",st,[s("li",et,[s("button",{onClick:_[0]||(_[0]=e=>t.goto("/help")),class:"fds-btn fds-footer__btn",type:"button"},[tt,j(" Help ")])]),at])])])])])}const nt=m(xe,[["render",ot]]),lt={props:{SCREEN_ID:String}},_t={class:"fds-screen-id"},dt={class:"fds-screen-id__bd"},it={class:"fds-screen-id__dl"},rt=s("dt",{class:"fds-screen-id__dt"},"Screen ID",-1),ct={class:"fds-screen-id__dd"};function ut(d,_,a,t,u,f){return n(),l("div",_t,[s("div",dt,[s("dl",it,[rt,s("dd",ct,r(a.SCREEN_ID),1)])])])}const ft=m(lt,[["render",ut]]),ht={};function bt(d,_,a,t,u,f){return n(),l("div")}const pt=m(ht,[["render",bt]]),gt={components:{footerTopper:Me,footerFooter:nt,footerScreenId:ft,hiddenItems:pt},setup(d){}};function vt(d,_,a,t,u,f){const e=S("footerTopper"),o=S("footerFooter"),c=S("footerScreenId"),y=S("hiddenItems");return n(),l("footer",null,[k(e),k(o,{APP_ABBR_NAME:"NPS"}),k(c,{SCREEN_ID:"NPS-WEB006"}),k(y)])}const St=m(gt,[["render",vt]]);export{St as a,mt as b,D as u};