let {baralhos}= require ('../index')
function listarBaralho (){
baralhos.forEach (baralhos=>{
console.log (`titulo:${baralhos.titulo}, id: ${baralhos.id}`)
    
})

}
module.exports= listarBaralho