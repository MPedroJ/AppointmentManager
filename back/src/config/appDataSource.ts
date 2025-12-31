import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Appointment } from '../entities/Appointment';
import { DB_DROP_SCHEMA, DB_NAME, DB_SYNCHRONIZE, HOST_DB, PASSWORD_DB, PORT_DB, USERNAME_DB } from './envs';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: HOST_DB,
  port: PORT_DB,
  username: USERNAME_DB,
  password: PASSWORD_DB,
  database: DB_NAME,
  dropSchema: DB_DROP_SCHEMA,
  synchronize: DB_SYNCHRONIZE,
  logging: false,
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppointmentModel = AppDataSource.getRepository(Appointment);
