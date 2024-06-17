var tabuada
console.log('defina o numero pra sua tabuada')
    process.stdin.once('data' , function(data) {
         tabuada = parseInt(data.toString().trim())
         processamento(tabuada)
         process.exit()


    })

function processamento(tabuada)  {
    for(let i = 0; i <= 10; i++) {
        let resposta
        console.log(`${resposta = i * tabuada}`)
    }
}
