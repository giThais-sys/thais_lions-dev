let nota1
let nota2
let media



 console.log('qual é a primeira nota?')
 process.stdin.once('data',function(data) {
 nota1 = parseFloat(data.toString().trim())
    
 console.log('qual é a segunda nota?') 
 process.stdin.once('data', function(data) {
 nota2 = parseFloat(data.toString().trim())
 processamento(nota1 , nota2)
 process.exit()
 })
 
}) 

function processamento(nota1 , nota2) {
let media = (nota1 + nota2)/2
if(media <= 8){
    console.log(`voce nao passou na prova porque voce tirou a nota ${media}`)
}else {
    console.log(`parabens, voce passou na prova com a nota ${media}`)
}
}
