const routes = require('next-routes');

module.exports = routes()
    .add('/', 'index')
    .add('/sobre', 'sobre')
    .add('/cadastro', 'cadastro-home')
    .add('/restaurantes/login', 'restaurante/login')
    .add('/restaurantes/cadastro', 'restaurante/cadastro')
    .add('/restaurante/painel', 'restaurante/painel')
    .add('/restaurante/cardapio', 'restaurante/cardapio')
    .add('/restaurante/reservas', 'restaurante/reservas')
    .add('/restaurante/pedidos', 'restaurante/pedidos')
    .add('/restaurante/avaliacao', 'restaurante/avaliacao')
    .add('/restaurantes', 'restaurantes')
    .add('/restaurantes/:id', 'restaurante/detalhe')
    .add('/clientes/login', 'cliente/login')
    .add('/clientes/cadastro', 'cliente/cadastro')