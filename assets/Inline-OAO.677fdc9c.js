import{_ as N,s as f,f as a,e as Q,v as x,h as Y,a as z,o as r,c as _,b as l,d as t,w as O,F as T,j as F,l as X,q as j,p as u,r as p,t as i,n as q,m as Z,x as E}from"./index.ccc4dacf.js";import{b as W,a as J,u as K}from"./BaseFooter.fac22c12.js";import{u as $}from"./usePopoverControls.72b59f05.js";const tt=f(()=>E(()=>import("./field.7e3316a7.js"),["assets/field.7e3316a7.js","assets/useErrorState.c5d9d09c.js","assets/index.ccc4dacf.js","assets/index.32e1e17e.css","assets/usePopoverControls.72b59f05.js"])),et=f(()=>E(()=>import("./selection.7d41ff3a.js"),["assets/selection.7d41ff3a.js","assets/useErrorState.c5d9d09c.js","assets/index.ccc4dacf.js","assets/index.32e1e17e.css","assets/usePopoverControls.72b59f05.js"])),st=f(()=>E(()=>import("./inline-help.59aaf1b3.js"),["assets/inline-help.59aaf1b3.js","assets/usePopoverControls.72b59f05.js","assets/index.ccc4dacf.js","assets/index.32e1e17e.css"])),at=f(()=>E(()=>import("./Page-Level-Help-Modal.22c5b5c8.js"),["assets/Page-Level-Help-Modal.22c5b5c8.js","assets/useModalControls.53ad5d1a.js","assets/index.ccc4dacf.js","assets/index.32e1e17e.css"])),lt={components:{baseHeader:W,baseFooter:J,field:tt,selection:et,inlineHelp:st,pageLevelHelpModal:at},setup(v){const o=Z(),{goto:I}=K(),{showPopover:e,hidePopover:D}=$(),g=a(null),h=a(null),d=a(null),b=a(null),m=a(null),A=[{id:"state1",label:"Alabama",name:"stateGroup"},{id:"state2",label:"Alaska",name:"stateGroup"},{id:"state3",label:"Arizona",name:"stateGroup"},{id:"state4",label:"Arkansas",name:"stateGroup"}],s=[{id:"county1",label:"Adair",name:"countyGroup"},{id:"county2",label:"Abner",name:"countyGroup"},{id:"county3",label:"Abner",name:"countyGroup"},{id:"county4",label:"Abner",name:"countyGroup"}],S=[{id:"addFilter1",label:"Tax Id",name:"addFilterGroup"},{id:"addFilter2",label:"Name",name:"addFilterGroup"},{id:"addFilter3",label:"All",name:"addFilterGroup"}],c=[{id:"addFilter1",label:"SSN(S)",name:"addFilterGroup"},{id:"addFilter2",label:"XYZ",name:"addFilterGroup"},{id:"addFilter3",label:"ABC",name:"addFilterGroup"}],y=Q(()=>o.getters["search/getSearchResults"]);let P=a([]);const C=a(x()),R=a(!0);a(!0);const w=a(x()),k=()=>{o.dispatch("search/setSearch",{type:"payments-inline"})},G=()=>{R.value=!1},U=()=>{R.value=!0},V=()=>{k()},B=n=>{n!=""?G():U()},H=n=>{if(n!=null){let M=n.type,L=n.val;switch(M){case"goto":I(L);break;case"alert":alert(L);break}}};return Y(y,n=>{P.value=n}),z(()=>{console.log("Payments onMounted")}),{stateField:g,countyField:h,addFiltersField:d,taxIdField:b,taxIdTypeField:m,stateData:A,countyData:s,addFiltersData:S,taxIdTypeData:c,tableInlineHelpId:w,searchData:P,searchPayments:V,showPopover:e,hidePopover:D,searchButtonId:C,isSearchDisabled:R,catchUpdate:B,doAction:H}}},ot={id:"main-content",tabindex:"-1"},nt=t("div",{class:"fds-section"},[t("div",{class:"fds-section__bd"},[t("div",{class:"fds-m-t--l"},[t("h1",null,"Payments Dashboard")])])],-1),it={class:"fds-section"},dt={class:"fds-section__bd"},ct=j('<div class="fds-content-tabs fds-content-tabs--justified-equal"><ul class="fds-content-tabs__list"><li class="fds-content-tabs__item"><a class="fds-content-tabs__label fds-content-tabs__label--active" aria-current="step" href="#link"><span class="fds-content-tabs__label-text">Manual Handling</span></a></li><li class="fds-content-tabs__item"><a class="fds-content-tabs__label" href="#link"><span class="fds-content-tabs__label-text">Certification</span></a></li><li class="fds-content-tabs__item"><a class="fds-content-tabs__label" href="#link"><span class="fds-content-tabs__label-text">Signing</span></a></li><li class="fds-content-tabs__item"><a class="fds-content-tabs__label" href="#link"><span class="fds-content-tabs__label-text">Reset Held Payment</span></a></li></ul></div>',1),rt={class:"fds-m-t--m"},_t={class:"fds-level fds-level--grow-even"},ut={class:"fds-level fds-level--grow-even"},pt=t("div",{id:"tax-id-popover-help1-body"},[t("p",null,'A Tax ID must be provided in order to enable the "Search" button and perform a search.')],-1),ft={class:"fds-field"},Et=["id","disabled"],ht={class:"fds-table"},bt={class:"fds-level@m fds-level--justify-between"},mt=t("h3",null,"Search Results",-1),At=t("div",{id:"pies-help-popup-body"},[t("p",null,[t("strong",null,"Other Agency Offset"),u(" - Use this button to perform Aut illum nostrum, perspiciatis asperiores.")]),t("p",null,[t("strong",null,"Reset Payment"),u(" - Use this button to perform Aut illum nostrum, perspiciatis asperiores esse eveniet earum")]),t("p",null,[t("strong",null,"Foreign Tax Withholding"),u(" - Use this button to perform perspiciatis asperiores esse eveniet earum.")]),t("p",null,[t("strong",null,"Prompt Payment"),u(" - Use this button to perform autsit tenetur adipisci. Eos facilis illum qui fug asperiores.")])],-1),St={scope:"col","aria-sort":"ascending",class:"fds-text-align--left"},Rt=t("th",{scope:"col"},"Tax ID",-1),vt=t("th",{scope:"col"},"Payment ID",-1),It=t("th",{scope:"col"},"Amount ($)",-1),Dt=t("th",{scope:"col"},"Issue Date",-1),gt=t("th",{scope:"col"},"Recieved Date",-1),yt=t("th",{scope:"col",class:"fds-text-align--right"},"Actions",-1),Pt={key:0},Lt={class:"fds-text-allcaps"},xt={class:"fds-text-allcaps"},Ot={class:"fds-text-allcaps"},Tt={class:"fds-text-allcaps"},Ft={class:"fds-text-allcaps"},Ct={class:"fds-text-allcaps"},wt={class:"fds-level fds-level--justify-right fds-level--gutter-xs"},kt=["onClick"],Gt=t("div",{class:"fds-whiteout",tabindex:"-1",id:"fds-whiteout","aria-hidden":"true"},null,-1),Ut=t("div",{class:"fds-growl-container fds-growl-container--centered"},[t("div",{class:"fds-growl fds-growl--error fds-growl--centered",id:"UNIQUE-ID-9469E21387FAF609","aria-hidden":"true",tabindex:"0",role:"alertdialog"},[t("div",{class:"fds-growl__hd"},[t("button",{class:"fds-growl__close","data-behavior":"growl-dismiss whiteout-dismiss",type:"button"},[t("svg",{class:"fds-icon fds-icon--size-3","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})])]),t("h2",{class:"fds-growl__title"},"Cancel Process")]),t("div",{class:"fds-growl__bd"},[t("p",null,[u("Message goes here if you like or something, "),t("a",{href:"link.html"},"with a link"),u(" if necessary.")]),t("p",null,"And another line here for kicks."),t("p",null,[t("button",{"data-behavior":"growl-dismiss whiteout-dismiss",class:"fds-btn fds-btn--small fds-btn--secondary",type:"button"},"Button"),t("a",{class:"fds-btn fds-btn--small fds-btn--secondary",href:"link.html"},"Button link")])])])],-1);function Vt(v,o,I,e,D,g){const h=p("baseHeader"),d=p("selection"),b=p("field"),m=p("inline-help"),A=p("baseFooter");return r(),_("div",null,[l(h,{NAV_TYPE:"inline-help"}),t("main",ot,[nt,t("div",it,[t("div",dt,[ct,t("div",rt,[t("div",_t,[l(d,{ID:"state-123",LABEL:"State",DATA:e.stateData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"stateField"},null,8,["DATA"]),l(d,{ID:"county-932",LABEL:"County",DATA:e.countyData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"countyField"},null,8,["DATA"])]),t("div",ut,[l(d,{ID:"additional-filter-932",LABEL:"Additional Filter",DATA:e.addFiltersData,REQUIRED:"false",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"addFiltersField"},null,8,["DATA"]),l(b,{onEmitInputUpdate:e.catchUpdate,ID:"tax-id-2323",EXTRA_CLASSES:"",LABEL:"Tax ID",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"false",BEHAVIOR:"",ARIA_DESCRIBEDBY:"tax-id-2323__help",HELP_MESSAGE:"",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fds-popover--tr fds-popover--size-small",POPOVER_ID:"tax-id-popover-help1",POPOVER_HEADER:"Tax ID Help",ref:"taxIdField"},{default:O(()=>[pt]),_:1},8,["onEmitInputUpdate"]),l(d,{ID:"tax-id-type-2343",LABEL:"Tax ID Type",DATA:e.taxIdTypeData,REQUIRED:"false",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"taxIdTypeField"},null,8,["DATA"])]),t("div",ft,[t("button",{onClick:o[0]||(o[0]=(...s)=>e.searchPayments&&e.searchPayments(...s)),id:e.searchButtonId,class:"fds-btn fds-btn--primary",type:"button",disabled:e.isSearchDisabled},"Search",8,Et)])]),t("table",ht,[t("caption",null,[t("div",bt,[mt,l(m,{POPOVER_TYPE:"help",POPOVER_CLASSES:"fds-popover--tr fds-popover--size-large",POPOVER_ID:e.tableInlineHelpId,ICON_SIZE:"fds-icon--size-2",POPOVER_HEADER:"Action Buttons Help"},{default:O(()=>[At]),_:1},8,["POPOVER_ID"])])]),t("thead",null,[t("tr",null,[t("th",St,[t("button",{id:"tableSort-1",onClick:o[1]||(o[1]=s=>v.toggleSort(s)),class:"fds-table__sort fds-table__sort--ascending",type:"button"},"Name")]),Rt,vt,It,Dt,gt,yt])]),e.searchData?(r(),_("tbody",Pt,[(r(!0),_(T,null,F(e.searchData,(s,S)=>(r(),_("tr",{key:S},[t("td",null,[t("span",Lt,i(s.name),1)]),t("td",null,[t("span",xt,i(s.taxId),1)]),t("td",null,[t("span",Ot,i(s.paymentId),1)]),t("td",null,[t("span",Tt,i(s.amount),1)]),t("td",null,[t("span",Ft,i(s.issueDate),1)]),t("td",null,[t("span",Ct,i(s.dateReceived),1)]),t("td",null,[t("div",wt,[(r(!0),_(T,null,F(s.actions,c=>(r(),_("button",{onClick:y=>e.doAction(c.action),key:c.id,class:q("fds-btn fds-btn--small "+c.btnClass)},i(c.label),11,kt))),128))])])]))),128))])):X("",!0)])])]),Gt,Ut]),l(A)])}const Nt=N(lt,[["render",Vt]]);export{Nt as default};
