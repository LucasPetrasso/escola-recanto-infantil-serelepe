const slides = document.querySelector(".carrossel_slides");
const imagens = document.querySelectorAll(".carrossel_slide_img img");

const btnNext = document.querySelector(".carrossel_btn_next");
const btnPrev = document.querySelector(".carrossel_btn_prev");

let indice = 0;

btnNext.addEventListener("click", () => {

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    atualizarSlide();

});

btnPrev.addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = slides.length - 1;
    }

    atualizarSlide();

});

function atualizarSlide(){

    slides.style.transform = `translateX(-${indice * 100}%)`;

}