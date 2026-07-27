export async function iniciarTema() {

    const toggleTema = document.getElementById("toggleTema");

    if (!toggleTema) return;

    const body = document.body;
    const logos = document.querySelectorAll(".logoTema");

    const logoEscuro = "./src/assets/imgs/logos/logo-escuro.png";
    const logoClaro = "./src/assets/imgs/logos/logo-claro.png";

    // Função responsável por trocar a logo
    function atualizarLogo() {

    const caminho = body.classList.contains("tema-claro")
        ? logoClaro
        : logoEscuro;

    logos.forEach(logo => {
        logo.src = caminho;
    });

}

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "claro") {
        body.classList.add("tema-claro");
        toggleTema.checked = true;
    }

    atualizarLogo(); // Define a logo ao carregar a página

    toggleTema.addEventListener("change", () => {

        if (toggleTema.checked) {

            body.classList.add("tema-claro");
            localStorage.setItem("tema", "claro");

        } else {

            body.classList.remove("tema-claro");
            localStorage.setItem("tema", "escuro");

        }

        atualizarLogo(); // Atualiza a logo após trocar o tema

    });

}