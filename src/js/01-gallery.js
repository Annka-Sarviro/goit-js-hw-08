// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createGalleryItem from './gallary/createGallery';
import onOpenModalImg from './gallary/onOpenModalImg';

const galleryBoxEl = document.querySelector('.gallery');
const createGallaryMarkup = createGalleryItem(galleryItems);
galleryBoxEl.insertAdjacentHTML('beforeend', createGallaryMarkup);

galleryBoxEl.addEventListener('click', onOpenModalImg);

