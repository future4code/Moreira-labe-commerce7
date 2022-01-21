import React from 'react';
import "./Cabecalho.css"
import Logo from "../imagens/logo.png"
import FaleConosco from "../imagens/fale-conosco.png"
import CarrinhoCompras from "../imagens/carrinho-de-compras.png"
import Contas from "../imagens/conta.png"
import Seta from "../imagens/categoria-produtos.png"




export default function Cabecalho() {
  
  
return( 
  <div className='conteudo-pagina'>
      <header>
        <nav className='estrutura-cabecalho'>
          <ul className='ordenacao'>
            <img className='imagem-logo' src={Logo}/>
            <input className='campo-de-busca' placeholder="Faça sua pesquisa aqui_"/>
            <li className='itens-navegacao-ajuda'>
                <img className='icones' src={FaleConosco} alt="ícone fale conosco"/>
                <p>Precisa de ajuda? Fale Conosco</p>
            </li>
            <li className='itens-navegacao-conta'>
                <img className='icones' src={Contas} alt="ícone Login/Registrar"/>
                <p>Faça seu <span>login</span> ou <span>cadastre-se</span></p>
            </li>
            <li className='itens-navegacao-carrinho'>
                <img className='icones' src={CarrinhoCompras} alt="ícone carrinho de compras"/>
                <p>Carrinho</p>
            </li>
          </ul>
        </nav>
        <nav class="categoria-produtos">
            <a href="#">Camisetas
                <img className='seta-selecao' src={Seta} alt="Seta de seleção na categoria de produtos"/>
            </a>
            <a href="#">Roupas espaciais
                <img className='seta-selecao' src={Seta} alt="Seta de seleção na categoria de produtos"/>
            </a>
            <a href="#">Meteoritos / Asteroides
                <img className='seta-selecao' src={Seta} alt="Seta de seleção na categoria de produtos"/>
            </a>
            <a href="#">Naves / Foguetes
                <img className='seta-selecao' src={Seta} alt="Seta de seleção na categoria de produtos"/>
            </a>
            <a href="#">Brinquedos
                <img className='seta-selecao' src={Seta} alt="Seta de seleção na categoria de produtos"/>
            </a>
            <a href="#">Produtos temáticos
                <img className='seta-selecao' src={Seta} alt="Seta de seleção na categoria de produtos"/>
            </a>
            </nav>
      </header>
    </div>
);}