const {baralhos}= require ('../data')

function criarBaralhos (req,res){
 console.log (req.body)
 const baralho= {
  id: baralhos.length +1, 
  nome: req.body.nome
 }
baralhos.push (baralho)
res.status(201).send ({mensagem: 'baralho criado com sucesso!', baralho:baralho})
}
module.exports= criarBaralhos