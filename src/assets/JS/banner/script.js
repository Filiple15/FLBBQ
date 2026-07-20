/*====================================
            BANNER SLIDER
====================================*/

export function iniciarBanner(){

    /*==============================
            ELEMENTOS
    ==============================*/

    const slides = document.querySelectorAll(".slide");
    const banner = document.querySelector(".main-conteiner");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    /*==============================
        VERIFICA SE EXISTE BANNER
    ==============================*/

    if(
        slides.length === 0 ||
        !banner ||
        !nextBtn ||
        !prevBtn
    ){
        return;
    }

    /*==============================
            VARIÁVEIS
    ==============================*/

    let current = 0;
    let interval = null;

    /*==============================
            MOSTRAR SLIDE
    ==============================*/

    function showSlide(index){

        slides.forEach(slide=>{

            slide.classList.remove("active");

        });

        slides[index].classList.add("active");

    }

    /*==============================
            PRÓXIMO
    ==============================*/

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    }

    /*==============================
            ANTERIOR
    ==============================*/

    function prevSlide(){

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        showSlide(current);

    }

    /*==============================
            AUTOPLAY
    ==============================*/

    function startSlider(){

        stopSlider();

        interval = setInterval(nextSlide, 5000);

    }

    function stopSlider(){

        if(interval){

            clearInterval(interval);

        }

    }

    /*==============================
            EVENTOS
    ==============================*/

    nextBtn.addEventListener("click",()=>{

        nextSlide();
        startSlider();

    });

    prevBtn.addEventListener("click",()=>{

        prevSlide();
        startSlider();

    });

    banner.addEventListener("mouseenter",stopSlider);

    banner.addEventListener("mouseleave",startSlider);

    /*==============================
            INICIAR
    ==============================*/

    showSlide(current);

    startSlider();

}