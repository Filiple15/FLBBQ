/* ------------------------------------
    JavaScript principal do projeto
------------------------------------ */

import { carregarComponentes } from "../../components/components.js";
import { iniciarTema } from "../../components/btnTema/btnTema.js";
import { iniciarLogo } from "../../components/logo/logo.js";
import { iniciarBanner } from "./banner/script.js";


function carregarPagina(){

    const pagina = window.location.pathname;

    console.log(pagina);

}

async function iniciarSite(){

    try{

        await carregarComponentes();

        iniciarTema();

        iniciarLogo();

        console.log("Site iniciado com sucesso.");

    }

    catch(erro){

        console.error("Erro ao iniciar o site:", erro);

    }

}

iniciarSite();
iniciarBanner();