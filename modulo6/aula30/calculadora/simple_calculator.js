const prompt = require('prompt-sync')();

let num1= prompt ('digite o primeiro numero')
let operacao= prompt ('digite o operacao')
let num2= prompt ('digite o segundo numero')

num1 = parseFloat(num1)
num2 = parseFloat(num2)

if (typeof(num1)!= 'number'|| typeof(num2)!= 'number') {
     console.log('numero invalido')
} else {
    let resposta
    switch(operacao) {
        case '+':
            resposta= num1 + num2
            break
        case '-':
            resposta= num1 - num2
            break
        case '*':
            resposta= num1 * num2
            break
        case '/':
            resposta= num1 / num2
            break
        case '%':
            resposta= (num1 * num2)/ 100
            break
        default:
            console.log ('operacao nao existe')        
            break
    }
    console.log(resposta)

}























