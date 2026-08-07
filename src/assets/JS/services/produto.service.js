import { API } from '../config/api.js'

export async function listarProdutos(){

    const cache = sessionStorage.getItem("produtos");

    if(cache){

        return JSON.parse(cache);

    }

    try{

        const res = await fetch(`${API.url}/produto`);

        if(!res.ok){

            throw new Error(res.status);

        }

        const produtos = await res.json();

        sessionStorage.setItem(
            "produtos",
            JSON.stringify(produtos)
        );

        return produtos;

    }catch(error){

        console.log(error);

        return [];

    }

}

export async function buscarID(id){
    let produtos;
    const cache = sessionStorage.getItem(CACHE)
    if (cache){
        produtos = JSON.parse(cache)
    }
    else{
        produtos = await listarProdutos()
    }

    const produto = produtos.find(
        produto => produto.id === Number(id)
    )

    if (produto){
        return produto
    }

    // Produto não encontrado no cache
    // força consulta na API

    sessionStorage.removeItem(CACHE)

    produtos = await listarProdutos()
    return produtos.find(
        produto => produto.id === Number(id)
    )
}