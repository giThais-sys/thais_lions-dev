let{filmes}= require ('./buscarFilmePorAno')

const buscarFilmePorAno=(req,res)=>{

const {idFilme} = req.params;
const busca = filmes.filter(filme =>
filme.ano === parseInt(idFilme));

if (busca.length > 0) {
res.status(200).send(busca);
} else {
res.status(404).send('nenhum filme foi encontrado para esse ano!')}
}
module.exports= {buscarFilmePorAno}