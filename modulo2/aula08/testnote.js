let prova1
let prova2
let notas = []

   console.log('qual é a primeira nota?')
process.stdin.once('data', function(data) {
   prova1 = parseFloat(data.toString().trim())
   console.log('qual é a segunda nota?')
process.stdin.once('data', function(data) {
   prova2 = parseFloat(data.toString().trim())
   processamento(prova1, prova2)
   process.exit()

})

})


function processamento (prova1 , prova2) {
notas.push(prova1 , prova2)
let calculo = (notas[0], notas[1]) / 2
console.log (`a media e ${calculo}`)


}

