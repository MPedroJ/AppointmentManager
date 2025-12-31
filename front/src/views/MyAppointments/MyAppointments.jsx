import Appointment from '../../components/Appointment/Appointment';
import styles from './MyAppointments.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const MyAppointments = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        navigate('/');
      } else {
        axios.get(`/api/appointments/user/${user.newLogin.id}`).then((response) => {
          setAppointment(response.data.appointments);
        });
      }
    } catch (error) {
      console.error(error);
      setError('Ocurrio un error al cargar los turnos');
    }
  }, [navigate]);

  const handleOnCancel = async (id) => {
    try {
      await axios.put(`/api/appointments/cancel/${id}`);
      setAppointment((renderAppoints) => renderAppoints.map((appointment) => (appointment.id === id ? { ...appointment, status: 'cancelado' } : appointment)));
      alert('Se ha cancelado el turno');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Mis turnos</h1>
      <Link to="/appointments/schedule">
        <button className={styles.newTurnButton}>Nuevo Turno</button>
      </Link>
      <div className={styles.cardContainer}>
        {error ? (
          <h2>{error}</h2>
        ) : (
          appointment.map((appoint) => {
            return <Appointment key={appoint.id} appointment={appoint} onCancel={handleOnCancel} />;
          })
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
