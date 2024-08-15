let usuarios = require ('./usuarios')
function listarUsuarios() {
 usuarios.forEach(usuario=> {
 console.log(`id:${usuario.id} nome: ${usuario.nome}, email: ${usuario.email}, telefone: ${usuario.telefones}`)
   });
   
}
module.exports= listarUsuarios
