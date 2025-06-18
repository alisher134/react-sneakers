import { LoginForm } from './LoginForm';
import styles from './login.module.scss';

const LoginPage: React.FC = () => {
	return (
		<div className={styles.login}>
			<h1 className={styles.login__title}>Авторизация</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
