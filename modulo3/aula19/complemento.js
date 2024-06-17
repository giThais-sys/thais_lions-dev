
const readline= require('readline')

const rl= readline.createInterface({
input : process.stdin,
output : process.stdout,
})
let funcionarios =[]

exibirMenu()
 function exibirMenu() {
    console.log(`
    Menu:
    1.cadastrar funcionario
    2.listar todos os funcionarios
    3.exibir funcionario com maior salario
    4.editar funcionario
    5.remover funcionario
    6.sair
    `)
    rl.question('escolha uma opcao:', (opcao) => { 

        switch(opcao){
            case '1':
                cadastrarFuncionario()
                break;
            case '2':
                listarFuncionarios()    
                break;
            case '3':
                exibirMaiorSalario()    
                break;
            case '4':
                editarFuncionarios() 
                break;
            case '5':
                removerFuncionario()
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
function cadastrarFuncionario(){
rl.question('digite o nome do funcionario:', (nome)=> {
  rl.question('digite o cargo do funcionario:', (cargo)=>{
    rl.question('digite o salario do funcionario:', (salario) =>{
        funcionarios.push({nome: nome, cargo: cargo, salario: parseFloat(salario)})
        console.log('funcionario cadastrado com sucesso!')
        exibirMenu()
  })
})
})
}
 
function listarFuncionarios(){
    if(funcionarios.length== 0) {
    console.log('nao existe nenhum funcionario')
    exibirMenu()
}else{
    console.log(funcionarios)
    exibirMenu()
}

}

function exibirMaiorSalario(){
    let maiorSalario = funcionarios[0]
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > maiorSalario.salario){
            maiorSalario = funcionarios[i]
        }
    }
    console.log(maiorSalario)
    exibirMenu()
}
function editarFuncionarios(){
    if (funcionarios.length==0) {
        console.log('sem funcionarios pra editar')
    }else{
        rl.question('qual elemento voce deseja editar?:', (numero) => {
            if(numero > 0 && numero <= funcionarios.length) {
                rl.question('digite a nova propriedade 1:', (propriedade1) => {
                   rl.question('digite a nova propriedade 2:',(propriedade2)=>  {
                      rl.question('digite a nova propriedade 3:', (propriedade3)=> {
                     funcionarios[numero -1] ={
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
}
function removerFuncionario(){
    if (funcionarios.length==0) {
        console.log('nada cadastrado')
        exibirMenu()
    }else{
        console.log('lista de elementos')
        funcionarios.forEach((elemento, index)=> {
           console.log(`${index + 1}, ${elemento}`)
        })
        rl.question('digite o numero que vc deseja remover:', (numero) => {
    if(numero>0 && numero <=funcionarios.length) {
          funcionarios.splice(numero -1, 1)
          console.log('elemento removido com sucesso!')
          exibirMenu()
    }else{
      console.log('numero invalido , tente novamente')
      exibirMenu()
    }

    })
    
    }
}
 




