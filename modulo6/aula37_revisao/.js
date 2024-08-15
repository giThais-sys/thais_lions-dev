const prompt = require ('prompt-sync') ()
const{adicionarContato} = require ('./adicionar')
const {listarContato}= require ('./listar')
const {editarContato}= require ('./editar')
const {removerContato}= require ('./remover')

   let contato=[nome, telefone, email]
exibirMenu() 
global.prompt = prompt
global.contato = contato
function exibirMenu(){
    console.log (`
        Menu:
        1. Adicionar contato;
        2. Listar contato;
        3. Editar contato;
        4. Remover contato;
        5. Sair;
    `)


    let menuInicial= parseInt(prompt(' definir uma opcao:'))
  switch (menuInicial){
    case 1:
         adicionarContato(exibirMenu)
        break

    case 2:
        listarContato(prompt, contato, listar)
        exibirMenu()
        break

    case 3:
        editarContato(prompt, contato, editar)
        exibirMenu()

        break

    case 4:
        removerContato(prompt, contato, remover)
        exibirMenu()
        break

    case 5:
        console.log('sair')
        break

    default:
        console.log('opcao invalida')
        break
  }

}


























