// inicializamos GLightbox
const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    zoomable: true,
    touchNavigation: true,
    autoplayVideos: false
});

// opcional: puedes agregar eventos
lightbox.on('open', () => {
    console.log('Lightbox abierto');
});

lightbox.on('slide_changed', ({ prev, current }) => {
    console.log('Foto actual:', current.index + 1);
});
