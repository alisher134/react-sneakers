import { Eye, EyeClosed } from 'lucide-react';
import { type InputHTMLAttributes, useState } from 'react';
import type { FieldError } from 'react-hook-form';

import { Input } from '../Input';

import styles from './password-input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: FieldError;
}

export const PasswordInput: React.FC<Props> = ({ error, ...props }) => {
	const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

	return (
		<Input
			error={error}
			type={isVisiblePassword ? 'text' : 'password'}
			suffix={
				<button
					type="button"
					onClick={() => setIsVisiblePassword((prev) => !prev)}
					className={styles['input-button']}
				>
					{isVisiblePassword ? <EyeClosed /> : <Eye />}
				</button>
			}
			{...props}
		/>
	);
};
