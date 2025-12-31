import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import styles from './LoginButton.module.css';

const LoginButton = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <ul>
        {!user && (
          <Link className={styles.login} to="/users/login">
            INICIAR SESION
          </Link>
        )}
        {user && (
          <Link className={styles.logout} onClick={handleLogout} to="/">
            CERRAR SESION
          </Link>
        )}
      </ul>
    </div>
  );
};

export default LoginButton;
