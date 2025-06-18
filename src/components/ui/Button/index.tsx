import clsx from 'clsx';
import type React from 'react';

import { Loader } from '../Loader';

import styles from './button.module.scss';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends ButtonType {
  children: React.ReactNode;
  asLink?: boolean;
  size?: 'small' | 'medium' | 'lg' | 'full';
  variant?: 'primary' | 'secondary' | 'outline';
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  size = 'medium',
  variant = 'primary',
  asLink = false,
  isLoading = false,
  preffix,
  suffix,
  className,
  ...props
}) => {
  const Component = asLink ? 'a' : 'button';

  if (isLoading) {
    return (
      <Component
        className={clsx(styles.button, styles[size], styles[variant], styles.isLoading, className)}
        disabled
        {...props}
      >
        <div className={styles.button__container}>
          <Loader />
        </div>
      </Component>
    );
  }

  return (
    <Component className={clsx(styles.button, styles[size], styles[variant], className)} {...props}>
      <div className={styles.button__container}>
        <span className={styles.button__preffix}>{preffix}</span>
        {children}
        <span className={styles.button__suffix}>{suffix}</span>
      </div>
    </Component>
  );
};
