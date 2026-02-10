import { WorkingHours } from "./WorkingHours.js";

export class Doctor {
  constructor(id, rcm, name, specialty, phone) {
    this.id = id;
    this.rcm = rcm;
    this.name = name;
    this.specialty = specialty;
    this.phone = phone;
    this.workingHours = new WorkingHours();
  }

  addWorkingHours(day, timeSlot) {
    this.workingHours.addHours(day, timeSlot);
  }

  removeWorkingHours(day, timeSlot) {
    this.workingHours.removeHours(day, timeSlot);
  }

  listWorkingHours() {
    return this.workingHours.listHours();
  }
};