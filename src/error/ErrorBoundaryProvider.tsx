import { createContext } from 'react';
import StatusError from './statusError';

export interface ResetErrorBoundaryContextProps {
	error: Error | StatusError | null;
	reset: () => void;
}

export const ResetErrorBoundaryContext =
	createContext<ResetErrorBoundaryContextProps | null>(null);

const ResetErrorBoundaryProvider = (
	props: React.PropsWithChildren<ResetErrorBoundaryContextProps>
) => {
	const { children, reset, error } = props;

	return (
		<ResetErrorBoundaryContext.Provider value={{ reset, error }}>
			{children}
		</ResetErrorBoundaryContext.Provider>
	);
};

export default ResetErrorBoundaryProvider;
