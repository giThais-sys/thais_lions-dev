
const {flashcards}= require('../data')

function editarFlashcards (req,res) {
const {id}=req.params
const novoTitulo= req.body.titulo
const flashcard = flashcards.find (flashcard.id===id)
if (flashcard!= titulo) {
    console.log(res.status(404).send({mensagem: 'flashcard nao encontrado!'}))
}
baralho.titulo= novoTitulo
res.status(200).send({mensagem:'flashcard editado com sucesso!', flashcard:flashcard})
}
module.exports= editarFlashcards