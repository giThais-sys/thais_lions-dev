let vetores = [27 , 10 , 3 , 0 , 20 , 5 , 6 , 3]
let idade = 21
let pares = []
let impares = []
 
vetores.push(idade)

for(let i = 0; i< vetores.length; i++) {
   if(vetores[i] % 2 == 0) {
    pares.push(vetores[i])
   } if (vetores[i] % 2 !=0) {
    impares.push(vetores[i])
   }else ('o numero e invalido')

   }

console.log (`estes sao os numeros ${pares}`)
console.log (`estes sao os numeros ${impares}`)





