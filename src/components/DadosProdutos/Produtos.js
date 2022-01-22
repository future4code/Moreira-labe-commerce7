import React from 'react';
import styled from 'styled-components';
import CatalogoProdutos from '../CatalogoProdutos/CatalogoProdutos';
import Camiseta from '../imagens/camiseta.png'

const MostragemProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 5px;
    gap: 60px;
    cursor: pointer;
`

export default class Produtos extends React.Component {
  
    state = {
        
        catalogo: [
            
            {
                id: Date.now(),
                fotoProduto: (Camiseta),
                nomeProduto: "Camiseta Asteroid",
                descricaoProduto: "EDIÇÃO PREMIUM - SEJA UM ASTEROIDE ",
                valorProduto: 69.99,
                adicionarProduto: "Adicionar ao carrinho"
        
            },

            {
                id: Date.now() + 1,
                fotoProduto: (Camiseta),
                nomeProduto: "Regata Teste",
                descricaoProduto: "EDIÇÃO PREMIUM - SEJA UM ASTEROIDE ",
                valorProduto: 19.99,
                adicionarProduto: "Adicionar ao carrinho"
        
            },

            {
                id: Date.now() + 2,
                fotoProduto: (Camiseta),
                nomeProduto: "Camisa Outra",
                descricaoProduto: "EDIÇÃO PREMIUM - SEJA UM ASTEROIDE ",
                valorProduto: 35.99,
                adicionarProduto: "Adicionar ao carrinho"
        
            },
            
        ],

        query: "",
    }
 
    render(){
    
    return (
        <MostragemProdutos>
            {this.state.catalogo.map(produto => {

            return <CatalogoProdutos key={produto.id} produto={produto} />
            })} 
        </MostragemProdutos>   

    )}
}
