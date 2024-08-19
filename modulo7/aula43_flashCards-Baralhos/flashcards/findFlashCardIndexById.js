let {flashcards}= require ('../index')
function findFlashCardIndexById(index, flashcards){
    index = flashcards.findIndex (flashcard => flashcard.id===index)
}
module.exports= findFlashCardIndexById