export class Allergy {
  constructor(type) {
    this.type = type;
  }

  equals(otherAllergy) {
    if (!(otherAllergy instanceof Allergy)) return false;
    return this.type === otherAllergy.type;
  }
}