import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';

import { ROUTES } from '@/constants/routes';

import styles from './login-from.module.scss';
import { LoginSchema } from './loginSchema';
import type { LoginFormValues } from './types';

export const LoginForm: React.FC = () => {
  const {
    register: registerInput,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({ mode: 'onTouched', resolver: zodResolver(LoginSchema) });

  const isLoading = false;

  const handleFormSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles['login-form']}>
      <label htmlFor="email" className={styles['login-form__label']}>
        Введите ваш e-mail
      </label>
      <Input
        {...registerInput('email')}
        id="email"
        type="email"
        error={errors.email}
        className={styles['login-form__input']}
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
          isLoading={isLoading}
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
