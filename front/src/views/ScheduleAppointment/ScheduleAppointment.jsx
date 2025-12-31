import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import validateSchedule from '../../helpers/validateSchedule';
import { useNavigate } from 'react-router-dom';
import styles from './ScheduleAppointment.module.css';

const ScheduleAppointment = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ date: '', time: '' }}
      validate={validateSchedule}
      onSubmit={async (values, { resetForm }) => {
        try {
          const user = JSON.parse(localStorage.getItem('user'));
          if (!user) {
            alert('Usuario no encontrado, inicie sesion');
            return;
          }

          const scheduleData = {
            ...values,
            userId: user.newLogin.id,
          };

          const response = await axios.post('/api/appointments/schedule', scheduleData);

          if (response.status === 201) {
            alert(`Turno agendado para el dia ${values.date}`);
          }
          resetForm();
          navigate('/appointments');
        } catch (error) {
          console.error(error);
          alert('No se pudo agendar el turno');
        }
      }}
    >
      <Form className={styles.appointmentBox}>
        <label>Fecha</label>
        <Field className={styles.appointmentInputs} type="date" name="date"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="date" />
        <label>Horario</label>
        <Field className={styles.appointmentInputs} type="time" name="time" step="1800"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="time" />
        <button type="submit">Agendar turno</button>
      </Form>
    </Formik>
  );
};

export default ScheduleAppointment;
