
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
    4.sair
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