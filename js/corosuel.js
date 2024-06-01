let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    currentIndex = (index + slides.length) % slides.length;

    const offset = currentIndex * 420; // Assuming each image has a width of 400px plus margin
    document.querySelector('.carousel-inner').style.transform = `translateX(-${offset}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlides(index - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentIndex);

    setInterval(() => {
        showSlides(currentIndex + 1);
    }, 3000);
});