export function formatarCategoria(categoria){
    const newCategoria = {... categoria}
    const regex = /##(.*?)##/ //PROCURANDO O LINK

    const link = newCategoria.descricao.match(regex)

    if (link){
        newCategoria.image = link[1];
        newCategoria.descricao = newCategoria.descricao.replace(regex, "").trim()
    }
    else{
        newCategoria.image = null
    }

    return newCategoria

}