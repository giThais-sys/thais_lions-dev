
let contatos = [{
    ID: 1,
    nome: 'Bob',
    telefone: '999999999999',
    email: 'boblindoreidelas@gmail.com'
}]

function processarRequisicao(requisicao){
    const {acao,objeto} = requisicao

    let index
    switch(acao){
        case 'adicionar':
            objeto.ID = contatos[contatos.length -1].ID + 1
            contatos.push(objeto)
        return ''
        case 'listar':
            if(contatos.length == 0){
                console.log('ainda não há contatos salvos!')
                return
            }
            contatos.forEach(contato =>{
                console.log(`
    ${contato.ID} - ${contato.nome},
    Telefone: ${contato.telefone}
    Email: ${contato.email}`)
            })
            return 
        case 'editar':
            index = contatos.findIndex(contato => contato.ID == objeto.ID)
            if(index < 0){
                return 'ID inválido!'
            } else{
                contatos[index] = {ID: index +1, nome: objeto.nome, email: objeto.email, telefone: objeto.telefone}
                return 'contato editado com sucesso!'
            } 
        case 'remover':
            index = contatos.findIndex(contato => contato.ID == objeto.ID)
            if(index < 0){
                return 'ID inválido!'
            } else{
                contatos.splice(index,1)
                return 'contato removido com sucesso!'
            }
    }
}

module.exports = processarRequisicao