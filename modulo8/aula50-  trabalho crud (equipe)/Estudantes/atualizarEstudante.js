let {estudantes}= require('./index')

const atualizarEstudante=(req,res)=> {
const {id}=req.params
const novoNome= req.body.nome
const novaMatricula= req.body.matricula
const novoCurso= req.body.novoCurso
const novoAno= req.body.ano

const estudante= estudantes.find (estudante.id===id)
if (estudante!= nome) {
    console.log(res.status(404).send({mensagem: 'estudante nao foi encontrado!'}))
}
estudante.nome= novoNome,novaMatricula, novoCurso, novoAno
res.status(200).send({mensagem:'estudante foi atualizado com sucesso!', estudante:estudante})
}
module.exports= atualizarEstudante