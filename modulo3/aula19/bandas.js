
const readline= require('readline')

const rl= readline.createInterface({
input : process.stdin,
output : process.stdout,
})
let bandas=[]

exibirMenu()
 function exibirMenu() {
    console.log(`
    Menu:
    1.cadastrar bandas favoritas
    2.listar todas as bandas favoritas
    3.exibir banda mais antiga
    4.editar banda
    5.remover banda
    6.sair
    `)
    rl.question('escolha uma opcao:', (opcao) => { 

        switch(opcao){
            case '1':
                cadastrarBandasFavoritas()
                break;
            case '2':
                listarTodasAsBandasFavoritas()    
                break;
            case '3':
                exibirBandaMaisAntiga()    
                break;
            case '4':
                editarBanda() 
                break;
            case '5':
                removerBanda()
                break;
            case '6':
                rl.close()
                break;
            default:        
                console.log('opcao invalida , tente novamente.')      
                exibirMenu()
                break;
        }

    })

}
function cadastrarBandasFavoritas(){
rl.question('digite o nome da banda:', (nome)=> {
  rl.question('digite um album da banda:', (album)=>{
    rl.question('digite o ano de fundacao da banda:', (ano) =>{
        bandas.push({nome: nome, album: album, ano: parseInt(ano)})
        console.log('banda cadastrada com sucesso!')
        exibirMenu()
  })
})
})
}
 
function listarTodasAsBandasFavoritas(){
    if(bandas.length== 0) {
    console.log('nao existe nenhuma banda')
    exibirMenu()
}else{
    console.log(bandas)
    exibirMenu()
}

}

function exibirBandaMaisAntiga(){
    let bandaMaisAntiga = bandas[0]
    for(let i = 0; i < bandas.length; i++){
        if(bandas[i].ano > bandaMaisAntiga.ano){
            bandaMaisAntiga = bandas[i]
        }
    }
    console.log(bandaMaisAntiga)
    exibirMenu()
}

    
function editarBanda() {
    if(bandas.length==0)
    console.log('sem bandas pra editar')
    rl.question('qual elemento voce deseja editar?:', (numero) => {
            if(numero > 0 && numero <= bandas.length) {
                rl.question('digite a nova propriedade 1:', (propriedade1) => {
                   rl.question('digite a nova propriedade 2:',(propriedade2)=>  {
                      rl.question('digite a nova propriedade 3:', (propriedade3)=> {
                    bandas[numero -1] ={
                        propriedade1,
                        propriedade2,
                        propriedade3
                     }
                     console.log('editado com sucesso!')
                     exibirMenu()
                      })
                   })
                })
            }else {
                console.log('numero invalido , tente novamente!')
                exibirMenu()
            }
            })
        }
function removerBanda(){
    if (bandas.length==0) {
        console.log('nada cadastrado')
        exibirMenu()
    }else{
        console.log('lista de elementos')
        bandas.forEach((elemento, index)=> {
           console.log(`${index + 1}, ${elemento.nome}`)
        })
        rl.question('digite o numero que vc deseja remover:', (numero) => {
    if(numero>0 && numero <=bandas.length) {
          bandas.splice(numero -1, 1)
          console.log('elemento removido com sucesso!')
          exibirMenu()
    }else{
      console.log('numero invalido , tente novamente')
      exibirMenu()
    }


    })
    







    }
}

