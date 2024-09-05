let {estudantes}= require ('./index')

function listarEstudante(req, res) {
  res.status(200).estudantes.send (estudantes)
}
module.exports= listarEstudante