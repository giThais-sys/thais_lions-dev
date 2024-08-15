let {flashcards}= require ('../app.js')
function editarFlashCards(index, flashcards, id, pergunta, resposta, idBaralho){
    let index= flashcards.FindIndex (flashcard => flashcard.id===id)
    let jaExisteUmIdParaEsseFlashCard= flashcard.find(flashcard=> flashcard.id===id)
   if (jaExisteUmIdParaEsseFlashCard) {
   throw new error ('ja existe um id para esse flashcard')
   }else {
       flashcards[index] = {id: id, pergunta:pergunta, resposta:resposta, idBaralho:idBaralho}
       console.log('flashcard editado com sucesso!')
}

}
module.exports= editarFlashCards