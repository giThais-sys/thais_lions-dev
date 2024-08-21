let {agendamentos}= require ('./data')
function atualizarAgendamento(id, novaData, novoHorario, novoServico, novoCliente){
    let index= agendamentos.findIndex(agendamento=>agendamento.id===id)
    agendamentos[index]={data:novaData, horario:novoHorario, idServico:novoServico, idCliente:novoCliente}
}