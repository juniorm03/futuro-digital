import React, { useState } from 'react';

const ListaTarefas = () => {
    const [tarefas, inserirTarefas] = useState([
        "Estudar React",
        "Ler documentação"
    ]);
    
    const adicionarTarefa = () => {
        inserirTarefas([...tarefas, "Nova tarefa"]);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>

            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        </div>
    );
};

export default ListaTarefas;