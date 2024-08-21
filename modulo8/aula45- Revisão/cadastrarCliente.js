let {clientes} = require ('./data')
function cadastrarCliente(nome, cpf, telefone,email){
    clientes.push ({nome, cpf, telefone, email, id: clientes.length+1})
}
module.exports= cadastrarCliente