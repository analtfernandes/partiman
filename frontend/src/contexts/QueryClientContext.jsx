import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export function QueryClientContextProvider({ children }) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
