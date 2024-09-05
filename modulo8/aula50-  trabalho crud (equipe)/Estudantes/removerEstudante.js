let {estudantes}= require('./index')

const removerEstudante= (req, res)=>{
const {id}= req.params
const index= estudante.findIndex(estudantes.id===id)

if (index=== -1){
    console.log(res.status(404).send({mensagem: 'estudante nao foi encontrado!'}))
}
const estudanteDeletado= estudantes.splice(index, 1) [0]
estudantes.forEach (estudante, index =>{
    if (estudante.id===id){
        estudantes.splice (index, 1)
    }
}
)
res.status(200).send({mensagem: 'estudante foi removido com sucesso!', estudante:estudanteDeletado})
}
module.exports= removerEstudante