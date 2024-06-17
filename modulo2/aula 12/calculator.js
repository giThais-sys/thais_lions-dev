let numero1
let numero2
let operadores

function calculadora ( numero1 , numero2 , operadores ) {
    if( operadores == '+') {
        return numero1 + numero2
    }else if (operadores == '-') {
        return numero1 - numero2
    }else if (operadores == '*') {
        return numero1 * numero2
    }else if (operadores == '/') {
        return numero1 / numero2
    }else {   
        console.log('o valor que voce digitou é invalido')
    }
    }
    
    console.log(calculadora(4 , 5 , '+'))
    console.log(calculadora(5 , 4 , '-'))
    console.log(calculadora(6 , 4 , '*'))
    console.log(calculadora(10 , 5 , '/'))
    




