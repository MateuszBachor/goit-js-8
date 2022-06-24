// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(
      galleryItem =>
        `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        alt= "${galleryItem.description}"></a>`
    )
    .join('')
);
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});