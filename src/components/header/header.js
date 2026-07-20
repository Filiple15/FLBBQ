/*====================================
            HEADER
====================================*/

export async function carregarHeader(){

    try{

        const resposta = await fetch("./src/components/header/header.html");

        if(!resposta.ok){

            throw new Error("Erro ao carregar header.html");

        }

        const html = await resposta.text();

        document.getElementById("header").innerHTML = html;

        iniciarHeader();

    }

    catch(erro){

        console.error(erro);

    }

}

/*====================================
        INICIAR HEADER
====================================*/

function iniciarHeader(){

    iniciarScroll();

    iniciarMenu();

}

/*====================================
        SCROLL
====================================*/

function iniciarScroll(){

    const header = document.getElementById("header");

    if(!header) return;

    let ultimoScroll = 0;

    window.addEventListener("scroll",()=>{

        const scrollAtual = window.scrollY;

        if(scrollAtual <= 10){

            header.classList.remove("ocultar");
            header.classList.remove("rolando");

            ultimoScroll = 0;

            return;

        }

        header.classList.add("rolando");

        if(scrollAtual > ultimoScroll){

            header.classList.add("ocultar");

        }

        else{

            header.classList.remove("ocultar");

        }

        ultimoScroll = scrollAtual;

    });

}

/*====================================
        MENU MOBILE
====================================*/

function iniciarMenu(){

    const btnMenu = document.querySelector(".menu-mobile-btn");
    const menu = document.querySelector(".menu-mobile");

    if(!btnMenu || !menu){

        console.warn("Menu Mobile não encontrado.");

        return;

    }

    btnMenu.addEventListener("click",()=>{

        menu.classList.toggle("ativo");

    });

}