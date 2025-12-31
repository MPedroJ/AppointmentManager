import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateLogin from '../../helpers/validateLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  return (
    <div className={styles.loginBox}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validateLogin}
        onSubmit={async (values) => {
          try {
            const response = await axios.post('/api/users/login', values);
            if (response.status === 200) {
              localStorage.setItem('user', JSON.stringify(response.data));

              alert(`Usuario ${values.username} logueado con exito`);
              login(response.data);
              navigate('/');
            }
          } catch (error) {
            console.error(error);
            alert(`Hubo un error  al iniciar sesion`);
          }
        }}
      >
        <Form className={styles.loginForm}>
          <label>Nombre de Usuario</label>
          <Field className={styles.loginImput} type="text" name="username" placeholder="lechugaCosmica"></Field>
          <ErrorMessage component="div" className={styles.errorMessage} name="username" />
          <label>Contraseña</label>
          <Field className={styles.loginImput} type="password" name="password"></Field>
          <ErrorMessage component="div" className={styles.errorMessage} name="password" />
          <button type="submit">Iniciar Sesion</button>
        </Form>
      </Formik>
      <Link className={styles.register} to="/users/register">
        Registrarse
      </Link>
    </div>
  );
};

export default Login;
