import{a as L,S as w,i as m}from"./assets/vendor-b2578120.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();async function f(e,t,s){const a="43160524-9a6063b2023a0abfcd049074a",o="https://pixabay.com/api/",r=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s});try{return(await L.get(o,{params:r})).data}catch(n){console.error("Error fetching images:",n)}}const h=document.querySelector(".gallery");function p(e){return e.map(t=>`
   <li class='photo-card'>
    <a href='${t.largeImageURL}'>
      <img src='${t.webformatURL}' alt='${t.tags}' loading='lazy' />
    </a>
    <div class='info'>
      <p class='info-item'>
        <b>Likes ${t.likes}</b>
      </p>
      <p class='info-item'>
        <b>Views ${t.views}</b>
      </p>
      <p class='info-item'>
        <b>Comments ${t.comments}</b>
      </p>
      <p class='info-item'>
        <b>Downloads ${t.downloads}</b>
      </p>
    </div>
  </li>
  `).join("")}function E(){const e=document.createElement("p");e.classList.add("end-message"),e.textContent="We're sorry, but you've reached the end of search results.",h.insertAdjacentElement("afterend",e)}const v=new w(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".scroll-to-top"),S=document.querySelector(".search-form");S.addEventListener("submit",T);const d=document.querySelector(".gallery"),y=document.querySelector(".wraper-loader"),c=document.querySelector(".load-more-btn");let i=1,M="";const u=15;async function T(e){e.preventDefault(),d.innerHTML="",g(),q();const t=e.currentTarget.elements.searchQuery.value.trim();i=1,f(t).then(s=>{if(s.hits.length===0)return m.error({message:"Sorry, there are no images matching your search query. Please try again!"});d.insertAdjacentHTML("beforeend",p(s.hits)),v.refresh()}).catch(s=>{console.log(s)}).finally(()=>{b()}),O()}c.addEventListener("click",async()=>{try{c&&(i+=1);const e=await f(M,i,u),t=e.totalHits;p(e.hits),g(),u*i>=t&&(C(),E());const s=h.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(e){console.error("Error fetching more images:",e),m.error({title:"Error",message:`Error fetching more images: ${e}`})}finally{b()}});function g(){y.classList.remove("is-hidden")}function b(){y.classList.add("is-hidden")}function q(){c.style.display="block"}function C(){c.style.display="none"}function O(){const e=document.querySelector(".end-message");e&&e.remove()}window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?l.style.display="flex":l.style.display="none"});function P(){window.scrollTo({top:0,behavior:"smooth"})}l.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
