let {baralhos}= require ('../app.js')
function criarBaralho(id,baralhos,titulo, baralho ){
baralhos.id = baralhos.length +1
baralhos= ({id, titulo})
baralhos.push(baralho)
console.log ('baralho criado com sucesso!')
            
}
module.exports= criarBaralho


