let livros= [
    {id: 1, titulo: 'o eco distante', autor: 'val mcDermid', ano:2007, gênero: 'romance policial estrangeiro'},
    {id: 2, titulo: 'lago dos sonhos', autor:'kim edwards', ano:2011, gênero: 'mistério'}
]

let estudantes= [
  {id: 1, nome:'isadora da cruz', matrícula:'20230317', curso: 'medicina', ano: '2023'},
  {id: 2, nome: 'arthur farias', matrícula: '20240205', curso: 'ed. física', ano: '2024'}
]

let aluguel= [
    {idLivro: 1, idEstudante:1, dataEmprestimo: '2023-07-04', dataDevolucao: '2023-07-14' },
    {idLivro: 2, idEstudante: 2, dataEmprestimo: '2024-05-15', dataDevolucao: '2024-05-23'}
]
module.exports= {livros, estudantes, aluguel}