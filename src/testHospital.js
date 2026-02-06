const Consulta = require("./consulta");
const Exame = require("./exame");
const Medico = require("./medico");
const Paciente = require("./paciente");
const Prontuario = require("./prontuario");

const paciente1 = new Paciente(
  1,
  "123.456.789-00",
  "Matheus Lopes",
  "1990-01-01",
  "Masculino",
  "O+",
  "Nenhuma",
  "Rua A, 123",
  "(11) 91234-5678",
  "matheus.lopes@example.com",
  { nome: "Maria Silva", telefone: "(11) 98765-4321" },
);

const medico1 = new Medico(
  1,
  "123456789",
  "Dr. Carlos Silva",
  ["Cardiologia", "Clínica Geral"],
  "(11) 91234-5678",
  { dias: ["Segunda", "Quarta", "Sexta"], horario: "08:00 - 12:00" },
);

const consulta1 = new Consulta(
  1,
  "2023-01-01",
  paciente1,
  medico1,
  "Dor no peito",
  "Agendada",
  "Paciente relatou dor no peito após esforço físico.",
);

const exame1 = new Exame(
  1,
  "Hemograma",
  "Normal",
  "2023-01-01",
  "Laboratório X",
  "Dr. José Lopes",
  paciente1,
);

const prontuario1 = new Prontuario(1, paciente1);

paciente1.agendarConsulta(consulta1);
paciente1.adicionarExame(exame1);
prontuario1.adicionarDiagnostico("Hipertensão");
prontuario1.adicionarTratamento("Redução no consumo de sal");
prontuario1.adicionarMedicamento("Ácido acetilsalicílico");

console.log(prontuario1);