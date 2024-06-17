let nota1
let nota2
media = 

console.log('qual é a primeira nota?')
process.stdin.once('data',function(data) {
    nota1 = parseInt(data.toString().trim())
    console.log('qual é a segunda nota?')
process.stdin.once('data', function(data) {
    nota2 = parseInt(data.toString().trim())
    processamento (nota1 , nota2)
    process.exit()

    })
})

function processamento(nota1 , nota2) {
   media = (nota1  + nota2) / 2
   console.log(`a media e ${media}`)

   
}

