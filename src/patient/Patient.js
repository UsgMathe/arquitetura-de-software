import { Allergy } from "./Allergy.js";
import { Appointment } from "./Appointment.js";
import { Exam } from "./Exam.js";
import { Diagnosis } from "./record/Diagnosis.js";
import { MedicalRecord } from "./record/MedicalRecord.js";
import { Medication } from "./record/Medication.js";
import { Treatment } from "./record/Treatment.js";

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

  addAllergy(allergy) {
    if (!(allergy instanceof Allergy)) throw new Error("Allergy must be an instance of Allergy");

    const hasAllergy = this.allergies.some((allergy) => allergy.equals(allergy));
    if (hasAllergy) throw new Error("Patient already has this allergy");

    this.allergies.push(allergy);
  }

  addDiagnosis(description) {
    const diagnosis = new Diagnosis(description);
    this.medicalRecord.addDiagnosis(diagnosis);
  }

  addExam(exam) {
    if (!(exam instanceof Exam)) throw new Error("Exam must be an instance of Exam");
    this.exams.push(exam);
  }

  addMedication(name, dosage) {
    const medication = new Medication(name, dosage);
    this.medicalRecord.addMedication(medication);
  }

  addTreatment(description) {
    const treatment = new Treatment(description);
    this.medicalRecord.addTreatment(treatment);
  }

  scheduleAppointment(appointment) {
    if (!(appointment instanceof Appointment)) throw new Error("Appointment must be an instance of Appointment");

    const hasConflict = this.appointments.some((appointment) => appointment.hasConflict(appointment));
    if (hasConflict) throw new Error("Patient already has an appointment scheduled for this date");

    this.appointments.push(appointment);
  }
};