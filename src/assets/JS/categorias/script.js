/*====================================
        SELECIONAR CATEGORIA
====================================*/

function selecionarCategoria(categoria){

    console.clear();

    console.log(`Categoria selecionada:`);

    console.table(categoria);

    // Futuramente:
    // listarProdutos(categoria.id);

}

/*====================================
        VARIÁVEIS
====================================*/

let categoriasOcultas = [];

let indiceAnimacao = 0;

let intervaloCategoria = null;

/*====================================
        TROCAR CARD "TODAS"
====================================*/

function trocarCategoria(){

    const img = document.querySelector("#imgTodasCategorias");
    const titulo = document.querySelector("#tituloTodasCategorias");

    if(!img || !titulo){

        return;

    }

    img.classList.add("fade");
    titulo.classList.add("fade");

    setTimeout(()=>{

        indiceAnimacao++;

        if(indiceAnimacao >= categoriasOcultas.length){

            indiceAnimacao = 0;

        }

        const categoria = categoriasOcultas[indiceAnimacao];

        img.src = categoria.image;
        img.alt = categoria.nome;
        titulo.textContent = categoria.nome;

        img.classList.remove("fade");
        titulo.classList.remove("fade");

    },300);

}

/*====================================
        ANIMAÇÃO
====================================*/

function iniciarAnimacaoCategoria(categorias){

    categoriasOcultas = categorias;

    indiceAnimacao = 0;

    if(categoriasOcultas.length === 0){

        return;

    }

    if(intervaloCategoria){

        clearInterval(intervaloCategoria);

    }

    const primeira = categoriasOcultas[0];

    document.querySelector("#imgTodasCategorias").src = primeira.image;
    document.querySelector("#imgTodasCategorias").alt = primeira.nome;
    document.querySelector("#tituloTodasCategorias").textContent = primeira.nome;

    intervaloCategoria = setInterval(trocarCategoria,2500);

}

/*====================================
        CARD CATEGORIA
====================================*/

function criarCategoria(categoria){

    const card = document.createElement("div");

    card.className = "categoria";

    card.innerHTML = `

        <div class="categoria-img">

            <img src="${categoria.image}" alt="${categoria.nome}">

        </div>

        <h3>${categoria.nome}</h3>

    `;

    card.addEventListener("click",()=>{

        selecionarCategoria(categoria);

    });

    return card;

}

/*====================================
        CARD TODAS
====================================*/

function criarCardTodasCategoria(){

    const card = document.createElement("div");

    card.className = "categoria";

    card.id = "TodasCategorias";

    card.innerHTML = `

        <div class="categoria-img">

            <img src="" alt="" id="imgTodasCategorias">

        </div>

        <h3 id="tituloTodasCategorias">Todas</h3>

    `;

    card.addEventListener("click",()=>{

        console.log("Mostrar todas as categorias");

    });

    return card;

}

/*====================================
        RENDERIZAR
====================================*/

export function renderizarCategoria(categorias){

    const conteiner = document.querySelector("#categoriaConteiner");

    if(!conteiner){

        return;

    }

    conteiner.innerHTML = "";

    const categoriasVisiveis = categorias.slice(0,8);

    const categoriasEscondidas = categorias.slice(8);

    categoriasVisiveis.forEach(categoria=>{

        conteiner.appendChild(

            criarCategoria(categoria)

        );

    });

    if(categoriasEscondidas.length > 0){

        conteiner.appendChild(

            criarCardTodasCategoria()

        );

        iniciarAnimacaoCategoria(categoriasEscondidas);

    }

}

/* --------------------------------------------------
        MOSTRAR FILTROS DE CADEGORIAS DE PRODUTOS
-------------------------------------------------- */

export function renderizarFiltroCategorias(categorias){

    const select = document.getElementById("categoria");

    if(!select) return;

    select.innerHTML = `
        <option value="todos">
            Todas as categorias
        </option>
    `;

    categorias.forEach(categoria => {

        const option = document.createElement("option");

        option.value = categoria.id;
        option.textContent = (categoria.nome).toUpperCase();

        select.appendChild(option);

    });

}