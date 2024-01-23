import { Component } from 'react';
import StatusError from './statusError';
import ResetErrorBoundaryProvider from './ErrorBoundaryProvider';

export interface ErrorBoundaryProps {
	fallback?: React.ReactNode;
	statusCode?: StatusError['statusCode'];
}

export interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | StatusError | null;
}

class ErrorBoundary extends Component<
	React.PropsWithChildren<ErrorBoundaryProps>,
	ErrorBoundaryState
> {
	constructor(props: React.PropsWithChildren<ErrorBoundaryProps>) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
		this.reset = this.reset.bind(this);
	}

	static getDerivedStateFromError(error: Error | StatusError) {
		if (error instanceof StatusError) {
			return {
				hasError: true,
				error,
				statusCode: error.statusCode,
			};
		}

		return { hasError: true, error };
	}

	reset() {
		this.setState({
			hasError: false,
			error: null,
		});
	}

	render() {
		const { children, fallback } = this.props;
		const { error, hasError } = this.state;

		return (
			<ResetErrorBoundaryProvider reset={this.reset} error={error}>
				{hasError ? fallback : children}
			</ResetErrorBoundaryProvider>
		);
	}
}

export default ErrorBoundary;
