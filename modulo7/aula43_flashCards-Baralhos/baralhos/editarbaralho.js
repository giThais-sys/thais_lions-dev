let {baralhos}= require ('../index')
function editarBaralho(entrada, novoBaralho){
    index = baralhos.findIndex (baralho => baralho.id===entrada)
    let jaExisteUmBaralhoComEsseTitulo = baralhos.find(baralho=> baralho.id === id)
    if (jaExisteUmBaralhoComEsseTitulo) {
        console.log('ja existe um baralho com esse titulo')
        baralhos[index-1] = novoBaralho

    }else {
        baralhos[index-1] = novoBaralho
        console.log('baralho editado com sucesso!')
        
    }
    baralhos[index-1] = novoBaralho
}
module.exports= editarBaralho