// auth.service.js

export async function segundaEtapa(email, senha) {

    const resposta = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            senha
        })
    });

    return await resposta.json();
}