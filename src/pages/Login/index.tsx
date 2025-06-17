import { LoginForm } from './LoginForm';
import styles from './login.module.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
