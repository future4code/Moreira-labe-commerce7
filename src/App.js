import React from 'react';
import "./App.css"
import Header from './components/Cabecalho/Cabecalho'
import Produtos from './components/DadosProdutos/Produtos';






export default class App extends React.Component {


  state={ 

    query:"" 
  
  }

  updateQuery = (event) => {

    this.setState({

      query: event.target.value

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
                  placeholder='Pesquisa por nome'
                  value={this.state.query}
                  onChange={this.updateQuery}
                />

                <p className='posicao-input'>FILTRAR POR PREÇO</p>
                <input 
                  placeholder='Preço mínimo'
                />
                <input 
                  className='posicao-input' placeholder='Preço máximo'
                />
            </div>
          </nav>
          <div className='nossos-produtos'>
            <Produtos/>
          </div>
            <nav>
              asdasdas
            </nav>
        </main>
      </div>
  )};
}

