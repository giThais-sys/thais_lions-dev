const { listarContato } = require("./listarContato")

function editarContato(callback) {
listarContato()
let numero = ('numero novo que deseja editar')
const index = parseInt(numero) - 1
if (index < 0 || index >= global.contato.length) {
    console.log('Contato Não Encontrado, Por Fvaor, Tente Novamente')
    editarContato()
} else {
let novoUsuario= prompt('digite o novo usuario')
let novoTelefone= prompt('digite o novo telefone')
let novoEmail= prompt ('digite o novo email')
 global.contatos[index]={novoUsuario, novoTelefone, novoEmail}
 console.log('Contato Atualizado com Sucesso')
}
callback()
}
module.exports= {editarContato}
