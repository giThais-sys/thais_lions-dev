let vetorPar = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
let vetorImpar = []

for (let i = 0; i < 10; i++ ) {
    if (vetorPar[i] % 2 != 0) {
        vetorImpar.push(vetorPar[i])
    }
}
console.log (vetorImpar)