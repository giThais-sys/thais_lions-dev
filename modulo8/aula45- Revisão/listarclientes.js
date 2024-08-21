let {clientes}= require ('./data')
function listarClientes(){
    clientes.forEach((cliente)=> {
        console.log(`nome:${cliente.nome} : cpf:${cliente.cpf}, telefone: ${cliente.telefone}, email: ${cliente.email}, id:${cliente.id}`)
          });
}
module.exports= listarClientes