let {filmes}= require ('./index')

const {adicionarFilme}= require ('./adicionarFilme')
const {listarFilme}= require ('./listarFilme')
const {editarFilme}= require ('./editarFilme')
const {deletarFilme}= require ('./deletarFilme')
const {buscarFilmePorAno}= require ('./buscarFilmePorAno')

const express= require ('express')
const app= express()
const port= 3000
app.use(express.json())

app.get ('/', (req, res)=> {
    res.send ('servidor Express está funcionando!')
})

app.post ('/filmes', adicionarFilme)
app.get ('/filmes', listarFilme)
app.put ('/filmes/:id', editarFilme)
app.delete ('/filmes/:id', deletarFilme) 
app.get ('/filmes', buscarFilmePorAno)

app.listen (port, ()=> {
  console.log(`example app listening on port ${port}`)
})

app.use ((req,res)=>{
    res.status(404).send('pagina nao encontrada!')
})