class Patient {
  constructor(id, cpf, name, birthDate, gender, bloodType, allergies, address, phone, email, emergencyContact) {
    this.id = id;
    this.cpf = cpf;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodType = bloodType;
    this.allergies = allergies;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;

    this.medicalHistory = [];
    this.appointments = [];
    this.exams = [];
  }

  scheduleAppointment(appointment) {
    const appointmentOnSameDate = this.appointments.some(
      (c) => c.date === appointment.date
    );

    if (appointmentOnSameDate) {
      throw new Error("Paciente já possui uma consulta agendada para esta data");
    }

    this.appointments.push(appointment);
    console.log(`Consulta agendada para ${this.name} com o medico ${appointment.doctor.name} na data ${appointment.date}`);
  }

  addExam(exam) {
    this.exams.push(exam);
    console.log(`Exame ${exam.type} adicionado para ${this.name}, com resultado ${exam.result}`);
  }

  addMedicalHistoryEvent(event) {
    this.medicalHistory.push(event);
    console.log(`Evento médico adicionado ao histórico do paciente ${this.name}`);
  }
};

module.exports = Patient;