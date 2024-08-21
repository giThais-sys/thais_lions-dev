let {servicos}= require ('./data')
function cadastrarServico(nomeDoServico, preco){
   servicos.push({nomeDoServico, preco, id: servicos.length +1})
}
module.exports= cadastrarServico