import { Router } from 'express';
import { cancelAppointment, getAllApointments, getAppointment, getAppointmentByUserId, newAppointment } from '../controllers/appointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.get('/', getAllApointments);
appointmentsRouter.get('/user/:id', getAppointmentByUserId);
appointmentsRouter.get('/:id', getAppointment);
appointmentsRouter.post('/schedule', newAppointment);
appointmentsRouter.put('/cancel/:id', cancelAppointment);

export default appointmentsRouter;
