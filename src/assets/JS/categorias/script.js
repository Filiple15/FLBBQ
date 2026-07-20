/*====================================
        TODAS AS CATEGORIAS
====================================*/

function categoria(categoria){
    let cat = categoria.toLowerCase()

    switch (cat){
        case "bone":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "mochila":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "vestuario":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "termico":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "terere":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "abridor":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "cerveja":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "cadeira":
                console.log(`Categoria selecionada: ${cat}`)
                break
        case "todos":
                console.log(`Categoria selecionada: ${cat}`)
                break
        default:
                console.error("Categoria não identificada !!")
    }
}



/* ------------------------------------
        MAIS CATEGORIAS DISPONIVEIS
------------------------------------ */
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

