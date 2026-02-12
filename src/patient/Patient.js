import { Appointment } from "./Appointment.js";
import { Exam } from "./Exam.js";
import { MedicalRecord } from "./record/MedicalRecord.js";

export class Patient {
  constructor(id, identification, name, birthDate, gender, bloodType, address, phone, email, emergencyContact) {
    this.id = id;
    this.identification = identification;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodType = bloodType;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;

    this.medicalHistory = [];
    this.appointments = [];
    this.exams = [];
    this.allergies = [];

    this.medicalRecord = new MedicalRecord();
  }

  addExam(exam) {
    if (!(exam instanceof Exam)) throw new Error("Exam must be an instance of Exam");
    this.exams.push(exam);
  }

  scheduleAppointment(appointment) {
    if (!(appointment instanceof Appointment)) throw new Error("Appointment must be an instance of Appointment");

    const hasConflict = this.appointments.some((appointment) => appointment.hasConflict(appointment));
    if (hasConflict) throw new Error("Patient already has an appointment scheduled for this date");

    this.appointments.push(appointment);
  }
};