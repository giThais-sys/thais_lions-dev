const mongoose= require ('mongoose')
const ingressosSchema= new mongoose.Schema({
idEvento: {type: String, required: true},
nomeUtilizador: {type: String, required: true},
idade:{type: Number, required: true},
tipo: {type: String, required: true}
})

const Ingressos= mongoose.model('Ingressos', ingressosSchema)
module.exports= Ingressos