
export default function createGalleryItem (item) {
    return item.map(({original, preview, description}) => {
      return  `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    }).join('')
  }

