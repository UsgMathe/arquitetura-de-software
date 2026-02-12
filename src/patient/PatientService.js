import { Allergy } from "./Allergy.js";
import { Patient } from "./Patient.js";
import { Diagnosis } from "./record/Diagnosis.js";
import { Medication } from "./record/Medication.js";
import { Treatment } from "./record/Treatment.js";

export class PatientService {
  constructor(PatienceRepository) {
    this.patienceRepository = PatienceRepository;
  }

  addPatient(patientData) {
    const patient = new Patient(
      patientData.id,
      patientData.identificationDocument,
      patientData.name,
      patientData.birthDate,
      patientData.gender,
      patientData.bloodType,
      patientData.address,
      patientData.phone,
      patientData.email,
      patientData.emergencyContact,
    );
    this.patienceRepository.add(patient.id, patient);
    return patient;
  }

  findPatientById(patientId) {
    return this.patienceRepository.findById(patientId);
  }

  findPatientByName(patientName) {
    return this.patienceRepository.findByName(patientName);
  }

  findPatientByBloodType(bloodType) {
    return this.patienceRepository.findByBloodType(bloodType);
  }

  findAllPatients() {
    return this.patienceRepository.findAll();
  }

  updatePatient(patientId, patientData) {
    const patient = this.findPatientById(patientId);
    if (!patient) throw new Error("Patient not found.");

    Object.assign(patient, patientData);

    this.patienceRepository.update(patient.id, patient);
    return patient;
  }

  deletePatient(patientId) {
    const patient = this.findPatientById(patientId);
    if (!patient) throw new Error("Patient not found.");

    this.patienceRepository.delete(patient.id);
    return patient;
  }

  addPatientAllergy(patientId, allergy) {
    const patient = this.findPatientById(patientId);
    if (!patient) throw new Error("Patient not found.");

    if (!(allergy instanceof Allergy)) throw new Error("Allergy must be an instance of Allergy");

    const hasAllergy = patient.allergies.some((allergy) => allergy.equals(allergy));
    if (hasAllergy) throw new Error("Patient already has this allergy");

    patient.allergies.push(allergy);

    this.updatePatient(patient.id, patient);
    return patient;
  }

  addPatientDiagnosis(patientId, diagnosis) {
    const patient = this.findPatientById(patientId);
    if (!patient) throw new Error("Patient not found.");

    if (!(diagnosis instanceof Diagnosis)) throw new Error("Diagnosis must be an instance of Diagnosis");

    patient.medicalRecord.addDiagnosis(diagnosis);

    this.updatePatient(patient.id, patient);
    return patient;
  }

  addPatientMedication(patientId, medication) {
    const patient = this.findPatientById(patientId);
    if (!patient) throw new Error("Patient not found.");

    if (!(medication instanceof Medication)) throw new Error("Medication must be an instance of Medication");

    patient.medicalRecord.addMedication(medication);

    this.updatePatient(patient.id, patient);
    return patient;
  }

  addPatientTreatment(patientId, treatment) {
    const patient = this.findPatientById(patientId);
    if (!patient) throw new Error("Patient not found.");

    if (!(treatment instanceof Treatment)) throw new Error("Treatment must be an instance of Treatment");

    patient.medicalRecord.addTreatment(treatment);

    this.updatePatient(patient.id, patient);
    return patient;
  }
}