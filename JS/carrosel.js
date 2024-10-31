let currentSlide = 0;
const slides = document.querySelectorAll('.carrosel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializa o carrossel mostrando a primeira imagem
showSlide(currentSlide);

// Passar automaticamente a cada 3 segundos
const autoSlide = setInterval(nextSlide, 3000); // 3000 ms = 3 segundos
