let {flashcards}= require ('../app.js')
function listarFlashCardsPorBaralhoId(procurarPorBaralhos){

let vetorBaralhos= flashcards.filter(flashcard => flashcard.idBaralho == procurarPorBaralhos)

vetorBaralhos.forEach(flashcard=> {
    console.log (`${flashcard.id}, ${flashcard.pergunta},${flashcard.resposta},${flashcard.idBaralho}`)
    
});

    
}
module.exports= listarFlashCardsPorBaralhoId