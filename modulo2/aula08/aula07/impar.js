let numero

console.log(' digite um numero')
process.stdin.once('data', function(data) {
numero = parseInt(data.toString().trim())
processamento(numero)
process.exit()
})

function processamento(numero) {
if(numero == 0) {
console.log('o numero que voce digitou e zero') }
else if (numero % 2 == 0) {
    console.log('o numero que voce digitou e par')
}else ( numero % 2 != 0) {
console.log('o numero que voce digitou e impar')
}
}
