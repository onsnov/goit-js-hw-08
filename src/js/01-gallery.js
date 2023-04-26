import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';

// Add imports above this line

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

galleryList.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" 
        alt="${description}" />
  </a>
       `;
  })
  .join('');

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
