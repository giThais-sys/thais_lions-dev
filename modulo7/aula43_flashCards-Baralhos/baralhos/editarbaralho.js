let {baralhos}= require ('../app.js')
function editarBaralho(baralhos, id, index){
let index= baralhos.FindIndex (baralho => baralho.id===id)
 let jaExisteUmBaralhoComEsseTitulo= baralhos.find(baralho=> baralho.titulo===titulo)
if (jaExisteUmBaralhoComEsseTitulo) {
throw new error ('ja existe um baralho com esse titulo')
}else {
    baralhos[index] = {id: id, titulo:titulo}
    console.log('baralho editado com sucesso!')
    
}

}
module.exports= editarBaralho