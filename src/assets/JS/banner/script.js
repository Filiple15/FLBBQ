const slides = document.querySelectorAll(".slide");
const banner = document.querySelector(".main-conteiner");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;
let interval = 2;

/* ==========================
        MOSTRAR SLIDE
========================== */

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

/* ==========================
        PRÓXIMO
========================== */

function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}

/* ==========================
        ANTERIOR
========================== */

function prevSlide(){

    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    showSlide(current);

}

/* ==========================
        AUTOPLAY
========================== */

function startSlider(){

    interval = setInterval(nextSlide,5000);

}

function stopSlider(){

    clearInterval(interval);

}

/* ==========================
        EVENTOS
========================== */

nextBtn.addEventListener("click",()=>{

    nextSlide();

    stopSlider();

    startSlider();

});

prevBtn.addEventListener("click",()=>{

    prevSlide();

    stopSlider();

    startSlider();

});

banner.addEventListener("mouseenter",()=>{

    stopSlider();

});

banner.addEventListener("mouseleave",()=>{

    startSlider();

});

/* ==========================
        INICIAR
========================== */

showSlide(current);

startSlider();