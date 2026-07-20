export const btnComprar = document.querySelector(".btnCompra");
export const btnCarrinho = document.querySelector(".btnCarrinho");

addEventListener.btnCompra("click", iniciarBotoes())

// =====================================
// INICIALIZAÇÃO
// =====================================

export function iniciarProduto() {

    console.log("Página Produto carregada.");

    carregarImagem();
    iniciarGaleria();
    iniciarBotoes();
    iniciarTermos();
    iniciarFrete();

}

// =====================================
// IMAGEM PRINCIPAL
// =====================================

function carregarImagem() {

    console.log("Imagem carregada.");

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

function iniciarBotoes() {

    

    if (btnComprar) {

        btnComprar.addEventListener("click", () => {

            alert("Comprar clicado.");

        });

    }

    if (btnCarrinho) {

        btnCarrinho.addEventListener("click", () => {

            alert("Adicionar ao carrinho.");

        });

    }

}

// =====================================
// TERMOS
// =====================================

function iniciarTermos() {

    const checkbox = document.getElementById("termos");
    const btnCompra = document.querySelector(".btnCompra");

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

