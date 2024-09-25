const mongoose= require ('mongoose')
const eventosSchema= new mongoose.Schema({
    nomeEvento: {type: String, required: true},
    Artista:{type: String, required: true},
    Data:{type: String, required: true},
    Horário:{type: String, required: true}
})

const Eventos= mongoose.model('Eventos', eventosSchema)
module.exports= Eventos