import React, { useState } from "react";

const BuscaProdutos = () => {
    const produtosIniciais = [
        {id: 1, nome: "Brahma", preco: 5},
        {id: 2, nome: "Skol", preco: 5},
        {id: 3, nome: "Original", preco: 5},
        {id: 4, nome: "Petra", preco: 6},
        {id: 5, nome: "Corona", preco: 6},
        {id: 6, nome: "Heineken", preco: 7},
        {id: 7, nome: "Budweiser", preco: 7},
    ];

    const [produtos] = useState(produtosIniciais);
    const [pesquisa, alterarPesquisa] = useState("");

    const filtroProdutos = produtos.filter(produto => {
        const produtoMinusculo = produto.nome.toLowerCase();
        const pesquisaMinuscula = pesquisa.toLowerCase();

        return produtoMinusculo.includes(pesquisaMinuscula);
    });

    return (
        <div style={{padding: '20px'}}>
            <h1>Produtos disponíveis</h1>

            <input
                type="text"
                placeholder="Pesquisar..."
                value={pesquisa}
                onChange={(e) => {
                    alterarPesquisa(e.target.value);
                }}
                style={{
                    padding: '10px',
                    width: '300px',
                    marginBottom: '20px',
                    fontSize: '16px'
                }}
            />

            <ul style={{listStyle: 'none', padding: 0}}>
                {filtroProdutos.length > 0 ? (
                    filtroProdutos.map((produto) => (
                        <li
                            key={produto.id}
                            style={{
                                padding: '10px',
                                margin: '5px 0',
                                backgroundColor: '#423939FF',
                                borderRadius: '5px'
                            }}
                        >
                            {produto.nome}
                        </li>
                    ))
                ) : (
                    <p style={{color: '#666', fontStyle: 'italic'}}>
                        Nenhum resultado para "{pesquisa}"
                    </p>
                )}
            </ul>


            <p>
                Mostrando {filtroProdutos.length} de {produtos.length} produtos.
            </p>
        </div>
    );
};

export default BuscaProdutos;