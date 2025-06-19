// Loader functionality
window.addEventListener('load', function () {
    setTimeout(function () {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2500);
});


// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const translateX = -currentSlide * 100;
    track.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto-play carousel
setInterval(nextSlide, 5000);
