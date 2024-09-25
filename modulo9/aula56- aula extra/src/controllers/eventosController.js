const Eventos= require ('../models/Eventos')

async function cadastrarEvento(req,res) {
    const {nomeEvento, artista, data, horario}= req.body
    try {
        const novoEvento= new Eventos ({nomeEvento, artista, data, horario})
        const salvarEvento= await novoEvento.save()
        res.status(201).json({
            mensagem: 'evento salvo com sucesso!', evento: salvarEvento})
    }catch (erro) {
        res.status(500).json({
            mensagem:'erro ao cadastrar evento', erro:erro.message})

    }
}

async function listarEvento(req,res){
    try{
    const eventos= await Eventos.find()
    res.status(200).json(eventos)
    }catch(erro){
        res.status(500).json({
            mensagem: 'erro ao buscar eventos', erro:erro.message
        })
    }
}

async function atualizarEvento(req,res){
    const {id}= req. params
    const {nomeEvento, artista, data, horario}= req.body
    try{
        const eventoAtualizado= await Eventos.findByIdAndUpdate(
            id,
            {nomeEvento, artista, data, horario},
            {new: true, runValidators: true}
        )
        if(eventoAtualizado){
            res.status(200).json({
                mensagem:'evento atualizado com sucesso!', evento: eventoAtualizado
            })
        }else{
            res.status(404).json({mensagem: 'evento nao encontrado!'})

        }
    }catch (erro){
        res.status(500).json({
            mensagem:'erro ao cadastrar evento', erro:erro.message
        })
    }
}
async function deletarEvento(req, res){
  const {id}=req.params
  try{
    const eventoDeletado= await Eventos.findByIfdAndDelete(id)
    if (eventoDeletado){
        res.status(200).json({
            mensagem:' evento deletado com sucesso!', evento:eventoDeletado
        })
    }else{
        res.status(404).json({
            mensagem: 'evento nao encontrado!'
        })
    }
  }catch (erro){
    res.status(500).json({
        mensagem: 'erro ao deletar evento', erro: erro.message
    })
  }
}

module.exports= {
    cadastrarEvento,
    listarEvento,
    atualizarEvento,
    deletarEvento,
}