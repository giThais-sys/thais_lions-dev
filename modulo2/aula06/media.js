let nota1
let nota2


console.log('nota1?')
process.stdin.once('data', function(data) { 
nota1 = parseFloat(data.toString().trim())
console.log('nota2?')

process.stdin.once('data', function(data){
nota2 = parseFloat(data.toString().trim())
processamento (nota1 , nota2)
process.exit()
})
})

function processamento(nota1, nota2) {
let media = (nota1 + nota2) / 2
console.log(`a media é ${media}`) 
};






















