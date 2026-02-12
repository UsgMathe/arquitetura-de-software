import { Doctor } from "./src/doctor/Doctor.js";
import { DoctorRepository } from "./src/doctor/DoctorRepository.js";
import { DoctorService } from "./src/doctor/DoctorService.js";

const doctor = new Doctor(
  1,
  "12345",
  "Dr. Smith",
  ["Cardiology"],
  "11987654333"
);

const doctorRepository = new DoctorRepository();
const doctorService = new DoctorService(doctorRepository);
doctorService.addDoctor(doctor);
doctorService.deleteDoctor(1);

console.log(doctorService.findAllDoctors());