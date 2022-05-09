// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css";

import createGalleryItem from './gallary/createGallery';


const galleryBoxEl = document.querySelector('.gallery');
const createGallaryMarkup = createGalleryItem(galleryItems);
galleryBoxEl.insertAdjacentHTML('beforeend', createGallaryMarkup);
let gallery = new SimpleLightbox('.gallery .gallery__item', {
        
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    
});

