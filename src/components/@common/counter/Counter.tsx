import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const clickHandler = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={clickHandler}>Click me</button>
		</div>
	);
};

export default Counter;
