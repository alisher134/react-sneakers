import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import styles from './login-from.module.scss';
import type { LoginFormValues } from './types';

export const LoginForm: React.FC = () => {
  const {
    register: registerInput,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: 'onTouched' });

  return (
    <form className={styles['login-form']}>
      <label htmlFor="email" className={styles['login-form__label']}>
        Введите ваш e-mail
      </label>
      <Input
        {...registerInput('email', { required: 'Email is required' })}
        id="email"
        error={errors.email}
        className={styles['login-form__input']}
      />

      <label htmlFor="password" className={styles['login-form__label']}>
        Введите ваш пароль
      </label>
      <Input
        {...registerInput('password', { required: 'Password is required' })}
        id="password"
        error={errors.password}
        className={styles['login-form__input']}
      />

      <div className={styles['login-form__actions']}>
        <Button size="lg" className={styles['login-form__actions-button']}>
          Войти
        </Button>
      </div>
    </form>
  );
};
