import { AppProviders } from './providers/AppProviders';
import { AppRouter } from './providers/AppRouter';

export const App: React.FC = () => {
	return (
		<AppProviders>
			<AppRouter />
		</AppProviders>
	);
};
