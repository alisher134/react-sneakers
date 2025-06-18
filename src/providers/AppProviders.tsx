import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

interface Props {
	children: React.ReactNode;
}

export const AppProviders: React.FC<Props> = ({ children }) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster richColors position="top-right" />
			{children}
		</QueryClientProvider>
	);
};
