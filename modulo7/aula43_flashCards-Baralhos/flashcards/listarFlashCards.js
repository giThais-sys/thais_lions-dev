let {flashcards}= require ('../app.js')
function listarFlashCard(flashcards){
flashcards.forEach(flashcards=> {
    console.log (`${flashcards.id}, ${flashcards.pergunta},${flashcards.resposta},${flashcards.idBaralho}`)
    
});

}
module.exports= listarFlashCard