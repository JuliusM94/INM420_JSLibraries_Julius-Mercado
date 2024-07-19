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

// MAP | LEAFLET JS
var map = L.map('map').setView([43.652798, -79.384055], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

// var marker = L.marker([43.651337, -79.384028]).addTo(map);

var circle = L.circle([43.651337, -79.384028], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 2000
}).addTo(map);