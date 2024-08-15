function editarUsuarios(id, usuarios, nome, email, telefone) {

let index = usuarios.findIndex(usuario => usuario.id == id)


let jaExiste = usuarios.find(cont => cont.email === email);
if (jaExiste) {
    throw new Error('Já existe um usuario com esse email');
    } else { 
    usuarios[index] = {id: id, nome: nome, email:email, telefones:telefone}
    console.log('usuario editado com sucesso!')
    }
}
module.exports= editarUsuarios



















