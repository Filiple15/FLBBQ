/*====================================
        TODAS AS CATEGORIAS
====================================*/

// Pega a imagem

const imgTodasCategorias = document.getElementById("imgTodasCategorias");

/*====================================
        IMAGENS
====================================*/

const imagensCategorias = [

    "./src/assets/imgs/categorias/CUTELEIRA.png",

    "./src/assets/imgs/categorias/TABUA.png",

    "./src/assets/imgs/categorias/CHURRAQUEIRA.png"

];

/*====================================
        CONTADOR
====================================*/

let indiceCategoria = 0;

/*====================================
        TROCAR IMAGEM
====================================*/

function trocarImagemCategoria(){

    // Faz desaparecer

    imgTodasCategorias.classList.add("fade");

    setTimeout(()=>{

        indiceCategoria++;

        if(indiceCategoria >= imagensCategorias.length){

            indiceCategoria = 0;

        }

        imgTodasCategorias.src = imagensCategorias[indiceCategoria];

        // Volta a aparecer

        imgTodasCategorias.classList.remove("fade");

    },300);

}

/*====================================
        LOOP
====================================*/

setInterval(trocarImagemCategoria,2500);