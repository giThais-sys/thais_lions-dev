let {livros, estudantes, aluguel}= require ('./index')
const adicionarEstudante= require ('./adicionarEstudante')
const listarEstudante= require ('./listarEstudante')
const atualizarEstudante= require ('./atualizarEstudante')
const removerEstudante= require ('./removerEstudante')

const express= require ('express')
const app= express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!')
    })

    app.post ('/estudante', adicionarEstudante)
    app.get ('/estudante', listarEstudante)
    app.put ('/estudante/:id', atualizarEstudante)
    app.delete ('/estudante/:id', removerEstudante)

app.listen (port, ()=>{
   console.log (`example app listening on port ${port}`)
})

app.use((req,res)=>{
    res.status(404).send('pagina nao encontrada!')
})
