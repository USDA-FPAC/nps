import{f as s}from"./index.ccc4dacf.js";function y(){const n=s(""),o=s({}),d=s({}),r=e=>{let a=document.getElementById(e);a.setAttribute("aria-expanded",!0),a.setAttribute("aria-hidden","false"),a.addEventListener("keydown",c);let l='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',t=a.querySelectorAll(l);t=Array.prototype.slice.call(t),o.value=t[0],d.value=t[t.length-1],o.value.focus();let i=document.getElementsByTagName("body")[0];i.className=i.className+" fds-modal-scroll-fix",setTimeout(function(){a.focus()},200)},u=e=>{document.getElementById(e).setAttribute("aria-hidden","true");let l=document.getElementsByTagName("body")[0];l.className=l.className.replace(" fds-modal-scroll-fix","");let t=document.querySelector("[data-modal-origin]");t&&(t.removeAttribute("data-modal-origin"),t.setAttribute("aria-expanded","false"),t.focus())},c=e=>{e.keyCode===9&&(e.shiftKey?document.activeElement===o.value&&(e.preventDefault(),d.value.focus()):document.activeElement===d.value&&(e.preventDefault(),o.value.focus())),e.keyCode===27&&closeModal()};return{setModalId:e=>{n.value=e},getModalId:()=>n.value,showModal:r,hideModal:u}}export{y as u};
