import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { galleryElement } from './js/render-functions';
import { showEndOfCollectionMessage } from './js/render-functions';
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

const scrollToTopBtn = document.querySelector('.scroll-to-top');

const formElement = document.querySelector('.search-form');
formElement.addEventListener('submit', onSubmit);
const listElement = document.querySelector('.gallery');
const loader = document.querySelector('.wraper-loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
const inputElement = document.querySelector('.search-input');
let pageCounter = 1;
let searchQuery = '';
const per_page = 15;

async function onSubmit(event) {
  event.preventDefault();
  listElement.innerHTML = '';
  showLoader();
  showLoadMoreBtn();
  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
  pageCounter = 1;
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
  hideEndOfCollectionMessage();
  showLoader();
  try {
    const images = await getPhotos(searchQuery, pageCounter, per_page);
    const totalHits = images.totalHits;

    if (images.hits.length === 0) {
      galleryElement.innerHTML = '';
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
      hideLoadMoreBtn();
      return;
    } else {
      createMarkup(images.hits);
      inputElement.value = '';
      showLoadMoreBtn();
    }
    if (per_page * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndOfCollectionMessage();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }
}

/* Load more */
loadMoreBtn.addEventListener('click', async () => {
  try {
    if (loadMoreBtn) {
      pageCounter += 1;
    }
    const images = await getPhotos(searchQuery, pageCounter, per_page);
    const totalHits = images.totalHits;

    createMarkup(images.hits);
    showLoader();
    if (per_page * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndOfCollectionMessage();
    }

    const galleryCardHeight =
      galleryElement.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: galleryCardHeight * 3, behavior: 'smooth' });
  } catch (error) {
    console.error('Error fetching more images:', error);
    iziToast.error({
      title: 'Error',
      message: `Error fetching more images: ${error}`,
    });
  } finally {
    hideLoader();
  }
});

//* loader *//
function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}

// * button load more images
function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}

function hideEndOfCollectionMessage() {
  const endMessage = document.querySelector('.end-message');
  if (endMessage) {
    endMessage.remove();
  }
}
//* scroll to top  *//
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
