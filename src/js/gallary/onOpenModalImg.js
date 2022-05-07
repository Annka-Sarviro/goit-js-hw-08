export default function onOpenModalImg(event) {
    event.preventDefault();
        
    let gallery = new SimpleLightbox('.gallery .gallery__item', {
        
        captionDelay: 250,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        
    });
}
