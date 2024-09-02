
const {baralhos}= require('../data')

function editarBaralhos(req,res) {
const {id}=req.params
const novoTitulo= req.body.titulo
const baralho= baralhos.find (baralho.id===id)
if (baralho!= titulo) {
    console.log(res.status(404).send({mensagem: 'baralho nao encontrado!'}))
}
baralho.titulo= novoTitulo
res.status(200).send({mensagem:'baralho editado com sucesso!', baralho:baralho})
}
module.exports= editarBaralhos