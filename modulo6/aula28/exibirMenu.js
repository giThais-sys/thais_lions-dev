
     function exibirMenu(opções, rlQuestion, exibirMenu){
        console.log(`
         1. Inserir músicas
        2. Listar músicas e álbuns
        3. Editar a música
        4. Remover música
        5. Sair 
         
         `)
         rl.question(`Escolha uma opção:`, (opcao) => {
            switch(opcao){
                case '1':
                   inserir()
                break;
                case '2':
                 listar()
                 break;
                case'3':
                editar()
                break;
                case'4':
              remover()
                break;   
                case'5':
                rl.close
                break;
                                                  
                 default: 
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
              break;
                                    
             }
            })
        }
          (exibirMenu)


