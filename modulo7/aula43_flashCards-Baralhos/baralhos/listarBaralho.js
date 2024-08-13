let {baralhos, flashcards}= require ('./app.js')
function listarBaralho (baralhos){
baralhos.foreach (baralhos=>{
console.log (`titulo:${baralhos.titulo}, id: ${baralhos.id}`)
    
})

}
module.exports= listarBaralho