const readline = require('readline')

const rl = readline.createInterface ({
   input: process.stdin,
   output: process.stdout,
})

console.log('boas vindas!')

const numeroAleatorio = Math.floor(Math.random()*100) +1

function adivinhacao() {
   rl.question(`digite um numero de 0 a 100:`, (palpite) =>{
      if(palpite.trim()> numeroAleatorio){ 
         console.log(' numero e muito alto!') 
         adivinhacao()
      }else if(palpite.trim()< numeroAleatorio) {
         console.log('numero e muito baixo!')
         adivinhacao()
      }else {
         console.log('parabens, voce acertou!')
         console.log('programa encerrado!')
         rl.close()
      }
   })
}
adivinhacao()




















