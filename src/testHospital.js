import { Doctor } from "./doctor/doctor.js";
import { Allergy } from "./patient/Allergy.js";
import { Appointment } from "./patient/Appointment.js";
import { Exam } from "./patient/Exam.js";
import { Patient } from "./patient/patient.js";
import { Diagnosis } from "./patient/record/Diagnosis.js";
import { Medication } from "./patient/record/Medication.js";
import { Treatment } from "./patient/record/Treatment.js";
import { Address } from "./shared/address.js";
import { EmergencyContact } from "./shared/emergencyContact.js";

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
  "123456789",
  "Matheus",
  "2004-01-01",
  "Masculino",
  "O",
  address,
  "(42) 99999-9999",
  "matheus@email.com",
  emergencyContact
);

const doctor = new Doctor(
  1,
  "123456789",
  "Dr. Carlos",
  ["Cardiologia", "Clínica Geral"],
  "(11) 98765-4321",
);

const appointment = new Appointment(
  1,
  "2022-01-01",
  patient,
  doctor,
  "Dor no peito",
  "Agendada",
  "Paciente relatou dor no peito após esforço físico."
);

const exam = new Exam(
  1,
  "Hemograma",
  "Normal",
  "2026-01-10",
  "Laboratório Central",
  "Dra. Ana",
  patient
);

doctor.addWorkingHours("Segunda-feira", "08:00 - 12:00");
doctor.addWorkingHours("Quarta-feira", "14:00 - 18:00");
doctor.addWorkingHours("Sexta-feira", "08:00 - 12:00");

patient.addAllergy(new Allergy("Penicilina"));

patient.scheduleAppointment(appointment);
patient.addExam(exam);

patient.medicalRecord.addDiagnosis(new Diagnosis("Hipertensão"));
patient.medicalRecord.addTreatment(new Treatment("Redução no consumo de sal"));
patient.medicalRecord.addMedication(new Medication("Captopril", "25mg"));


console.log(patient.medicalRecord.medications);