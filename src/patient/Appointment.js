export class Appointment {
  constructor(id, date, patient, doctor, reason, status, notes) {
    this.id = id;
    this.date = date;
    this.patient = patient;
    this.doctor = doctor;
    this.reason = reason;
    this.status = status;
    this.notes = notes;
  }

  hasConflict(otherAppointment) {
    return (
      this.date === otherAppointment.date &&
      this.patient === otherAppointment.patient &&
      this.doctor === otherAppointment.doctor &&
      this.status === otherAppointment.status &&
      this.notes === otherAppointment.notes
    );
  }
}