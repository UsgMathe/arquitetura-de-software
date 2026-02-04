class Paciente {
  constructor(nome, dataNasc, historico, alergias, endereco, telefone, email) {
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.historico = historico;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(data, medico) {
    this.consultas.push({ data, medico });
    console.log(`Consulta agendada para ${this.nome} com o medico ${medico} na data ${data}`);
  }

  adicionarExame(nomeExame, resultado) {
    this.exames.push({ nomeExame, resultado });
    console.log(`Exame ${nomeExame} adicionado para ${this.nome}`);
  }
}

const paciente1 = new Paciente(
  "Matheus",
  "1990-01-01",
  "Nenhuma",
  "Nenhuma",
  "Rua 123",
  "123456789",
  "theus@gmail.com"
);

paciente1.agendarConsulta("2026-02-01", "Dr. João");
paciente1.adicionarExame("Hemograma", "Normal");