class MedicalRecord {
  constructor(id, patient, diagnoses, treatments, medications) {
    this.id = id;
    this.patient = patient;
    this.diagnoses = [];
    this.treatments = [];
    this.medications = [];
  }

  addDiagnosis(diagnosis) {
    this.diagnoses.push(diagnosis);
    console.log(`Diagnostico ${diagnosis} adicionado ao prontuario do paciente ${this.patient.name}`);
  }

  addTreatment(treatment) {
    this.treatments.push(treatment);
    console.log(`Tratamento ${treatment} adicionado ao prontuario do paciente ${this.patient.name}`);
  }

  addMedication(medication) {
    this.medications.push(medication);
    console.log(`Medicamento ${medication} adicionado ao prontuario do paciente ${this.patient.name}`);
  }
};

module.exports = MedicalRecord;