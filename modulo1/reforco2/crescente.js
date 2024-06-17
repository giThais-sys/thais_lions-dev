let numeroAleatorio = [4, 5, 1, 3]
let numeroCrescente = []
let auxiliar
for (let i = 0; i < numeroAleatorio.length; i++) {
    for (let j =  i + 1; j < numeroAleatorio.length; j++) {
        if (numeroAleatorio[i] > numeroAleatorio[j]) {
            auxiliar = numeroAleatorio[i]
            numeroAleatorio[i] = numeroAleatorio[j]
            numeroAleatorio[j] = auxiliar
        }


    }
}
console.log(numeroAleatorio)























