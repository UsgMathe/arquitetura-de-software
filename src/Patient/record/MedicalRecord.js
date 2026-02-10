import { Diagnosis } from "./Diagnosis.js";
import { Medication } from "./Medication.js";
import { Treatment } from "./Treatment.js";

export class MedicalRecord {
  constructor() {
    this.diagnoses = [];
    this.treatments = [];
    this.medications = [];
  }

  addDiagnosis(diagnosis) {
    if (!(diagnosis instanceof Diagnosis)) throw new Error("Diagnosis must be an instance of Diagnosis");
    this.diagnoses.push(diagnosis);
  }

  addTreatment(treatment) {
    if (!(treatment instanceof Treatment)) throw new Error("Treatment must be an instance of Treatment");
    this.treatments.push(treatment);
  }

  addMedication(medication) {
    if (!(medication instanceof Medication)) throw new Error("Medication must be an instance of Medication");
    this.medications.push(medication);
  }

  equals(otherRecord) {
    if (!(otherRecord instanceof MedicalRecord)) return false;

    if (
      this.diagnoses.length !== otherRecord.diagnoses.length ||
      this.treatments.length !== otherRecord.treatments.length ||
      this.medications.length !== otherRecord.medications.length
    ) return false;

    return (
      this.diagnoses.every((diagnosis, index) => diagnosis.equals(otherRecord.diagnoses[index])) &&
      this.treatments.every((treatment, index) => treatment.equals(otherRecord.treatments[index])) &&
      this.medications.every((medication, index) => medication.equals(otherRecord.medications[index]))
    );
  }
};