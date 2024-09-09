let {filmes}= require ('./index')

const listarFilme= (req,res)=> {
    res.status(200).filmes.send(filmes)
}
module.exports= {listarFilme}