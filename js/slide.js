const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

function updateSlider() {

    slides.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    indicators.forEach(indicator => {
        indicator.classList.remove("active");
    });

    indicators[currentIndex].classList.add("active");
}

function nextSlide() {

    currentIndex++;

    if (currentIndex >= slide.length) {
        currentIndex = 0;
    }

    updateSlider();
}

function prevSlide() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slide.length - 1;
    }

    updateSlider();
}

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

indicators.forEach((indicator, index) => {

    indicator.addEventListener("click", () => {

        currentIndex = index;
        updateSlider();

    });

});

// Auto Play

setInterval(() => {
    nextSlide();
}, 5000);