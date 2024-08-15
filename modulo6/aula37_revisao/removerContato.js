const { listarContato } = require("./listarContato")

function removerContato(callback) {
listarContato()
if (global.contato.length == 0) {
    console.log('Não a Contatos a Serem Removidios')
    callback()
} else {
    console.log('Lista de Contatos')
    listarContato()
}
let remover = prompt('Digite o Numero do Contato que Deseja Remover: ')
}
