let {baralhos, flashcards}= require ('./app.js')
function criarBaralho(baralhos, id, titulo, baralho){
baralhos.id = baralhos.length +1
  criarBaralho= ({titulo, id})
  baralhos.push(baralho)
 console.log ('baralho criado com sucesso!')

}
module.exports= criarBaralho


