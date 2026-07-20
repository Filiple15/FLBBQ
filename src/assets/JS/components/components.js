import { carregarHeader } from "../../../components/header/header.js";
import { carregarFooter } from "../../../components/footer/footer.js";

export async function carregarComponentes(){

    await carregarHeader();

    await carregarFooter();

}