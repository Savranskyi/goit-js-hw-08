// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const createGalleryMarkup = ({ preview, original, description }) => {
    return `
    <li style="list-style:none">
      <a class="gallery__item" href="${original}">
      <img 
      style="display:block"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
    </a>
    </li>
    `;
  };
  
  const renderGalleryMarkup = galleryItems.map(createGalleryMarkup).join('');
  
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', renderGalleryMarkup);
  
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
    enableKeyboard: true,
  });



