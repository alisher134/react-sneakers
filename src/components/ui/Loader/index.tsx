import clsx from 'clsx';
import { LoaderIcon } from 'lucide-react';

import styles from './loader.module.scss';

interface Props {
	className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => {
	return <LoaderIcon className={clsx(styles.loader, className)} />;
};
