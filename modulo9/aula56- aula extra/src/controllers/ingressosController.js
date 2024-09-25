const Ingressos= require ('../models/Ingressos')

async function cadastrarIngresso(req,res){
    const {idEvento, nomeUtilizador, idade, tipo}=req.body
    try{
        const novoIngresso= new Ingressos({idEvento, nomeUtilizador,idade, tipo})
        const salvarIngresso= await novoIngresso.save()
        res.status(201).json({
            mensagem:'ingresso cadastrado com sucesso!', ingresso: salvarIngresso
        })
    }catch(erro) {
        res.status(500).json({
            mensagem: 'erro ao cadastrar evento', erro: erro.message
        })
    }
}

async function listarIngresso(req,res){
    try{
        const ingressos= await Ingressos.find()
        res.status(200).json(ingressos)
    }catch (erro) {
        res.status(500).json({
            mensagem: 'erro ao listar ingresso', erro: erro.message
        })
    }
}

async function atualizarIngresso(req,res){
    const {id}= req.params
    const {nome, idade, tipo}=req.body
    try{ 
        const ingressoAtualizado= await Ingressos.findByIdAndUpdate(
            id,
            {idEvento, nomeUtilizador, idade, tipo},
            {new: true, runValidators:true}
        )
        if(ingressoAtualizado) {
            res.status(200).json({
                mensagem: 'ingresso atualizado com sucesso!', ingresso:ingressoAtualizado
            })
        }else{
            res.status(404).json({mensagem: 'ingresso nao encontrado'})
        }
    }catch (erro) {
        res.status(500).json({mensagem:' erro ao atualizar ingresso', erro:erro.message})
    }
}

async function deletarIngresso(req, res){
  const {id}= req. params
  try{
    const ingressoDeletado= await Ingressos.findByIdAndDelete(id)
    if (ingressoDeletado){
        res.status(200).json({
            mensagem: 'ingresso deletado com sucesso!', ingresso: ingressoDeletado
        })
    }else {
        res.status(404).json({mensagem: 'ingresso nao encontrado!'})
    }
  }catch (erro){
    res.status(500).json({mensagem: 'erro ao deletar ingresso!', erro:erro.message})
  }
}

module.exports={
    cadastrarIngresso,
    listarIngresso,
    atualizarIngresso,
    deletarIngresso,
}
