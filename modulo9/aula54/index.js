const express= require('express')
const mongoose= require ('mongoose')
const { isGeneratorFunction } = require('util/types')

const app= express()
app.use(express.json())

mongoose 
.connect('mongodb://localhost:27017/livraria')
.then(()=> console.log('conectado ao MongoDb'))
.catch((erro)=>console.error('erro ao conectar ao MongoDb:', erro))

const esquemaLivro= new mongoose.Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    ano: {type: Number, required: true},
    genero: {type: String, required: true}
})

const Livro= mongoose.model ('Livro', esquemaLivro)

async function criarLivro(titulo, autor, ano, genero) {
    try{
        const novoLivro= new Livro ({titulo, autor, ano, genero})
        return await novoLivro.save()
    
    }catch (erro) {
        console.error('erro ao criar livro:', erro)
        throw erro
    }
}

app.post('/livros', async (req, res)=>{
    try {
        const {titulo, autor, ano, genero}= req.body
        const novoLivro= await criarLivro(titulo, autor, ano, genero)
        res
        .status(201)
        .json ({mensagem:'livro criado com sucesso', livro: novoLivro}) 
    }catch (erro) {
        res
        .status(500)
        .json ({mensagem: 'erro ao criar livro', erro:erro.message})
    }
})

async function listarLivros(){
    try {
        return await Livro.find()
    }catch (erro) {
        console.error('erro ao listar livros:', erro)
        throw erro
    }
}

app.get ('/livros', async (req, res)=>{
    try{
        const livros= await listarLivros()
        res.status(200).json(livros)
    }catch (erro) {
        res
        .status (500)
        .json({mensagem:'erro ao obter livros:', erro: erro.message})
    }
})

async function atualizarLivro(id, titulo, autor, ano, genero){
    try {
        const livroAtualizado= await Livro.findByIdAndUpdate(
            id,
            {titulo, autor, ano, genero}, 
            {new: true, runValidators:true}
        )
        return livroAtualizado
    }catch (erro){
        console.error('erro ao atualizar livro:', erro)
        throw erro
    }
}

app.put('/livros/:id', async (req, res)=>{
    try{
        const {id}=req.params
        const {titulo, autor, ano, genero}= req.body
        const livroAtualizado= await atualizarLivro(
            id,
            titulo,
            autor,
            ano,
            genero
        )
        if (livroAtualizado) {
            res.status(200).json({mensagem:'livro atualizado com sucesso!', livro: livroAtualizado,})

        }else {
            res.status(404).json({mensagem: 'livro nao encontrado'})
        }
        }catch(erro){
            res.status(500).json({mensagem:'erro ao atualizar livro', erro:erro.message})
        }


        }
    )

    async function deletarLivro(id){
      try {
        const livroDeletado= await Livro.findByIdAndDelete(id)
        return livroDeletado
        
      }catch (erro) {
        console.error ('erro ao deletar livro:', erro)
        throw erro
      }
    }

    app.delete ('/livros/:id', async (req, res)=> {
        try {
            const {id}= req.params
            const livroDeletado= await deletarLivro(id)
            if (livroDeletado) {
                res.status(200).json({mensagem: 'livro deletado com sucesso!', livro:livroDeletado})
            
            }else {
                res.status(404).json({mensagem: 'livro nao encontrado'})

            }
        }catch(erro) {
            res.status(500).json({mensagem:'erro ao deletar livro', erro: erro.message})

        }
    })

    const esquemaEstudante= new mongoose.Schema({
        nome: {type: String, required:true},
        matricula:{type: String, required:true},
        curso:{type:String, required:true},
        ano:{type:Number, required: true},
    })

    const Estudante= mongoose.model('Estudante', esquemaEstudante)
 
    async function criarEstudante(nome,matricula, curso, ano){
        try {
            const novoEstudante= new Estudante ({nome, matricula, curso, ano})
            return await novoEstudante.save()
        }catch (erro) {
            console.error ('erro ao criar estudante', erro)
            throw erro
        }
    }

    app.post ('/estudantes', async (req,res)=> {
        try {
            const {nome, matricula,curso, ano }= req.body
            const novoEstudante= await criarEstudante (nome, matricula, curso, ano)
            res.status(201).json({mensagem:'estudante criado com sucesso', estudante: novoEstudante})

        }catch (erro){
            res.status(500).json({mensagem: 'erro ao criar estudante', erro: erro.message})

        }
    })

    async function listarEstudantes(){
        try {
            return await Estudante.find()
        }catch (erro){
            console.error('erro ao listar estudantes:', erro)
            throw erro
        }
    }
    
    app.get ('/estudantes', async (req, res)=> {
        try{
            const estudantes= await listarEstudantes()
            res.status(200).json (estudantes)
        }catch (erro) {
            res.status(500).json({mensagem: 'erro ao obter livros', erro: erro.message})

        }
    })

    async function atualizarEstudante(id, nome, matricula, curso, ano) {
        try {
            const estudanteAtualizado= await Estudante.findByIdAndUpdate(
                id,
                {nome, matricula, curso, ano},
                {new: true, runValidators:true}
            )
            return estudanteAtualizado
        } catch (erro){
            console.error('erro ao atualizar estudante:', erro)
            throw erro
        }
    }

    app.put ('/estudantes/:id', async (req, res)=> {
        try {
            const {id}= req.params
            const {nome, matricula, curso, ano}= req.body
            const estudanteAtualizado= await estudanteAtualizado(
                id,
                nome,
                matricula,
                curso,
                ano, 
            )
            if (estudanteAtualizado) {
                res.status(200).json ({mensagem: 'estudante atualizado com sucesso!', estudante:estudanteAtualizado})

            }else {
                res.status(404).json({mensagem:'estudante nao encontrado'})
            }

        }catch (erro){
            res.status(500).json ({mensagem:'erro ao atualizar estudante', erro:erro.message})
        }
    })

    async function deletarEstudante(id) {
      try {
        const estudanteDeletado= await Estudante.findByIdAndUpdate(id)
        return estudanteDeletado 
      }catch (erro) {
        console.error('erro ao deletar estudante:', erro)
        throw erro
      }
    }

    app.delete('/estudantes/:id', async (req, res)=> {
        try {
            const {id}= req.params
            const estudanteDeletado= await deletarEstudante(id)
            if (estudanteDeletado) {
                res.status(200).json({mensagem: 'estudante deletado com sucesso', estudante:estudanteDeletado})
            }else {
                res.status(404).json({mensagem:'estudante nao encontrado'})
            }
        }catch (erro){
            res.status(500).json ({mensagem:'erro ao deletar estudante', erro:erro.message})
        }
    })

    const esquemaAluguel= new mongoose.Schema({
        idLivro: {type: String, required: true},
        idEstudante: {type: String, required:true},
        dataEmprestimo: {type: Number, required: true},
        dataDevolucao: {type: Number, required: true},
    })

    const Alugueis= mongoose.model('Aluguel', esquemaAluguel)

    async function criarAluguel(idLivro, idEstudante, dataEmprestimo, dataDevolucao) {
        try {
            const novoAluguel= new Aluguel ({id, idLivro, idEstudante, dataEmprestimo, dataDevolucao})
            return await novoAluguel.save()
        }catch (erro){
            console.error('erro ao criar aluguel:', erro)
            throw erro
        }
    }

    app.post ('/alugueis', async (req, res)=>{
        try{
            const {idLivro, idEstudante, dataEmprestimo, dataDevolucao}= req.body
            res.status(201).json({mensagem: 'aluguel criado com sucesso! ', aluguel:novoAluguel})
        }catch (erro){
            res.status(500).json ({mensagem: 'erro ao criar aluguel', erro: erro.message})
        }
    })

    async function listarAluguel(){
        try {
        return await Aluguel.find()
        }catch (erro){
            console.error('erro ao listar alugueis:',erro)
            throw erro
        }
    }

    app.get ('/alugueis', async (req, res)=> {
        try {
            const alugueis= await listar()
            res.status(200).json(alugueis)
        }catch (erro){
            res.status(500).json({mensagem: 'erro ao obter alugueis', erro:  erro.message})
        }
    })

    async function atualizarAluguel(id, idLivro, idEstudante, dataEmprestimo, dataDevolucao) {
        try {
          const aluguelAtualizado = await Aluguel.findByIdAndUpdate(
            id,
            { idLivro, idEstudante, dataEmprestimo, dataDevolucao },
            { new: true, runValidators: true }
          );
          return aluguelAtualizado;
        } catch (erro) { 
          console.error("Erro ao atualizar aluguel:", erro);
          throw erro;
        }
      }
      
      app.put("/alugueis/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const { idLivro, idEstudante, dataEmprestimo, dataDevolucao } = req.body;
          const aluguelAtualizado = await atualizarAluguel(
            id,
            idLivro,
            idEstudante,
            dataEmprestimo,
            dataDevolucao
          );
          if (aluguelAtualizado) {
            res
              .status(200)
              .json({
                mensagem: "aluguel atualizado com sucesso",
                aluguel: aluguelAtualizado,
              });
          } else {
            res.status(404).json({ mensagem: "aluguel não encontrado" });
          }
        } catch (erro) {
          res
            .status(500)
            .json({ mensagem: "Erro ao atualizar aluguel", erro: erro.message });
        }
      });
      
      async function deletarAluguel(id) {
        try {
          const aluguelDeletado = await Aluguel.findByIdAndDelete(id);
          return aluguelDeletado;
        } catch (erro) {
          console.error("Erro ao deletar aluguel:", erro);
          throw erro;
        }
      }
      
      app.delete("/alugueis/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const aluguelDeletado = await deletarAluguel(id);
          if (aluguelDeletado) {
            res
              .status(200)
              .json({ mensagem: "aluguel deletado com sucesso", aluguel: aluguelDeletado });
          } else {
            res.status(404).json({ mensagem: "aluguel não encontrado" });
          }
        } catch (erro) {
          res
            .status(500)
            .json({ mensagem: "Erro ao deletar aluguel", erro: erro.message });
        }
      });
      
      const port = 3000
      app.listen (port, ()=> {
          console.log(`example app listening on port ${port}`)
      })
      
      