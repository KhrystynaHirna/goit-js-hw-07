import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener('click', onGalleryItemsClick);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" source="${original}">
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
function onGalleryItemsClick(ev) {
    ev.preventDefault();

    if (ev.target.nodeName !== "IMG") {
        return;
    };
    const imageUrl = ev.target.dataset.source;
    const instance = basicLightbox.create(`<img src=${imageUrl}>`);

    instance.show()
   
    onShow: (instance) => {
        window.addEventListener("keydown", onEscClick);
         instance.show();
    }
    
    onClose: (instance) => {
        window.removeEventListener("keydown", onEscClick)
         instance.close();
    }

    function onEscClick(ev) {
        if (ev.key === "Escape") {
            instance.close();
        }
    }
};





 



   