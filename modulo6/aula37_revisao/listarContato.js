function listarContato() {
listar.forEach(contato => {
console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`) 
});

}
module.exports= {listarContato}



