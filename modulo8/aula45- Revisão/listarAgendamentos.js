let {agendamentos}= require ('./data')
function listarAgendamentos() {
    agendamentos.forEach((agendamento)=> {
        console.log(`data:${agendamento.data} : horario:${agendamento.horario}, idCliente: ${agendamento.idCliente}, idServico: ${agendamento.idServico}`)
          });
}
module.exports= listarAgendamentos