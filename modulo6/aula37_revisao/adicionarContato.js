function adicionarContato(callback) {
    let nome = prompt('digite um nome')
    let telefone = prompt('digite um numero de telefone')
    let email =  prompt('digite um endereço de email')
    global.contato.push (   {nome, telefone, email})
    console.log('Contato Adicionado com Sucesso')
    callback()
} 
 module.exports= {adicionarContato}
    