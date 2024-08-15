function editar(musica, rl, callback){
    if(musica.length == 0) {
    console.log('Nenhuma música encontrada.')
    exibirMenu()
    } else {
    rl.question('Digite a opção que você deseja editar: ', (opcao) => {
    if (opcao > 0 && opcao <= musica.length) {
    rl.question('Digite o novo artista: ', (artista) => {
    rl.question('Digite a nova música: ', (musica) => {
    rl.question('Digite o nome do álbum: ', (album) => {
    rl.question('Digite o ano de lançamento:', (ano) =>  {
    musica[opcao - 1] = {
    artista,
    musica,
    album, 
    ano
    }
    console.log('Editado com sucesso.')
    callback()
    })
    })
      })
        })
    }
    })
    }
    }
    module.exports= {editar}