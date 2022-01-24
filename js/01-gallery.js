import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
let items;

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// gallery.addEventListener('click', onGalleryItemsClick);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
 `;
    })
        .join('');

}


// function onGalleryItemsClick(ev) {
//     ev.target.event;
// }