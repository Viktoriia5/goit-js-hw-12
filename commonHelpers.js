import{S as l,i as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){const t="43160524-9a6063b2023a0abfcd049074a",o="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}/?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json("")})}function d(s){return s.map(t=>`
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
  `).join("")}const m=new l(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".search-form");h.addEventListener("submit",p);const a=document.querySelector(".gallery"),c=document.querySelector(".wraper-loader");function p(s){s.preventDefault(),a.innerHTML="",y();const t=s.currentTarget.elements.searchQuery.value.trim();f(t).then(o=>{if(o.hits.length===0)return u.error({message:"Sorry, there are no images matching your search query. Please try again!"});a.insertAdjacentHTML("beforeend",d(o.hits)),m.refresh()}).catch(o=>{console.log(o)}).finally(()=>{g()})}function y(){c.classList.remove("is-hidden")}function g(){c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
