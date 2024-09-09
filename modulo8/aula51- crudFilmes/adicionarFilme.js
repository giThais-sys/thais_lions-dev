let {filmes}= require ('./index')

const adicionarFilme= (req,res)=>{
 console.log(req.body)
 const novoFilme={
 id: filmes.length+1,
 titulo: req.body.titulo,
 diretor:req.body.diretor,
 genero: req.body.genero,
 ano: req.body.ano
 }
 filmes.push(novoFilme)
 res.status(201).send ({mensagem: 'filme adicionado com sucesso!'})
}
module.exports= {adicionarFilme}