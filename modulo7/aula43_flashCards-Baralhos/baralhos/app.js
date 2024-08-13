const prompt= require ('prompt-sync') ()
const criarBaralho= require ('./baralhos/criarBaralho')
const listarBaralho = require ('./baralhos/listarBaralho')
const editarBaralho= require ('./baralhos/ editarBaralho')
const removerBaralho= require ('./baralhos/removerBaralho')
const criarFlashCard= require ('./flashcards/criarFlashCard')
const listaFlashCard= require ('./flashcards/listarFlashCard')
const listarFlashCardsPorBaralhoId= require ('./flashcards/listarFlashCardsPorBaralhoId')
const findFlashCardIndexById= require ('./flashcards/findFlashCardIndexById')
const buscarFlashCardsPorBaralho= require ('./flashcards/buscarFlashCardsPorBaralho')
const buscarFlashCardsPorPergunta= require ('./flashcards/buscarFlashCardsPorPergunta')
const editarFlashCard= require ('./flashcards/editarFlashCards')
const removerFlashCard= require ('./flashcards/removerFlashCards')
let {baralhos, flashcards}= require ('./app.js')
 
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
    break
 case '2':
    listarBaralho()
    exibirMenuBaralhos()
    break
 case '3':
    editarBaralho()
    break
 case '4':
    removerBaralho()            
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
    criarFlashcard()
    break
case '2':
    listaFlashCard()
    break
case '3':
    listarlashCardsPorBaralhosId()
    break
case '4':
    findFlashCardIndexById()
    break
case '5':
    buscarFlashCardsPorBaralho()    
    break
case '6':
    buscarFlashCardsPorPergunta()    
    break
case '7':
    editarFlashCard()    
    break
case '8':
    removerFlashCard()    
    break
case '9':
    console.log('saindo do programa...')    
    break
default:
    console.log('opcao invalida, executar novamente')    

}
}
