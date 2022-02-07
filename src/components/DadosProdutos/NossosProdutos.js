import Camiseta from '../imagens/camiseta.png'
import RoupaEspacial from '../imagens/roupa-espacial.png'
import PedraMeteoro from '../imagens/meteoro-asteroide.png'
import Nave from '../imagens/nave.jpg'
import Brinquedo from '../imagens/brinquedo.jpg'
import ProdutoTematico from '../imagens/produto-tematico.jpg'



export const produtos = [

    {
        id: Date.now(),
        fotoProduto: (Camiseta),
        nomeProduto: "Camiseta Asteroid",
        descricaoProduto: "Edição Premium - Seja um Asteroide",
        valorProduto: 69.99,
        adicionarProduto: "Adicionar ao carrinho"

    },

    {
        id: Date.now() + 2,
        fotoProduto: (RoupaEspacial),
        nomeProduto: "Asteroid Espacial ",
        descricaoProduto: "Traje de cosplay Astronauta da Asteroid ",
        valorProduto: 2199.99,
        adicionarProduto: "Adicionar ao carrinho"
    },

    {
        id: Date.now() + 3,
        fotoProduto: (PedraMeteoro),
        nomeProduto: "Meteorito RBX12",
        descricaoProduto: "Edição única - Item de colecionador ",
        valorProduto: 8499.99,
        adicionarProduto: "Adicionar ao carrinho"

    },

    {
        id: Date.now() + 4,
        fotoProduto: (Nave),
        nomeProduto: "Miniatura Falcon N31xil",
        descricaoProduto: "Item colecionável - Linha Falcon",
        valorProduto: 249.99,
        adicionarProduto: "Adicionar ao carrinho"

    },

    {
        id: Date.now() + 5,
        fotoProduto: (Brinquedo),
        nomeProduto: "Missão Espacial",
        descricaoProduto: "Tecnologia e velocidade, a mais nova geração!",
        valorProduto: 39.99,
        adicionarProduto: "Adicionar ao carrinho"

    },

    {
        id: Date.now() + 6,
        fotoProduto: (ProdutoTematico),
        nomeProduto: "Coleção Completa",
        descricaoProduto: "Livro - Guia dos mochileiros das galáxias",
        valorProduto: 49.99,
        adicionarProduto: "Adicionar ao carrinho"

    },

]

