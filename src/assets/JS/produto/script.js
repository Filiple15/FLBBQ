// addEventListener.btnCompra("click", iniciarBotoes())

// =====================================
// INICIALIZAÇÃO
// =====================================

export function iniciarProduto() {

    console.log("Página Produto carregada.");
    iniciarGaleria();
    iniciarBotoes();
    iniciarTermos();
    iniciarFrete();

}

// =====================================
// GALERIA
// =====================================

function iniciarGaleria() {

    const miniaturas = document.querySelectorAll(".miniatura");
    const imagemPrincipal = document.querySelector(".img-mostrando img");

    if (!miniaturas.length || !imagemPrincipal) return;

    miniaturas.forEach((miniatura) => {

        miniatura.addEventListener("click", () => {

            imagemPrincipal.src = miniatura.src;

            miniaturas.forEach(img => img.classList.remove("ativa"));
            miniatura.classList.add("ativa");

        });

    });

}



// =====================================
// BOTÕES
// =====================================

function iniciarBotoes(){

    const btnComprar = document.querySelector(".btnCompra");
    const btnCarrinho = document.querySelector(".btnCarrinho");


    if(btnComprar){

        btnComprar.addEventListener("click", ()=>{

            alert("Comprar clicado.");

        });

    }


    if(btnCarrinho){

        btnCarrinho.addEventListener("click", ()=>{

            alert("Adicionar ao carrinho.");

        });

    }

}

// =====================================
// TERMOS
// =====================================

function iniciarTermos() {

    // const checkbox = document.getElementById("termos");
    // const btnCompra = document.querySelector(".btnCompra");

    if (!checkbox || !btnCompra) return;

    // Começa bloqueado
    btnCompra.disabled = true;

    checkbox.addEventListener("change", () => {

        btnCompra.disabled = !checkbox.checked;

    });

}

// =====================================
// FRETE
// =====================================

function iniciarFrete() {

    const inputCEP = document.querySelector("#cep");
    const botaoFrete = document.querySelector(".btnFrete");

    if (botaoFrete) {

        botaoFrete.addEventListener("click", calcularFrete);

    }

    if (inputCEP) {

        inputCEP.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                calcularFrete();

            }

        });

    }

}

function calcularFrete() {

    alert("Aqui futuramente será calculado o frete.");

}

/* ------------------------------
    MOSTRANDO PRODUTOS NA TELA
------------------------------ */

import {listarProdutos} from '../services/produto.service.js'

const listaProdutos = document.querySelector('#listaProdutos')

export async function iniciarProdutos() {
    const produtos = await listarProdutos()
    renderizarProdutos(produtos)
}

// ---------------------------
// Renderização dos produtos
// ---------------------------

function renderizarProdutos(produtos){
    listaProdutos.innerHTML = ''
    produtos.slice(0, 5).forEach(produto => {
        const imagemPrincipal = produto.imagens.find(
            imagem => imagem.principal
        )
        const preco = produto.preco[0]
        const temPromocao = preco.promocional && preco.promocional < preco.cheio
        listaProdutos.innerHTML += `

        <a href="produto.html?id=${produto.id}" class="link-produto">


            <article class="card-produto">


                ${
                    temPromocao
                    ?
                    `
                    <span class="status promocao">
                        Promoção
                    </span>
                    `
                    :
                    ""
                }



                <div class="image-produto">

                    <img 
                        src="${imagemPrincipal?.caminho ?? './src/assets/imgs/sem-imagem.png'}"
                        alt="${produto.nome}"
                    >

                </div>



                <div class="info-produto">


                    <h3>
                        ${produto.nome}
                    </h3>



                    <div class="avaliacao">

                        ★★★★★

                        <span>
                            (0)
                        </span>

                    </div>



                    ${
                        temPromocao
                        ?
                        `
                        <div class="preco antigo">

                            R$ ${formatarPreco(preco.cheio)}

                        </div>
                        `
                        :
                        ""
                    }



                    <div class="preco">


                        R$ ${
                            formatarPreco(
                                temPromocao 
                                ? preco.promocional 
                                : preco.cheio
                            )
                        }


                    </div>




                    <div class="parcelas">

                        ou 12x sem juros

                    </div>



                    ${temPromocao?
                    `
                        <div class="preco-antigo">

                        R$ ${formatarPreco(preco.cheio)}

                        </div>
                    `
                    :
                    ""
                    }


                    <div class="preco-atual">

                    R$ ${
                    formatarPreco(
                    temPromocao 
                    ? preco.promocional 
                    : preco.cheio
                    )
                    }

                    </div>




                    <button>

                        <i class="fa-solid fa-cart-shopping"></i>

                        Comprar

                    </button>



                </div>


            </article>


        </a>
        `
    });
}

// ---------------------------
// Formatação de preço
// ---------------------------

function formatarPreco(valor){

    return Number(valor).toLocaleString(
        "pt-BR",
        {
            minimumFractionDigits:2,
            maximumFractionDigits:2
        }
    );

}

// ---------------------------
// Cálculo de desconto
// ---------------------------

function calcularDesconto(valorCheio, valorPromocional){


    const desconto = 
        (
            (valorCheio - valorPromocional)
            /
            valorCheio
        )
        *
        100;


    return Math.round(desconto);

}
