let {filmes}= require ('./index')
 
const deletarFilme=(req,res)=>{
const {id}= filme.findIndex(filme.id===id)
    
if(index==-1){
    console.log(res.status(404).send({mensagem:'filme nao encontrado!'}))
}
const filmeExcluido= filmes.splice(index, 1)[0]
filmes.forEach(filme, index =>{
    if(filme.id===id){
        filmes.splice(index, 1)
    }
})
res.status(200).send({mensagem:'filme deletado com sucesso!', filme: filmeExcluido })
}
module.exports= {deletarFilme}