/* ------------------------------------
    JavaScript principal do projeto
------------------------------------ */

import { carregarComponentes } from "../../components/components.js";
import { iniciarTema } from "../../components/btnTema/btnTema.js";
import { iniciarLogo } from "../../components/logo/logo.js";
import { iniciarBanner } from "./banner/script.js";

/* -------------------------
    EXPORTADO OS SERVICES
------------------------- */

import {listarCategorias} from "../JS/services/categoria.service.js"
import { renderizarCategoria } from "./categorias/script.js";
import {renderizarFiltroCategorias} from "./categorias/script.js"
import {iniciarProdutos} from "./produto/script.js"

/* ------------------------
    CONSTANTES DO SITE
------------------------ */

        const categorias = await listarCategorias();

/* -------------------
    EVENTS DA PAGINA
------------------- */


// INICIAR SITE
async function iniciarSite(){

    try{

        await carregarComponentes();

        iniciarTema();

        iniciarLogo();

        iniciarBanner();

        renderizarCategoria(categorias)
        renderizarFiltroCategorias(categorias);

        console.log("Site iniciado com sucesso.");

        iniciarProdutos()

    }

    catch(erro){

        console.error("Erro ao iniciar o site:", erro);

    }

}

function carregarPagina(){

    const pagina = window.location.pathname;

    console.log(pagina);

}

/* ----------------- */
    iniciarSite();   // INICIANDO SITE FL
/* ----------------- */