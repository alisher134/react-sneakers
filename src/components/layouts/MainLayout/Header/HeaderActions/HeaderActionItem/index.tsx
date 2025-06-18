import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './header-action-item.module.scss';

interface Props {
	label: string;
	icon: React.ReactNode;
	as?: 'link' | 'button';
	to?: string;
	onClick?: () => void;
}

export const HeaderActionItem: React.FC<Props> = ({
	label,
	icon,
	as = 'button',
	to = '/',
	onClick,
}) => {
	const classes = clsx(styles['header-action__item'], styles[`header-action__${as}`]);

	if (as === 'link') {
		return (
			<Link to={to} className={classes}>
				{icon} <span className={styles['header-action__text']}>{label}</span>
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={classes}>
			{icon} <span className={styles['header-action__text']}>{label}</span>
		</button>
	);
};
