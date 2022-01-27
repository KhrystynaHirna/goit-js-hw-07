import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        alt="${description}"/></a>`;
    })
        .join('');  
}
let lightbox = new SimpleLightbox('.gallery__item', { captionsData: `alt`, captionDelay: 250 });



    
