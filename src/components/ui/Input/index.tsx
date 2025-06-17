import clsx from 'clsx';
import { type InputHTMLAttributes, forwardRef } from 'react';
import type { FieldError } from 'react-hook-form';

import styles from './input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError;
}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ className, error, ...props }) => {
    return (
      <div className={clsx(styles.wrapper, className)}>
        <input type="text" className={styles.input} {...props} />
        {error && <p className={styles.error}>{error?.message}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
