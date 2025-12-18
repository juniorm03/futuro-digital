import React, { useState } from "react";

const Formulario = () => {
    const [nome, inserirNome] = useState("");
    const [email, inserirEmail] = useState("");
    const [senha, inserirSenha] = useState("");

    const enviar = (e) => {
        e.preventDefault();

        if (!nome) return alert("Preencha o nome");
        if (!email.includes("@")) return alert("Preencha o email");
        if (!senha) return alert("Preencha a senha");

        console.log({nome, email, senha});
        alert("Sucesso!");

        inserirNome("");
        inserirEmail("");
        inserirSenha("");
    };

    return (
        <div>
            <h1>Cadastrar:</h1>

            <form onSubmit={enviar}>
                <input 
                    value={nome}
                    onChange={(e) => inserirNome(e.target.value)}
                    placeholder="Nome"
                /><br />

                <input
                    value={email}
                    onChange={(e) => inserirEmail(e.target.value)}
                    placeholder="E-mail"
                /><br />

                <input
                    type="password"
                    value={senha}
                    onChange={(e) => inserirSenha(e.target.value)}
                    placeholder="Senha"
                /><br />

                <button>Cadastrar</button>

            </form>
        </div>
    );
};

export default Formulario;