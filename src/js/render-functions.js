export function createMarkup(arr) {
  return arr
    .map(
      el => `
   <li class='photo-card'>
    <a href='${el.largeImageURL}'>
      <img src='${el.webformatURL}' alt='${el.tags}' loading='lazy' />
    </a>
    <div class='info'>
      <p class='info-item'>
        <b>Likes ${el.likes}</b>
      </p>
      <p class='info-item'>
        <b>Views ${el.views}</b>
      </p>
      <p class='info-item'>
        <b>Comments ${el.comments}</b>
      </p>
      <p class='info-item'>
        <b>Downloads ${el.downloads}</b>
      </p>
    </div>
  </li>
  `
    )
    .join('');
}
