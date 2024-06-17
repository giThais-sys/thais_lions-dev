function calculadora (numero1 , numero2 , operadores) {

switch (operadores) {
    case '+':
        return numero1 + numero2
    case '-':
        return numero1 - numero2
    case '*':
        return numero1 * numero2
    case '/':
        return numero1 / numero2     
    
    default:
        console.log('operador é invalido')   
}

}
console.log(calculadora(4 , 5 , '+'))
    console.log(calculadora(5 , 4 , '-'))
    console.log(calculadora(6 , 4 , '*'))
    console.log(calculadora(10 , 5 , '/'))
    



