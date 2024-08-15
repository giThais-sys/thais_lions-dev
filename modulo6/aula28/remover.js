function remover(musica, rl, callback){
    if(musica.length == 0){
    console.log('Nada registrado.')
    exibirMenu()
    }else{
    console.log('Lista de músicas')
    musica.forEach((musica, index) => {
    console.log(`${index + 1}. ${musica.musicas}`)
    })
    rl.question('Digite a opção que deseja remover:', (opcao) => {
    if(opcao > 0 && opcao <= musica.length) {
    musica.splice(opcao -1, 1)
    console.log('Música removida com exito !')
    callback()        
    }else{
    console.log('Opção inválida, tente novamente.')
    callback()
    }
    })
    }
    }
    module.exports= {remover}
