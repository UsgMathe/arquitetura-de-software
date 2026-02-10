const Appointment = require("./appointment");
const Exam = require("./exam");
const Doctor = require("./doctor");
const Patient = require("./patient");
const MedicalRecord = require("./medicalRecord");
const Address = require("./address");
const EmergencyContact = require("./emergencyContact");

const address = new Address(
  "Rua A",
  "123",
  "São Paulo",
  "SP",
  "12345-678"
);

const emergencyContact = new EmergencyContact(
  "Maria Silva",
  "(11) 98765-4321"
);

const patient = new Patient(
  1,
  "123.456.789-00",
  "Matheus Lopes",
  "1990-01-01",
  "Masculino",
  "O+",
  "Nenhuma",
  address,
  "(11) 91234-5678",
  "matheus.lopes@example.com",
  emergencyContact,
);

const doctor = new Doctor(
  1,
  "123456789",
  "Dr. Carlos Silva",
  ["Cardiologia", "Clínica Geral"],
  "(11) 91234-5678",
);

doctor.addWorkingHours("Segunda-feira", "08:00 - 12:00");
doctor.addWorkingHours("Quarta-feira", "13:00 - 17:00");
doctor.addWorkingHours("Sexta-feira", "08:00 - 12:00");

const appointment = new Appointment(
  1,
  "2023-01-01",
  patient,
  doctor,
  "Dor no peito",
  "Agendada",
  "Paciente relatou dor no peito após esforço físico.",
);

const exam = new Exam(
  1,
  "Hemograma",
  "Normal",
  "2023-01-01",
  "Laboratório X",
  "Dr. José Lopes",
  patient,
);

const medicalRecord = new MedicalRecord(1, patient);

patient.scheduleAppointment(appointment);
patient.addExam(exam);
medicalRecord.addDiagnosis("Hipertensão");
medicalRecord.addTreatment("Redução no consumo de sal");
medicalRecord.addMedication("Ácido acetilsalicílico");

console.log(doctor.listWorkingHours());