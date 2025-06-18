import { RegisterForm } from './RegisterForm';
import styles from './register.module.scss';

const RegisterPage: React.FC = () => {
	return (
		<div className={styles.register}>
			<h1 className={styles.register__title}>Регистрация</h1>

			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
