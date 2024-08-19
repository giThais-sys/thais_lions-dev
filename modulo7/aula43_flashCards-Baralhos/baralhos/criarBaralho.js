let {baralhos}= require ('../index')
function criarBaralho(id,titulo, baralho ){
baralhos.id = baralhos.length +1
baralho= ({id, titulo})
baralhos.push(baralho)
console.log ('baralho criado com sucesso!')
            
}
module.exports= criarBaralho


