function categoria(categoria){
    let cat = categoria.toLowerCase()

    if(cat === "bone"){
        
    }
    else if(cat === "vestuario"){
        
    }
    else if(cat === "termico"){
        
    }
    else if(cat === "cerveja"){
        
    }
    else if(cat === "abridor"){
        
    }
    else if(cat === "mochila"){
        
    }
    else if(cat === "cadeira"){
        
    }
    else if(cat === "terere"){
        
    }
    else if(cat === "todos"){
        
    }
    else{
        console.error("Categoria não encontrada");
        alert('Erro na categoria')
    }
}

// PESQUISA DE PRODUTO
function procurar(){
    let procura = String(document.querySelector(".search-box input").value)
    alert(procura)
}