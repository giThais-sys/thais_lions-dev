let opcoes= ['pedra', 'papel', 'tesoura']
let computador=[]
let usuario= []
resultado=[]

console.log('faca a sua aposta!')
process.stdin.once('data', function(data) {
  usuario= data.toString().trim()
  computador= opcoes[Math.floor(Math.random()*opcoes.length)]
  processamento(usuario, computador)
  console.log(resultado)
  process.exit()
})
function processamento(usuario, computador) {
    if(usuario== computador) {
        resultado= 'empate'
    }else if(usuario== 'pedra'&& computador== 'tesoura'|| usuario=='tesoura' && computador== 'papel' ||usuario =='papel'&& computador== 'pedra') {
        resultado= 'voce venceu!'
    }else{
    resultado= 'voce perdeu!'

    }
}



















