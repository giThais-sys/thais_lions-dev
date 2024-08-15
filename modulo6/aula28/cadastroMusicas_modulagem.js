const readline = require('readline')
const inserir = require('./inserir')
const listar = require('./listar')
const editar = require('./editar')
const remover = require('./remover')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let musica = [];
exibirMenu()


function exibirMenu() {
    console.log(`
    Menu:
    1. Inserir musica e albuns
    2. Listar todas as musicas
    3. Editar musica
    4. Remover musica
    5. Sair
    `);

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                inserir(musica,rl,exibirMenu);
                break;
            case '2':
                listar(musica);
                exibirMenu()
                break;
            case '3':
                editar(musica,rl,exibirMenu);
                break;
            case '4':
                remover(musica,rl,exibirMenu);
                break
            case '5':
                rl.close();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu();
                break;
        }
    });
}

function inserir() {
    rl.question('Digite o nome da musica: ', (nome) => {
        rl.question('Digite o autor da musica: ', (artista) => {
                    rl.question('Digite o album: ', (album) => {
                        rl.question('Digite o ano de lancamento: ', (ano) => {
                            musica.push({
                                nome: nome,
                                autor: artista,
                                album:album,
                                ano:ano
                            });
                            console.log('musica cadastrada com sucesso!');
                            callback();
                        });
                    });
                });
            });
        };
    ;
    

function listar(musica) {
    if (musica.length) {
        console.log('Nenhuma musica cadastrada')
    } else {
        console.log('musica:')
        musica.forEach((musica, index) => {
            console.log(`${index + 1}. ${musica.nome} - ${musica.autor} - ${musica.album} - ${musica.ano}`)
        });
    }
}


function editar() {
    listar(arte)
    rl.question('Digite o número da musica que deseja editar: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < musica.length) {
            rl.question('Digite o novo nome da musica: ', (nome) => {
                            rl.question('Digite o novo album da musica: ', (album) => {
                                rl.question('Digite o novo ano de lancamento: ', (ano) => {
                                    arte[index] = {
                                        nome: nome,
                                        autor: artista,
                                        album:album,
                                        ano:ano
                                    };
                                    console.log('musica editada com sucesso!');
                                    callback();
                                });
                            });
                        });
                    };
                });
              }
            
        

function remover() {
    listar(musica)
    rl.question('Digite o número da musica que deseja remover: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < musica.length) {
            musica.splice(index, 1);
            console.log('musica removida com sucesso!');
            callback();
        }
    });
}
