import { Doctor } from "./Doctor.js";

export class DoctorService {
  constructor(doctorRepository) {
    this.doctorRepository = doctorRepository;
  }

  addDoctor(doctorData) {
    const doctor = new Doctor(
      doctorData.id,
      doctorData.rcm,
      doctorData.name,
      doctorData.specialties,
      doctorData.phone
    );
    this.doctorRepository.add(doctor.id, doctor);
    return doctor;
  }

  findDoctorById(doctorId) {
    return this.doctorRepository.findById(doctorId);
  }

  findDoctorByName(name) {
    return this.doctorRepository.findByName(name);
  }

  findDoctorBySpecialty(specialty) {
    return this.doctorRepository.findBySpecialty(specialty);
  }

  findAllDoctors() {
    return this.doctorRepository.findAll();
  }

  updateDoctor(doctorId, updatedData) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");
    Object.assign(doctor, updatedData);
    this.doctorRepository.update(doctorId, doctor);
    return doctor;
  }

  deleteDoctor(doctorId) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");
    this.doctorRepository.delete(doctorId);
    return doctor;
  }


  addDoctorWorkingHours(doctorId, day, timeSlot) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");

    const hasWorkingHours = doctor.workingHours.hours.some(
      (workingHours) => workingHours.day === day && workingHours.timeSlot === timeSlot
    );
    if (hasWorkingHours) throw new Error("Doctor already has working hours for this day and time slot");

    Object.assign(doctor.workingHours, { day, timeSlot });

    this.updateDoctor(doctor.id, doctor);
    return doctor;
  }

  addDoctorSpecialty(doctorId, specialty) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");
    if (doctor.specialties.includes(specialty)) throw new Error("Doctor already has this specialty");

    doctor.addSpecialty(specialty);
    this.updateDoctor(doctor.id, doctor);
    return doctor;
  }

  removeDoctorWorkingHours(doctorId, day, timeSlot) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");

    doctor.workingHours = doctor.workingHours.hours.filter(
      (workingHours) => workingHours.day !== day || workingHours.timeSlot !== timeSlot
    );
    this.updateDoctor(doctor.id, doctor);
    return doctor;
  }

  removeDoctorSpecialty(doctorId, specialty) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");
    if (!doctor.specialties.includes(specialty)) throw new Error("Doctor does not have this specialty");
    doctor.removeSpecialty(specialty);
    this.updateDoctor(doctor.id, doctor);
    return doctor;
  }

  listDoctorWorkingHours(doctorId) {
    const doctor = this.findDoctorById(doctorId);
    if (!doctor) throw new Error("Doctor not found");
    return doctor.workingHours;
  }

}