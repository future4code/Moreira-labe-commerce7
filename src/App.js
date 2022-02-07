import React from 'react';
import "./App.css"
import Header from './components/Cabecalho/Cabecalho'
import { produtos } from './components/DadosProdutos/NossosProdutos';
import CatalogoProdutos from './components/CatalogoProdutos/CatalogoProdutos';







export default class App extends React.Component {


  state={ 
    catalogo: produtos,
    query:"",
    precoMin: "",
    precoMax: "",
    parametroSort: "valorProduto"

  
  }

  updateQuery = (event) => {

    this.setState({

      query: event.target.value

    })

  }

  updatePrecoMin = (event) => {

    this.setState({

      precoMin: event.target.value

    })

  }

  updatePrecoMax = (event) => {

    this.setState({

      precoMax: event.target.value

    })

  }
  updateParemetroSort = (event) => {

    this.setState({

      parametroSort: event.target.value

    })

  }

  render() {


    return (
      <div className='pagina'>
        <Header/>
        <main>
          <nav className='campo-filtros'>
            <div className='campo-de-inputs'>
              <div className='filtro'>
                  <p>FAÇA SEU FILTRO</p>
              </div>
                <p className='posicao-input'>FILTRAR POR NOME</p>
                <input
                  type="text" 
                  placeholder='Pesquisa por nome'
                  value={this.state.query}
                  onChange={this.updateQuery}
                />

                <p className='posicao-input'>FILTRAR POR PREÇO</p>
                <input
                  type="number"
                  placeholder='Preço mínimo'
                  value={this.state.precoMin}
                  onChange={this.updatePrecoMin}
                />
                <input
                  type="number"
                  className='posicao-input' placeholder='Preço máximo'
                  value={this.state.precoMax}
                  onChange={this.updatePrecoMax}
                />
            </div>
            <label className='ordenar-itens'> ORDENAR POR:</label> 
                  <select 
                  name='sort'
                  value={this.state.parametroSort}
                  onChange={this.updateParemetroSort}
                  >
                    <option value="menorValor">Menor valor</option>
                    <option value="maiorValor">Maior valor</option>
                  </select>
          </nav>
          <div className='nossos-produtos'>
            {this.state.catalogo
            .filter(produto => {
              return produto.nomeProduto.toLowerCase().includes(this.state.query.toLowerCase()) ||
                produto.descricaoProduto.toLowerCase().includes(this.state.query.toLowerCase())
            })
            .filter(produto => {
              return this.state.precoMin === "" || produto.valorProduto >= this.state.precoMin
            })
            .filter(produto => {
              return this.state.precoMax === "" || produto.valorProduto <= this.state.precoMax
            })
            .sort((produtoAtual,proximoProduto) => {
              switch (this.state.parametroSort) {
                case "menorValor":
                  return produtoAtual.valorProduto - proximoProduto.valorProduto
              
                  case "maiorValor":
                    return proximoProduto.valorProduto - produtoAtual.valorProduto
              }

            })
            .map(produto => {
              return <CatalogoProdutos key={produto.id} produto={produto} />
              })}
          </div>
            <div className='carrinho-de-compras'>
              <p>Espaço reservado - Carrinho:</p>
            </div>
        </main>
      </div>
  )};
}

