import {segundaEtapa} from '../services/auth.service.js'

const btnEntrar = document.getElementById("acessar");
btnEntrar.addEventListener("click", entrar);
console.log(`TELA DE LOGIN`)

async function entrar(){

    let senha = document.getElementById("root-senha").value.trim();
    let email = document.getElementById("root-email").value.trim();

    let verificacaoEmail = false
    let verificacaoSenha = false

    if(email !== ""){

        const caracteresEmail = email.indexOf("@");
        const pontuacao = email.lastIndexOf(".");

        let arroba = email.includes("@");
        let ponto = pontuacao > caracteresEmail;
        let valido = caracteresEmail >= 3;

        if(!arroba || !ponto || !valido){

            alert("Preencha um e-mail válido.");

        }else{

            verificacaoEmail = true

        }

    }
    else{
        alert("Preencha o campo de e-mail.");
    }
    if (senha.length >=  6){
        const especial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/;
        const numero = /\d/;

        var caracteresSenha = especial.test(senha)
        var numerico = numero.test(senha)

        if(!caracteresSenha || !numerico){
            alert('Preencha uma senha válida.')
        }
        else{
            verificacaoSenha = true
        }

        
    }
    else{
        alert(`A senha deve possuir pelo menos 6 caracteres`)
    }

     if(verificacaoEmail && verificacaoSenha){
        try{
            alert(`VAMOOOOO`)
            const usuario = await segundaEtapa(email, senha)
            console.log(usuario)
        }
        catch (erro){
            console.log(erro)
            alert(`Erro na requisição para Login`)
        }
    }

}