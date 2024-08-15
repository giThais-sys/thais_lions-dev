function listar(musica, callback) {
    if(musica.length > 0){
     for (let i = 0; i < musica.length; i++)
             console.log(musica[i])
      }else{
    console.log('Nenhuma música encontrada')
    callback()
  }
   } 
module.exports = {listar}