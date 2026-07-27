/* ------------------
    API da ViaCEP
------------------ */
const URL = "https://viacep.com.br/ws";

let ultimoCEP = "";

export async function buscarCEP(cep) {

    try {

        const res = await fetch(`${URL}/${cep}/json/`);

        if (!res.ok) {
            throw new Error("Erro ao conectar com a API.");
        }

        const dados = await res.json();

        if (dados.erro) {
            console.warn("CEP não encontrado.");
            return null;
        }

        console.log(dados);

        return dados;

    } catch (erro) {

        console.error("Erro:", erro);
        return null;

    }

}

/* ------------------
    Formata o CEP
------------------ */

function formatarCEP(valor) {

    return valor
        .replace(/\D/g, "")
        .slice(0, 8);

}

export function iniciarCEP() {

    const inputCEP = document.getElementById("btnCep");
    const formCEP = document.getElementById("formCEP");

    if (!inputCEP) return;

    if (formCEP) {
        formCEP.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    }

    inputCEP.addEventListener("input", async (event) => {

        const cep = formatarCEP(event.target.value);

        event.target.value = cep;

        if (cep.length !== 8) return;

        if (cep === ultimoCEP) return;

        ultimoCEP = cep;

        const endereco = await buscarCEP(cep);

        if (!endereco) return;

        console.log(endereco);
        alert('Aperte F12 para ver suas informaçoes')

    });

}