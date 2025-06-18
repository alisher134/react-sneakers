import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { PasswordInput } from '@/components/ui/PasswordInput';

import styles from './login-form.module.scss';
import { LoginSchema } from './loginSchema';
import type { LoginFormValues } from './types';
import { useLoginForm } from './useLoginForm';

export const LoginForm: React.FC = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
	} = useForm<LoginFormValues>({ mode: 'onTouched', resolver: zodResolver(LoginSchema) });

	const { login, isPending } = useLoginForm();

	const handleFormSubmit: SubmitHandler<LoginFormValues> = async (data) => {
		await login(data);
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className={styles['login-form']}>
			<FormField
				registerInput={registerInput('email')}
				id="email"
				type="email"
				label="Введите ваш e-mail"
				error={errors.email}
			/>

			<label htmlFor="password" className={styles['login-form__label']}>
				Введите ваш пароль
			</label>
			<PasswordInput
				{...registerInput('password')}
				id="password"
				error={errors.password}
				className={styles['login-form__input']}
			/>

			<Link to={ROUTES.auth.forgot_password.page} className={styles['login-form__forgot-password']}>
				Забыли пароль?
			</Link>

			<div className={styles['login-form__actions']}>
				<Button
					type="submit"
					isLoading={isPending}
					size="full"
					className={styles['login-form__actions-button']}
				>
					Войти
				</Button>
			</div>
			<div className={styles['login-form__line']} />
			<div className={styles['login-form__register']}>
				<h3 className={styles['login-form__register-title']}>Нет аккаунта?</h3>

				<Button
					asLink
					size="full"
					variant="outline"
					href={ROUTES.auth.register.page}
					className={styles['login-form__register-button']}
				>
					Зарегистрируйтесь
				</Button>
			</div>
		</form>
	);
};
