
function inserir(rl, musica, callback){
    rl.question('Digite o nome do artista: ', (artista) => {
        rl.question('Digite a música: ', (musica) => {  
            rl.question('Digite o álbum desta música: ', (álbum) => {
                rl.question('Digite o ano de lançamento:', (ano) => {
                    musica.push({artista:artista, musica:musica, álbum:álbum, ano:(ano)})
                    console.log('Música inserida com sucesso ! ')
     callback()
    })
    })
   })
   })
  }
  module.exports = {inserir}            