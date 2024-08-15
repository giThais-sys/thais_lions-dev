let usuarios= require ('./usuarios')
function removerUsuarios(index) {

    index = usuarios.findIndex(vetor => vetor.id == index)

usuarios.splice(index, 1) 
console.log('usuario deletado com sucesso!')

}
module.exports= removerUsuarios













