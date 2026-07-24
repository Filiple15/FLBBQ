/* ---------------------------
    conexão com API NodeJS
--------------------------- */

import {API} from '../config/api.js'

export async function buscarCategoria(id){
    const res = await fetch(`${API.URL}/categoria/${id}`)
    if (res !== 200){
        console.log(`Status: ${res.status}`)
        // throw new Error ('URL invalida !')
    }
    const categoria = await res.json()
    return (categoria)
}
