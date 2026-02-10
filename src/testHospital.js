import { Address } from "./shared/address.js";
import { EmergencyContact } from "./shared/emergencyContact.js";

import { Doctor } from "./doctor/doctor.js";
import { DoctorRepository } from "./doctor/DoctorRepository.js";

import { Patient } from "./patient/patient.js";
import { PatientRepository } from "./patient/PatientRepository.js";

import { Appointment } from "./patient/Appointment.js";
import { AppointmentRepository } from "./patient/AppointmentRepository.js";

import { Exam } from "./patient/Exam.js"
import { ExamRepository } from "./patient/ExamRepository.js";

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

// ---------------------------------------------------------
const patientRepository = new PatientRepository();
const doctorRepository = new DoctorRepository();
const appointmentRepository = new AppointmentRepository();
const examRepository = new ExamRepository();
// ---------------------------------------------------------

doctorRepository.add(doctor.id, doctor);
patientRepository.add(patient.id, patient);
appointmentRepository.add(appointment.id, appointment);
examRepository.add(exam.id, exam);

const foundPatient = patientRepository.findById(1);
const foundDoctor = doctorRepository.findById(1);
const foundAppointment = appointmentRepository.findById(1);
const foundExam = examRepository.findById(1);

console.log({ foundPatient });
console.log({ foundDoctor });
console.log({ foundAppointment });
console.log({ foundExam });

console.log(doctorRepository.findBySpecialty("Cardiologia"));