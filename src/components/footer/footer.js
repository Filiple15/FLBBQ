/*====================================
            FOOTER
====================================*/

export async function carregarFooter(){

    try{

        const resposta = await fetch("./src/components/footer/footer.html");

        if(!resposta.ok){

            throw new Error("Erro ao carregar footer.html");

        }

        const html = await resposta.text();

        document.getElementById("footer").innerHTML = html;

        iniciarFooter();

    }

    catch(erro){

        console.error("Erro ao carregar o Footer:", erro);

    }

}

/*====================================
        INICIAR FOOTER
====================================*/

function iniciarFooter(){

    // Futuras funcionalidades do footer.
    // Exemplo:
    // - Botão "Voltar ao topo"
    // - Newsletter
    // - Redes sociais
    // - Direitos autorais automáticos

    console.log("Footer carregado com sucesso.");

}