var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares = 0
var mediaImpares = 0

for(let i = 0; i<= 999; i++) {
    if (i % 2 ==0) {
        totalPares= totalPares+1
        somaPares= somaPares+i
    }else {
        totalImpares=  totalImpares+1
        somaImpares= somaImpares+i
    }
}
console.log(`a soma dos pares é ${somaPares} , a soma dos impares é ${somaImpares}`)
console.log(`a media dos pares é ${somaPares / totalPares} , a media dos impares é ${ somaImpares/ totalImpares}`)
if (mediaPares> mediaImpares) {
    console.log('a media dos pares é maior do que a dos impares')
}else {
    console.log('a media dos pares é menor do que a dos impares')
}