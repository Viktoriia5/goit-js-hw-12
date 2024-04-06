import{a as v,S,i as c}from"./assets/vendor-b2578120.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();async function u(e,t,r){const n="43160524-9a6063b2023a0abfcd049074a",o="https://pixabay.com/api/",s=new URLSearchParams({key:n,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r});try{return(await v.get(o,{params:s})).data}catch(i){console.error("Error fetching images:",i)}}const p=document.querySelector(".gallery");function m(e){return e.map(t=>`
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
  `).join("")}function E(){const e=document.createElement("p");e.classList.add("end-message"),e.textContent="We're sorry, but you've reached the end of search results.",p.insertAdjacentElement("afterend",e)}const M=new S(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".scroll-to-top"),T=document.querySelector(".search-form");T.addEventListener("submit",P);const b=document.querySelector(".gallery"),w=document.querySelector(".wraper-loader"),l=document.querySelector(".load-more-btn"),q=document.querySelector(".search-input");let a=1,C="";const d=15;async function P(e){e.preventDefault(),b.innerHTML="",h(),L();const t=e.currentTarget.elements.searchQuery.value.trim();a=1,u(t).then(r=>{if(r.hits.length===0)return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});b.insertAdjacentHTML("beforeend",m(r.hits)),M.refresh()}).catch(r=>{console.log(r)}).finally(()=>{g()}),H(),h();try{const r=await u(t,a,d),n=r.totalHits;if(r.hits.length===0){p.innerHTML="",c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),y();return}else m(r.hits),q.value="",L();d*a>=n&&(y(),E())}catch(r){console.error("Error fetching images:",r),c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{g()}}l.addEventListener("click",async()=>{try{l&&(a+=1);const e=await u(C,a,d),t=e.totalHits;m(e.hits),h(),d*a>=t&&(y(),E());const r=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}catch(e){console.error("Error fetching more images:",e),c.error({title:"Error",message:`Error fetching more images: ${e}`})}finally{g()}});function h(){w.classList.remove("is-hidden")}function g(){w.classList.add("is-hidden")}function L(){l.style.display="block"}function y(){l.style.display="none"}function H(){const e=document.querySelector(".end-message");e&&e.remove()}window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?f.style.display="flex":f.style.display="none"});function O(){window.scrollTo({top:0,behavior:"smooth"})}f.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
