export class Medication {
  constructor(name, dosage) {
    this.name = name;
    this.dosage = dosage;
  }

  equals(other) {
    return this.name === other.name && this.dosage === other.dosage;
  }
}