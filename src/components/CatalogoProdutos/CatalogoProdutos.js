import React from 'react';
import './CatalogoProdutos.css'


export default function CatalogoProdutos(props) {
  
    return (
        <div className='container-produto'>
            <img src={props.produto.fotoProduto}></img>
            <h2 titulo={props.produto.nomeProduto}>{props.produto.nomeProduto}</h2> 
            <p className='descricao' titulo={props.produto.descricaoProduto}>{props.produto.descricaoProduto}</p>
            <p className='valor'>R$ {props.produto.valorProduto}</p>
            <button>{props.produto.adicionarProduto}</button>
        </div>     
)}
