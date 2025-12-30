import { AppointmentStatus } from '../enums/appoitmentStatus';
import { IUser } from './IUser';

export interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: IUser;
  status: AppointmentStatus;
}
