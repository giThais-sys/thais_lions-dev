const prompt =require ('prompt-sync') ()
const adicionarResidencia= require('./adicionar')
const listarResidencia= require('./listar')
const editarResidencia= require('./editar')
const removerResidencia= require('./remover')
const residencias= require('./residencias')


exibirMenu()

function exibirMenu() {
  console.log (`
  
  Menu:

  1. adicionar residencia
  2. listar residencia
  3. editar residencia
  4. remover residencia
  5. sair

  `)

}
  
const opcao = prompt ('digite sua opcao:')
let index
  switch(opcao) {
   case '1':
    const bairro= prompt ('digite o bairro a ser cadastrado:')
    const rua= prompt ('digite a rua a ser cadastrada:')
    const numero= prompt ('digite o numero a ser cadastrado:')
    const moradores= prompt ('digite os moradores a serem cadastrados:')
    console.log('residencia cadastrada com sucesso!')
    exibirMenu()
    break
    
   case '2':
    listarResidencia()
    exibirMenu()
    break
  
   case '3':
    editarResidencia()
    index= parseInt(prompt('digite a nova residencia a ser cadastrada:'))-1
    const novoBairro = prompt ('digite o novo bairro a ser cadastrado:')
    const novaRua= prompt ('digite a nova rua a ser cadastrada:')
    const novoNumero= prompt ('digite o novo numero a ser cadastrado:')
    const novosMoradores= prompt ('digite os novos moradores a serem cadastrados:')
    console.log('residencia editada com sucesso!')
    exibirMenu()
    break
    
   case '4':
    index= parseInt(prompt('digite a residencia a ser deletada:'))-1
    removerResidencia(index)
    console.log('residencia deletada com sucesso!')
    exibirMenu()
    break
    
   case '5':
    break

   default:
    console.log('opcao invalida, tentar novamente') 
    exibirMenu()

  }

