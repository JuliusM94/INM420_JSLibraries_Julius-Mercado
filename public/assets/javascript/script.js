let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.display = 'block';
}

function initCarousel() {
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });
    setInterval(showNextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', initCarousel);