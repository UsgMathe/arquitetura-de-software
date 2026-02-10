export class Diagnosis {
  constructor(description) {
    this.description = description;
  }

  equals(other) {
    return this.description === other.description;
  }
}