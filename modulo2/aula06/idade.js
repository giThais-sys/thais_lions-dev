let nome
let idade
const anoAtual = 2024


console.log('nome?')
process.stdin.once('data', function(data) { 
nome = data.toString().trim()
console.log('idade?')

process.stdin.once('data', function(data) {
idade = parseInt(data.toString().trim())
processamento (nome, idade)
process.exit()
})
})

function processamento(nome, idade) { 
let anoNascimento = anoAtual - idade
console.log(`olá ${nome} se você já fez aniversario você nasceu em ${anoNascimento},se você ainda não fez aniversário você nasceu em ${anoNascimento - 1}`)

};








