let residencias=require ('./residencias')
function listarResidencia(residencias) {
 residencias.forEach((residencia, index)=> {
 console.log(`${index+1} bairro: ${residencia.bairro}, rua: ${residencia.rua}, numero: ${residencia.numero}, moradores: ${residencia.moradores}`)
   });
   
}
module.exports= { listarResidencia }
