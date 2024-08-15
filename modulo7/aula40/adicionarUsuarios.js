let usuarios= require ('./usuarios')

function adicionarUsuarios(usuario) {
   usuario.id= usuarios.length +1;
   let jaExiste = usuarios.find(cont => cont.email === usuario.email);
   usuarios.push(usuario)
   }
}
module.exports= adicionarUsuarios
