const {baralhos, flashcards}= require ('../data')

const criarBaralhos= require ('./criarBaralhos')
const listarBaralhos= require ('./listarBaralhos')
const editarBaralhos= require ('./editarBaralhos')
const removerBaralhos= require ('./removerBaralhos')
const criarFlashcards= require ('./criarFlashcards')
const listarFlashcards= require ('./listarFlashcards')
const editarFlashcards= require ('./editarFlashcards')
const removerFlashcards= require ('./removerFlashcards')
module.exports= {baralhos, flashcards}

const express = require('express')()
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
res.send('Servidor Express está funcionando!');
});
app.post ('/baralhos/criarBaralhos')
app.get ('/baralhos/listarBaralhos')
app.put ('/baralhos/:id', editarBaralhos)
app. delete ('/baralhos/:id', removerBaralhos)

app.post ('/flashcards/criarFlashcards')
app.get ('/flashcards/listarFlashcards')
app.put ('/flashcards/:id', editarFlashcards)
app.delete ('/flashcards/ :id', removerFlashcards)


app.listen(port, () => {
console.log(`example app listening on port ${port}`);
});