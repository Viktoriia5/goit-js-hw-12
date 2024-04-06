import{a as l,S as u,i as d}from"./assets/vendor-b2578120.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(s,t){const o="43160524-9a6063b2023a0abfcd049074a",a="https://pixabay.com/api/",e=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await l.get(a,{params:e})).data}catch(r){console.error("Error fetching images:",r)}}function m(s){return s.map(t=>`
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
  `).join("")}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".search-form");h.addEventListener("submit",g);const n=document.querySelector(".gallery"),c=document.querySelector(".wraper-loader");function g(s){s.preventDefault(),n.innerHTML="",y();const t=s.currentTarget.elements.searchQuery.value.trim();f(t).then(o=>{if(o.hits.length===0)return d.error({message:"Sorry, there are no images matching your search query. Please try again!"});n.insertAdjacentHTML("beforeend",m(o.hits)),p.refresh()}).catch(o=>{console.log(o)}).finally(()=>{b()})}function y(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
