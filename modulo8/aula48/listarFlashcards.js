
const {flashcards}= require ('../data')

function listarFlashcards (req, res) {
  res.status(200).flashcards.send (flashcards)
}
module.exports= listarFlashcards
