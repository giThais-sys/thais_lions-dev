const carros= ['corsa', 'celta', 'gol' , 'palio', 'corvette', 'c3' ,'c4']

for (let i=0; i <carros.length; i++) {
    if(carros[i][0]== 'c' && carros[i].length<=3){
        console.log(carros[i], 'vai jogar no vasco')
        carros.splice(i, 1)
        i--
    }
}

























