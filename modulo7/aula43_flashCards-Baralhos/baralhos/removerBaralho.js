let {baralhos}= require ('../app.js')
function removerBaralho(index){
index= baralhos.findIndex(baralho=> baralho.id===index)
baralhos.splice(index, 1)
console.log('baralho deletado com sucesso!')
}
module.exports= removerBaralho