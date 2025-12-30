import { AppointmentStatus } from '../enums/appoitmentStatus';
import { INewAppointment } from '../dto/AppointmentDto';
import { AppointmentModel, UserModel } from '../config/appDataSource';

export const getAllAppointmentsService = async () => {
  try {
    const appointments = await AppointmentModel.find({
      relations: {
        user: true,
      },
    });
    return appointments;
  } catch (error) {
    console.error('No se encontraron los turnos', error);
  }
};

export const getAppointmentService = async ({ id }: { id: number }) => {
  const appointmentFound = AppointmentModel.findOne({
    where: { id: id },
    relations: {
      user: true,
    },
  });
  if (!appointmentFound) {
    throw new Error('No se  encontro el turno');
  }
  return appointmentFound;
};

export const newAppointmentService = async (newAppointmentData: INewAppointment) => {
  const userFound = await UserModel.findOneBy({ id: newAppointmentData.userId });
  if (!userFound) throw new Error('No se encontro el usuario  para guardar el turno');

  const existing = await AppointmentModel.findOne({
    where: { user: { id: userFound.id }, date: newAppointmentData.date, time: newAppointmentData.time },
  });

  if (existing) throw new Error('Un usuario no puede agendar un turno si ya tiene uno en ese dia y horario.');

  const appointment = await AppointmentModel.create({
    date: newAppointmentData.date,
    time: newAppointmentData.time,
    status: AppointmentStatus.Active,
    user: userFound,
  });
  const savedAppointment = await AppointmentModel.save(appointment);
  return savedAppointment;
};

export const cancelAppointmentService = async ({ id }: { id: number }) => {
  const appointmentToCancel = await AppointmentModel.findOneBy({
    id: id,
  });
  if (!appointmentToCancel) {
    throw new Error('El turno no existe');
  }
  if (appointmentToCancel.status === 'cancelado') {
    throw new Error('El turno ya estaba cancelado');
  }
  appointmentToCancel.status = AppointmentStatus.Cancelled;
  await AppointmentModel.save(appointmentToCancel);
  return appointmentToCancel;
};
