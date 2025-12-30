import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateRegister from '../../helpers/validateRegister';
import styles from './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ name: '', email: '', birthdate: '', nDni: '', username: '', password: '', confirmPassword: '' }}
      validate={validateRegister}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await axios.post('http://localhost:3000/users/register', values);
          if (response.status === 201) {
            alert(`Usario ${values.username} creado con exito!`);
          }
          resetForm();
          navigate('/');
        } catch (error) {
          console.error(error);
          alert('Hubo un  error al registar el usuario');
        }
      }}
    >
      <Form className={styles.registerBox}>
        <label>Nombre Completo</label>
        <Field className={styles.registerInputs} type="text" name="name" placeholder="Cosme Fulanito"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="name" />
        <label>E-Mail</label>
        <Field className={styles.registerInputs} type="email" name="email" placeholder="ejemplo@mail.com"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="email" />
        <label>Fecha de nacimiento</label>
        <Field className={styles.registerInputs} type="date" name="birthdate"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="birthdate" />
        <label>Numero de DNI</label>
        <Field className={styles.registerInputs} type="number" name="nDni"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="nDni" />
        <label>Nombre de Usuario</label>
        <Field className={styles.registerInputs} type="text" name="username" placeholder="lechugaCosmica"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="username" />
        <label>Contraseña</label>
        <Field className={styles.registerInputs} type="password" name="password"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="password" />
        <label>Confirmar Contraseña</label>
        <Field className={styles.registerInputs} type="password" name="confirmPassword"></Field>
        <ErrorMessage component="div" className={styles.errorMessage} name="confirmPassword" />
        <button type="submit">Registrarse</button>
      </Form>
    </Formik>
  );
};

export default Register;
