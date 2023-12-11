import { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCount((p) => p + 1);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};

export default Counter;
