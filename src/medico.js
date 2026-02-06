class Medico {
  constructor(id, crm, nome, especialidade, telefone, horarioAtendimento) {
    this.id = id;
    this.crm = crm;
    this.nome = nome;
    this.especialidade = especialidade;
    this.telefone = telefone;
    this.horarioAtendimento = horarioAtendimento;
  }
};

module.exports = Medico;