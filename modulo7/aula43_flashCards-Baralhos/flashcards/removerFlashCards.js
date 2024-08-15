let {flashcards}= require ('../app.js')
function removerFlashCards(index, flashcards){
    index= flashcards.findIndex(flashcard=> flashcard.id===index)
    flashcards.splice(index, 1)
    console.log('flashcard deletado com sucesso!')
    }
    module.exports= removerFlashCards






