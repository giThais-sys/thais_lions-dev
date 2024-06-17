let nome
let idade
const anoAtual = 2024

console.log('qual é o seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('idade?') 

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('voce ja fez aniversario?')
        process.stdin.once('data', function(data) {
            aniversario = parseInt(data.toString().trim())
            processamento(nome , idade , aniversario)
            process.exit()

        })
    })

})
 function processamento(nome , idade , aniversario) {
    let nascimento = anoAtual - idade
    if (aniversario == "sim") {
        console.log(`voce nasceu em ${nascimento}`)
    }else {
        console.log(`voce nasceu em ${nascimento - 1}`)
    }

 }


