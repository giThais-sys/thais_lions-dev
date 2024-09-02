const {baralhos}= require ('../data')

function listarBaralhos (req, res) {
  res.status(200).baralhos.send (baralhos)
}
module.exports= listarBaralhos