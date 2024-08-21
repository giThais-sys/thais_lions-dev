const prompt = require('prompt-sync')()
const processarRequisicao = require('./servidor')

exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:
    1. adicionar
    2. listar
    3. atualizar
    4. remover
    5. sair
    `)

    let nome,telefone,email,index
    let opcao = prompt('escolha uma opção: ')

    switch(opcao){
        case '1':
            nome = prompt ('digite o seu nome: ')
            email = prompt('digite o seu email: ')
            telefone = prompt('digite o seu número: ')
            processarRequisicao({acao: 'adicionar',objeto: {ID:0,nome,email,telefone}})
            exibirMenu()
        break
        case '2':
            processarRequisicao({acao: 'listar'})
            exibirMenu()
        break
        case '3':
            processarRequisicao({acao: 'listar'})
            index = parseInt(prompt('digite o id do usuario que deseja atualizar: '))
            nome = prompt ('digite o seu nome: ')
            email = prompt('digite o seu email: ')
            telefone = prompt('digite o seu número: ')
            console.log(processarRequisicao({acao: 'editar', objeto : {ID: index,nome,email,telefone}}))
            exibirMenu()
        break
        case '4':
            processarRequisicao({acao: 'listar'})
            index = prompt('digite o id do usuario que deseja remover:  ')
            console.log(processarRequisicao({acao:'remover',objeto:{ID: index}}))
            exibirMenu()
        break
        case '5':
            console.log('saindo...')
        break
        default:
            console.log('opção inválida!')
            exibirMenu()
        break
    }
}

