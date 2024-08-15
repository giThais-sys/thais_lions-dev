const prompt= require ('prompt-sync') ()
const adicionarUsuarios= require ('./adicionarUsuarios')
const usuarios= require ('./usuarios')
const listarUsuarios= require ('./listarUsuarios')
const editarUsuarios= require ('./editarUsuarios')
const removerUsuarios= require ('./removerUsuarios')


exibirMenu()

function exibirMenu() {
  console.log(`
  Menu:
  1. adicionar usuario
  2. listar usuario
  3. editar usuario
  4. remover usuario
  5. sair
  `)

const opcao= prompt ('digite a sua opcao:') 

let index
  switch (opcao) {
   case '1':
  const nome = prompt ('digite o nome a ser cadastrado:')
  let telefones=[]
  let telefone;
  while ((telefone= prompt('telefone(caso desejar adicionar apenas um, deixar em branco)'))){
    telefones.push(telefone)
  }
   const email= prompt ('digite o email a ser cadastrado:')
   adicionarUsuarios({nome, telefones, email})
   console.log('usuario cadastrado com sucesso!')
  
    exibirMenu()
    break

   case '2':
    listarUsuarios() 
    exibirMenu()
    break

   case '3':
    listarUsuarios()
    index= parseInt(prompt('digite o usuario a ser removido:'))
  const novoNome = prompt ('digite o novo nome a ser cadastrado:')
  const novoEmail= prompt ('digite a novo email a ser cadastrado:')
  const novoTelefone= prompt ('digite o novo telefone a ser cadastrado:')
    editarUsuarios(index,usuarios,novoNome, novoEmail, novoTelefone)
    exibirMenu()
    break
    
   case '4':
    listarUsuarios()
    index= parseInt(prompt('digite o usuario a ser removido:'))
    removerUsuarios(index)
    exibirMenu()
    break    

   case '5': 
    console.log('encerrando o programa')
    break

   default:
    console.log('usuario invalido')
    exibirMenu()
}
}
 