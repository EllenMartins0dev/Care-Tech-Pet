document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('animalCarousel');
    carousel.addEventListener('slid.bs.carousel', function () {
        var activeIndex = parseInt(carousel.querySelector('.carousel-item.active').getAttribute('data-bs-slide-to'));
        var totalItems = carousel.querySelectorAll('.carousel-item').length;
        
        // Verifica se é a última imagem e atualiza para a primeira imagem
        if (activeIndex === totalItems - 1) {
            carousel.querySelector('.carousel-item').classList.add('active');
            carousel.querySelector('.carousel-indicators [data-bs-slide-to="0"]').classList.add('active');
        }
    });
});
 