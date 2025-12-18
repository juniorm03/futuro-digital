import React, { useState } from 'react';

const Contador = () => {
    //Bloco que cria contador e forma de somar e subtrair
    const [contador, alterarContador] = useState(0);

    const somar = () => {
        alterarContador(contador + 1);
    };

    const subtrair = () => {
        if (contador > 0) {
            alterarContador(contador - 1);
        }
    };

    return (
        <div>
            <h1>Altere os valores!</h1>

            <p>Valor atual: {contador}</p>

            <button onClick={subtrair}>
                <h2>-</h2>
            </button><br />

            <button onClick={somar}>
                <h2>+</h2>
            </button>
        </div>
    );
};

export default Contador;