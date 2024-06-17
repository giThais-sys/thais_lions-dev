let tentativas=0
const readline = require('readline')

const rl = readline.createInterface ({
   input: process.stdin,
   output: process.stdout,
})

console.log('bem vindo!')

let numeroAleatorio = Math.floor(Math.random()*100) +1

function adivinhacao() {
   rl.question(`digite um numero de 0 a 100:`, (palpite) =>{
      tentativas =tentativas+1
      if(tentativas>10) {  
         console.log('voce perdeu!')
         rl.close()
      }
      switch(true) {
      
      case (palpite > numeroAleatorio):
         console.log(' numero e muito alto!') 
         adivinhacao()
         break
      case (palpite < numeroAleatorio):
         console.log('numero e muito baixo!')
         adivinhacao()
         break 
      case (palpite == numeroAleatorio): 
         console.log('parabens, voce acertou!')
         console.log(`numero de tentativas foi: ${tentativas}`)
         rl.close()
         break
      default:
        console.log('numero invalido!')
        rl.close()
        break
      
   
      }})}
   
   

adivinhacao()











