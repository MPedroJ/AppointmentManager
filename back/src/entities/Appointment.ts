import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppointmentStatus } from '../enums/appoitmentStatus';
import { User } from './User';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
  })
  date: Date;

  @Column({
    type: 'time',
  })
  time: string;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.Active,
  })
  status: AppointmentStatus;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
