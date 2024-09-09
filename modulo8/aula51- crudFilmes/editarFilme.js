let {filmes}= require ('./index')

const editarFilme= (req,res)=>{
const {id}=req.params
const novoTitulo= req.body.titulo  
const novoDiretor= req.body.diretor  
const novoGenero= req.body.genero
const novoAno= req.body.ano

const filmes= filmes.find (filme.id===id)
if (filmes!= titulo) {
    console.log (res.status(404).send({mensagem: 'filme nao encontrado!'}))
}
filmes.titulo= novoTitulo, novoDiretor, novoGenero, novoAno
 res.status(200).send ({mensagem:'filme editado com sucesso!', filme:filmes})
}
module.exports= {editarFilme}