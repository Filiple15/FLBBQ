import { carregarHeader } from "./header/header.js";
import { carregarFooter } from "./footer/footer.js";
import { iniciarCEP } from "./CEP/script.js";

export async function carregarComponentes(){

    await carregarHeader();

    await carregarFooter();

    await iniciarCEP();

}