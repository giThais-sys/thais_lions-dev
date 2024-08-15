const prompt= require ('prompt-sync') ()
const criarBaralho= require ('./baralhos/criarBaralho')
const listarBaralho = require ('./baralhos/listarBaralho')
const editarBaralho= require ('./baralhos/ editarBaralho')
const removerBaralho= require ('./baralhos/removerBaralho')
const criarFlashCard= require ('./flashcards/criarFlashCards')
const listaFlashCard= require ('./flashcards/listarFlashCard')
const listarFlashCardsPorBaralhoId= require ('./flashcards/listarFlashCardsPorBaralhoId')
const findFlashCardIndexById= require ('./flashcards/findFlashCardIndexById')
const buscarFlashCardsPorBaralho= require ('./flashcards/buscarFlashCardsPorBaralho')
const buscarFlashCardsPorPergunta= require ('./flashcards/buscarFlashCardsPorPergunta')
const editarFlashCard= require ('./flashcards/editarFlashCards')
const removerFlashCard= require ('./flashcards/removerFlashCards')
 
exibirMenuBaralhos()
exibirMenuFlashCards()


function exibirMenuBaralhos () {
console.log(`
Menu:

1. criar baralho
2. listar baralho
3. editar baralho
4. remover baralho
5. sair

`)
let menuBaralhos= prompt ('digite a sua escolha:')
switch (menuBaralhos) {
 case '1':
    let titulo= prompt ('digite o titulo do baralho a ser inserido:')
    if (jaExisteUmBaralhoComEsseTitulo) {
    throw new Error('Já existe um baralho com esse título')
    } else { 
        console.log('baralho inserido com sucesso!')
    }
    exibirMenuBaralhos()
    break
 case '2':
    listarBaralho()
    exibirMenuBaralhos()
    break
 case '3':
    editarBaralho()
    listarBaralho()
    index= parseInt(prompt('digite o baralho a ser cadastrado:'))
  const novoId = prompt ('digite o novo id a ser cadastrado:')
  const novoTitulo= prompt ('digite a novo titulo a ser cadastrado:')
    editarBaralho(index, baralho,novoId, novoTitulo)
    exibirMenuBaralhos()
    break
 case '4':
    removerBaralho()        
    listarBaralho()
    index= parseInt(prompt('digite o baralho a ser removido:'))
    removerBaralho(index)
    exibirMenuBaralhos()    
    break
 case '5':
    console.log('saindo do programa...')   
   break
 default:
    console.log('opcao invalida, tentar novamente')  
   exibirMenuBaralhos()


}
}
function exibirMenuFlashCards() {
console.log(`
Menu:

1. criar flashcard
2. listar flashcard
3. listar flashcards por baralho id
4. find flashcard index by id
5. buscar flashcards por baralho
6. buscar flashcards por pergunta
7. editar flashcard
8. remover flashcard
9. sair

`)
let menuFlashCards= prompt ('digite a sua opcao:')
switch (menuFlashCards) {
case '1':
    let id= prompt ('digite o id do flashcard a ser inserido:')
    let pergunta= prompt ('digite a pergunta do flashcard a ser inserida')
    let resposta= prompt ('digite a resposta do flashcard a ser inserida ')
    let idBaralho= prompt ('digite o id do baralho que foi inserido')
if (jaExisteUmFlashCardInserido) {
    throw new Error('Já existe um id para esse flashcard')
    } else { 
        console.log('flashcard inserido com sucesso!')
    }
    exibirMenuFlashCards()
    break
case '2':
    listaFlashCard()
    exibirMenuFlashCards()
    break
case '3':
    listarlashCardsPorBaralhosId()
    exibirMenuFlashCards()
    break
case '4':
    findFlashCardIndexById()
    exibirMenuFlashCards()
    break
case '5':
    buscarFlashCardsPorBaralho()   
    exibirMenuFlashCards() 
    break
case '6':
    buscarFlashCardsPorPergunta()   
    exibirMenuFlashCards() 
    break
case '7':
    editarFlashCard()   
    index= parseInt(prompt('digite o flashcard a ser cadastrado:'))
  const novoId = prompt ('digite o novo id a ser cadastrado:')
  const novaPergunta= prompt ('digite a nova pergunta a ser cadastrada:')
  const novaResposta= prompt ('digite a nova resposta a ser cadastrada')
  const novoIdBaralho= prompt ('digite o novo id para o baralho cadastrado')
  editarflashcards(index, flashcard,novoId, novaPergunta, novaResposta, novoIdBaralho)
  exibirMenuFlashCards() 
    break
case '8':
    removerFlashCard()    
    listarBaralho()
    index= parseInt(prompt('digite o baralho a ser removido:'))
    removerBaralho(index)
    exibirMenuFlashCards()
    break
case '9':
    console.log('saindo do programa...')    
    break
default:
    console.log('opcao invalida, executar novamente')    

}
}
