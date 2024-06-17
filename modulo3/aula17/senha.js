let caracteres= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
let senha= ''
let comprimentoSenha
let numeroAleatorio

console.log('qual e a senha?')
process.stdin.once('data', function(data) {
   comprimentoSenha= parseInt(data.toString().trim())
for(let i=0; i<comprimentoSenha; i++){
    numeroAleatorio= Math.floor(Math.random()* caracteres.length)  
   senha+= caracteres.charAt(numeroAleatorio)
}
console.log(`${senha}`)
process.exit()

})