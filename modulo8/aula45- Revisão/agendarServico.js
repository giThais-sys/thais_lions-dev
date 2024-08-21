let {agendamentos}= require ('./data')
function agendarServico(data,horario, idCliente, idServico){
    agendamentos.push({data, horario, idCliente, idServico, id: agendamentos.length +1})







}