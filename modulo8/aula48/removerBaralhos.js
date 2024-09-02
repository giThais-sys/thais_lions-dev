
const {baralhos}= require('../data')

function removerBaralhos (req, res){
const {id}= req.params
const index= baralhos.findIndex(baralhos.id===id)

if (index=== -1){
    console.log(res.status(404).send({mensagem: 'baralho nao encontrado!'}))
}
const baralhoDeletado= baralhos.splice(index, 1) [0]
flashcards.forEach (flashcard, index =>{
    if (flashcard.baralhoId===id){
        flashcards.splice (index, 1)
    }
}
)
res.status(200).send({mensagem: 'baralho deletado com sucesso!', baralho:baralhoDeletado})
}
module.exports= removerBaralhos