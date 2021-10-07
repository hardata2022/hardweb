
//esta funsion lo que hara sera inicializar el carrusel cuando carge lapagina desde el rpincipio
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');    //este objeto recoje todos los elementos de la clase carrusel
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 4,
        indicators: true,
        noWrap: false

    });                                                 
});