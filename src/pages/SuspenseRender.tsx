import { Suspense, useState } from 'react';
import { Counter } from '../components/@common';

interface TestProps {
	isLoading: boolean;
}

const SuspenseCounter = ({ isLoading }: TestProps) => {
	if (isLoading) {
		throw new Promise((resolve) => resolve);
	}

	return <Counter />;
};

const LoadingCounter = ({ isLoading }: TestProps) => {
	if (isLoading) {
		return <div>로딩중..</div>;
	}

	return <Counter />;
};

const SuspenseRender = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div>
			<Suspense fallback={<div>로딩중..</div>}>
				<SuspenseCounter isLoading={isLoading} />
			</Suspense>

			<LoadingCounter isLoading={isLoading} />

			<button
				onClick={() => {
					setIsLoading(true);
					setTimeout(() => setIsLoading(false), 3000);
				}}
			>
				서스펜스 동작
			</button>
		</div>
	);
};

export default SuspenseRender;
