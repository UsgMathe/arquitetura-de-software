class Paciente {
  constructor(id, cpf, nome, dataNasc, genero, tipoSanguineo, alergias, endereco, telefone, email, contatoEmergencia) {
    this.id = id;
    this.cpf = cpf;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.genero = genero;
    this.tipoSanguineo = tipoSanguineo;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.contatoEmergencia = contatoEmergencia;

    this.historicoMedico = [];
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(consulta) {
    const consultaNoMesmoHorario = this.consultas.some(
      (c) => c.data === consulta.data
    );

    if (consultaNoMesmoHorario) {
      throw new Error("Paciente já possui uma consulta agendada para esta data");
    }

    this.consultas.push(consulta);
    console.log(`Consulta agendada para ${this.nome} com o medico ${consulta.medico.nome} na data ${consulta.data}`);
  }

  adicionarExame(exame) {
    this.exames.push(exame);
    console.log(`Exame ${exame.tipo} adicionado para ${this.nome}, com resultado ${exame.resultado}`);
  }

  adicionarEventoHistorico(evento) {
    this.historicoMedico.push(evento);
    console.log(`Evento médico adicionado ao histórico do paciente ${this.nome}`);
  }
};

module.exports = Paciente;