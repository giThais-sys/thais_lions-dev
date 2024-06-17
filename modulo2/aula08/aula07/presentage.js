let nome
let idade

console.log('name?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('idade')

    process.stdin.once('data', function(data) {
    idade = parseInt(data.toString().trim())
    processamento(nome , idade)
    process.exit()
    })
})
    

function processamento(nome , idade) {
    if (idade >= 21) {
        console.log(`${nome}, você já é maior de idade!`)
    } else {
        let calculo = 21 - idade
        console.log(`${nome}, você vai ser maior de idade em ${calculo}`)
    }
}