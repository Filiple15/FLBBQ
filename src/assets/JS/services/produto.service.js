import { API } from '../config/api.js'


export async function listarProdutos(){

    try {

        const res = await fetch(`${API.url}/produto`)


        if(!res.ok){

            console.log(`Erro API produtos: ${res.status}`)

            return []

        }


        const produtos = await res.json()


        return produtos


    } catch(error){

        console.log(
            "Erro ao buscar produtos:",
            error
        )

        return []

    }

}