let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario 

console.log('a sua cor favorita?')
process.stdin.once('data', function(data) {
corDoUsuario = data.toString().trim()
processamento(corDoUsuario)
process.exit()
})

function processamento(corDoUsuario) {
    if(coresFavoritas.includes(corDoUsuario)) {
        console.log('a sua cor favorita é uma das favoritas da turma!')
    }else {
       
        console.log('a sua cor favorita é diferente, vamos adicionar à lista!')
    
        coresEspeciais.push(corDoUsuario)
    }
        console.log(`as cores favoritas são ${coresFavoritas}`)
        console.log(`as cores especiais são ${coresEspeciais}`)
        console.log(` o numero de cores favoritas são ${coresFavoritas.length}`)

        

    }












