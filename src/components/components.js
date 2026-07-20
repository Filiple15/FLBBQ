import { carregarHeader } from "./header/header.js";
import { carregarFooter } from "./footer/footer.js";

export async function carregarComponentes(){

    await carregarHeader();

    await carregarFooter();

}