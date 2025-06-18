import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { Input } from '../Input';

import styles from './form-field.module.scss';

interface Props {
	className?: string;
	label: string;
	id: string;
	type: string;
	registerInput: UseFormRegisterReturn;
	error?: FieldError;
}

export const FormField: React.FC<Props> = ({ label, id, type, registerInput, error }) => {
	return (
		<>
			<label htmlFor="email" className={styles['form-field__label']}>
				{label}
			</label>
			<Input
				{...registerInput}
				id={id}
				type={type}
				error={error}
				className={styles['form-field__input']}
			/>
		</>
	);
};
