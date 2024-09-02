
const {flashcards}= require('./data')

function removerFlashcards(req, res){
const {id}= req.params
const index= flashcards.findIndex(flashcards.id===id)

if (index=== -1){
    console.log(res.status(404).send({mensagem: 'flashcard nao encontrado!'}))
}
const flashcardDeletado= flashcards.splice(index, 1) [0]
flashcards.forEach (flashcard, index =>{
    if (flashcard.baralhoId===id){
        flashcards.splice (index, 1)
    }
}
)
res.status(200).send({mensagem: 'flashcard deletado com sucesso!', flashcard:flashcardDeletado})
}
module.exports= deletarFlashcards