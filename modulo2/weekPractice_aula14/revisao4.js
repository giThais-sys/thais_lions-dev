let notaSala = [98 , 86 , 37 , 56 , 89 , 74 , 68 , 85 , 69 , 97 ]
let mediaSala = 0
let soma = 0 
let maxima =0
let minima =0
let acimaDaMedia = 0
let abaixoDaMedia = 0 

for( i = 0; i <notaSala.length; i++ ) {
    soma = soma + notaSala[i]

 }
 mediaSala = soma/notaSala.length
console.log(`${mediaSala}`)
for (let i = 0; i<notaSala.length; i++) {    
    if(maxima<notaSala[i]) {
        maxima = notaSala[i]

    }else if(minima>notaSala[i]) {
        minima = notaSala[i]
    }
}

console.log(`${maxima} , ${minima}`)
notaSala.push(76)
for (let i=0; i< notaSala.length; i++) {
    if(notaSala[i]>=mediaSala) {
        acimaDaMedia++
    }


    if (notaSala[i]<80) {
     abaixoDaMedia++

    }
}
console.log(`${acimaDaMedia}`)
console.log(`${abaixoDaMedia}`)
console.log(`${notaSala}`)




