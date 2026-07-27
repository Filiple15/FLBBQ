/* ---------------------------
    conexão com API NodeJS
--------------------------- */

import {API} from '../config/api.js'
import {formatarCategoria} from '../utils/categoria.utils.js'

export async function buscarCategoria(id){
    const res = await fetch(`${API.url}/categoria/${id}`)
    if (res !== 200){
        console.log(`Status: ${res.status}`)
        // throw new Error ('URL invalida !')
    }
    const categoria = await res.json()
    return (categoria)
}

export async function listarCategorias() {
    try{
        const res = await fetch (`${API.url}/categoria`)
        if (res.status === 200){
            const categoria = await res.json()

            return categoria.objects.map(formatarCategoria)
            
        }
    }
    catch{

        
        console.log(`A requisição as categorias do servidor deram erro. Status atual 404`)
        // window.location.href = '../../../../404.html'
        
    }
}
