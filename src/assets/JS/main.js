/* ------------------------------------
    JavaScript principal do projeto
------------------------------------ */

import { carregarComponentes } from "./components/components.js";
import { iniciarTema } from "./components/btnTema.js";
import { iniciarLogo } from "./components/logo.js";

import "./banner/script.js";

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