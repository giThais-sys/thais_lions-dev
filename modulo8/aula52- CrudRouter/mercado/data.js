let {mercado, fornecedor,produto}= require ('./index')
const mercadoRouter= require ('./mercadoRouter')
const fornecedorRouter= require('./fornecedorRouter')
const produtoRouter= require('./produtoRouter')

const adicionarMercado= require ('./adicionarMercado')
const listarMercado= require ('./listarMercado')
const editarMercado=require ('./editarMercado')
const removerMercado= require ('./removerMercado')

const express= require('express')
const app= express()
app.use(express.json())
app.use(caixa_alta)

app.use ('./mercado', mercadoRouter)
app.use ('./fornecedor', fornecedorRouter)
app.use ('./produto', produtoRouter)

app.get ('/', (req,res)=>{
    res.send ('servidor express está funcionando!')
})

app.post ('/mercado', adicionarMercado)
app.get ('/mercado', listarMercado)
app.put ('mercado/:id', editarMercado)
app.delete ('/mercado/:id')