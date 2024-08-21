const prompt= require ('prompt-sync') ()
const cadastrarCliente= require ('./cadastrarCliente')
const cadastrarServico= require ('./cadastrarServico')
const agendarServico= require ('./agendarServico')
const listarClientes= require ('./listarClientes')
const listarAgendamentos= require ('./listarAgendamentos')
const atualizarAgendamento= require ('./atualizarAgendamento')
const removerCliente= require ('./removerCliente')
const removerServico= require ('./removerServico')
const removerAgendamento= require ('./removerAgendamento')

exibirMenu()

function exibirMenu() {
   console.log (`
   Menu:
   1. cadastrar cliente
   2. cadastrar servico
   3. agendar servico
   4. listar clientes
   5. listar agendamentos
   6. atualizar agendamento
   7. remover cliente
   8. remover servico
   9. remover agendamento
   10. sair
   `)

let opcao= prompt ('digite o comando:')
let id
switch (opcao) {
   case '1':
        let nome= prompt ('digite o nome do cliente a ser cadastrado:')
        let cpf= prompt ('digite o cpf do cliente cadastrado:')
        let telefone= prompt ('digite o telefone do cliente cadastrado:')
        let email= prompt ('digite o email do cliente cadastrado:')
        cadastrarCliente(nome, cpf, telefone,email)
        console.log('cliente cadastrado com sucesso!')
    
    exibirMenu()
    break

   case '2':
   let nomeDoServico= prompt ('digite o nome do servico a ser cadastrado:')
   let preco= prompt ('digite o preco do servico cadastrado:')
   servicos.push({nomeDoServico, preco})
   console.log('servico cadastrado com sucesso!')
   exibirMenu()
   break

  case '3':
   let data=prompt ('digite a data do servico:')
   let horario= prompt ('digite o horario do servico')
   let idCliente= prompt ('digite o id do cliente cadastrado:')
   let idServico= prompt ('digite o id do servico cadastrado:')
   servicos.push({data, horario, idCliente, idServico})
   console.log('servico agendado com sucesso!')
   exibirMenu()
   break

  case '4':
    listarClientes()
    exibirMenu() 
    break

   case '5':
    listarAgendamentos() 
    exibirMenu()
    break

   case '6':
    listarAgendamentos()
    id= parseInt(prompt('digite o id do elemento a ser editado:')) 
    let novaData= prompt ('digite a nova data:')
    let novoHorario= prompt ('digite o novo horario:')
    let novoServico= prompt ('digite o id do novo servico:')
    let novoCliente= prompt ('digite o id do novo cliente:')
    
    console.log('agendamento atualizado com sucesso!')
    exibirMenu()
    break

   case '7':
    let deletarCliente= parseInt(prompt('digite o cliente que deseja remover:')) 
    removerCliente(deletarCliente)
    exibirMenu()
    break

   case '8':
    let deletarServico= parseInt(prompt('digite o servico que deseja remover:'))
    removerServico(deletarServico)
    exibirMenu()
    break

  case '9':
    let deletarAgendamento=parseInt(prompt('digite o agendamento que deseja remover:'))
    removerAgendamento(deletarAgendamento)
    exibirMenu()
    break

   case '10':
    console.log('obrigada pela preferencia!')
    break

   default:
    console.log('desculpe, nao ha esse tipo de servico aqui.') 
    exibirMenu()
}
 
}