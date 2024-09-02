const {flashcards}= require ('../data')

function criarFlashcards (req,res) {
 console.log (req.body)
 const flashcard= {
  id: flashcards.length +1, 
  nome: req.body.nome
 }
flashcards.push (flashcard)
res.status(201).send ({mensagem: 'flashcard criado com sucesso!', flashcard:flashcard})
}
module.exports= criarFlashcards