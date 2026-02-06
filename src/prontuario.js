class Prontuario {
  constructor(id, paciente, diagnosticos, tratamentos, medicamentos) {
    this.id = id;
    this.paciente = paciente;
    this.diagnosticos = [];
    this.tratamentos = [];
    this.medicamentos = [];
  }

  adicionarDiagnostico(diagnostico) {
    this.diagnosticos.push(diagnostico);
    console.log(`Diagnostico ${diagnostico} adicionado ao prontuario do paciente ${this.paciente.nome}`);
  }

  adicionarTratamento(tratamento) {
    this.tratamentos.push(tratamento);
    console.log(`Tratamento ${tratamento} adicionado ao prontuario do paciente ${this.paciente.nome}`);
  }

  adicionarMedicamento(medicamento) {
    this.medicamentos.push(medicamento);
    console.log(`Medicamento ${medicamento} adicionado ao prontuario do paciente ${this.paciente.nome}`);
  }
};

module.exports = Prontuario;