const logoHeader = document.getElementById("logoHeader");
const logoFooter = document.getElementById("logoFooter");

// Caminhos das logos
const logoClaro = "./src/assets/imgs/logos/logo-claro.png";
const logoEscuro = "./src/assets/imgs/logos/logo-escuro.png";

export function iniciarLogo(caminho){

    if(logoHeader){
        logoHeader.src = caminho;
    }

    if(logoFooter){
        logoFooter.src = caminho;
    }

}