class Exam {
  constructor(id, type, result, date, local, responsible, patient) {
    this.id = id;
    this.type = type;
    this.result = result;
    this.date = date;
    this.local = local;
    this.responsavel = responsible;
    this.patient = patient;
  }
};

module.exports = Exam;