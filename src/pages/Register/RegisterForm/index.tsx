import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { ROUTES } from '@/constants/routes';

import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { PasswordInput } from '@/components/ui/PasswordInput';

import styles from './register-from.module.scss';
import { RegisterSchema } from './registerSchema';
import type { RegisterFormValues } from './types';
import { useRegisterForm } from './useRegisterForm';

export const RegisterForm: React.FC = () => {
	const {
		register: registerInput,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormValues>({ mode: 'onChange', resolver: zodResolver(RegisterSchema) });

	const { register, isPending } = useRegisterForm();

	const handleFormSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
		await register(data);
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className={styles['register-form']}>
			<FormField
				registerInput={registerInput('email')}
				id="email"
				type="email"
				label="Введите ваш e-mail"
				error={errors.email}
			/>

			<FormField
				registerInput={registerInput('firstName')}
				id="firstName"
				type="text"
				label="Введите ваш имя"
				error={errors.firstName}
			/>

			<FormField
				registerInput={registerInput('lastName')}
				id="lastName"
				type="text"
				label="Введите ваш фамилия"
				error={errors.lastName}
			/>

			<label htmlFor="password" className={styles['register-form__label']}>
				Введите ваш пароль
			</label>
			<PasswordInput {...registerInput('password')} id="password" error={errors.password} />

			<div className={styles['register-form__actions']}>
				<Button
					type="submit"
					isLoading={isPending}
					size="full"
					className={styles['register-form__actions-button']}
				>
					Регистрация
				</Button>
			</div>

			<div className={styles['register-form__line']} />

			<div className={styles['register-form__register']}>
				<h3 className={styles['register-form__login-title']}>Есть аккаунт?</h3>

				<Button
					asLink
					size="full"
					variant="outline"
					href={ROUTES.auth.login.page}
					className={styles['register-form__login-button']}
				>
					Войти
				</Button>
			</div>
		</form>
	);
};
