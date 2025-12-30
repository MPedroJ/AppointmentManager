import { PORT } from './config/envs';
import server from './server';
import 'reflect-metadata';
import { AppDataSource } from './config/appDataSource';
// import { preloadAppointmentData, preloadCredentialsData, preloadUserData } from "./helpers/preloadedData";

const initializeApp = async () => {
  await AppDataSource.initialize();
  // await preloadCredentialsData()
  // await preloadUserData()
  // await preloadAppointmentData()
  server.listen(PORT, () => {
    console.log(`The server is listening on the PORT ${PORT}`);
  });
};

initializeApp();
