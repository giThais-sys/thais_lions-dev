let nota
let classificacao

console.log('qual e a nota?')
process.stdin.once('data', function(data) {
 nota = parseInt(data.toString().trim())
classificacao = processamento (nota)

if (classificacao == "A" || classificacao == "B" || classificacao ==  "C") {
    console.log(`o usuario foi aprovado com nota ${'A'}`)
 }else if (classificacao == "F") {
    console.log(`o usuario nao foi aprovado porque ficou com nota ${'F'}`)
 }else {
    console.log('a nota nao e valida')
 } 

  process.exit()
})

    function processamento (nota) {
        switch(true) 
        
    {case (nota >=90 && nota <=100):
        return "A";

    case (nota >= 80 && nota <= 89):
        return "B";

    case (nota >= 70 && nota <= 79):
        return "C";

    case (nota >= 60 && nota <= 69):
        return "D";

    case ( nota >= 0 && nota <= 59):
        return "F"; 

    default: 
        return "a nota e invalida";

     
}







}
