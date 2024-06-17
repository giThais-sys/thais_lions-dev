let resposta
let gostadecafe



console.log('gosta de café?')
process.stdin.once('data', function(data) {
    gostadecafe = data.toString().trim()
    processamento(gostadecafe)
    process.exit()
})

function processamento(gostadecafe) {


if (gostadecafe == "não") {
    gostaDeCafe =  false
    
 } else{ gostaDeCafe = true    

 }

 if(gostaDeCafe == true) {
    console.log('que bom!')
 }
else console.log('então tá bom')
    }

























