let frutas = ['uva', 'morango', 'morango', 'pera', 'banana']
for (let i = 0; i < frutas.length; i++) {
    for (let j = i + 1; j < frutas.length; j++) {
        if (frutas[i] == frutas[j]) {
            frutas.splice(j, 1)
        }
    }


}
console.log(frutas)