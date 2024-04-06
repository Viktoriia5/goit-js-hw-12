import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import axios from 'axios';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const formElement = document.querySelector('.search-form');
formElement.addEventListener('submit', onSubmit);
const listElement = document.querySelector('.gallery');
const loader = document.querySelector('.wraper-loader');

function onSubmit(event) {
  event.preventDefault();
  listElement.innerHTML = '';
  showLoader();
  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
  getPhotos(searchQuery)
    .then(response => {
      if (response.hits.length === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      listElement.insertAdjacentHTML('beforeend', createMarkup(response.hits));
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
}

function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}
