import { useCallback, useEffect, useState } from 'react';
import styles from './Box.module.scss';

const boxColor = ['red', 'blue', 'yellow', 'black'] as const;
export type BoxColor = (typeof boxColor)[number];

interface BoxProps {
	color?: BoxColor;
	obj: {
		number: number;
	};
	onClick: () => void;
}

const Box = ({ color = 'black', obj, onClick }: BoxProps) => {
	const className = `${styles.box} ${styles[color]}`;
	const [count, setCount] = useState(0);
	console.log(`${obj.number} box 렌더링, color: ${color}`, onClick());

	// 원레는 값이 리렌더링 될 때 새롭게 값이 만들어지는데 여기서는 그렇지 않음.
	const boxCallback = useCallback(() => {
		console.log(`${obj.number} boxCallback`);
	}, [obj.number]);

	const box2Callback = useCallback(() => {
		console.log(`${count} box2Callback`);
	}, [count]);

	useEffect(() => {
		box2Callback();
	}, [box2Callback]);

	useEffect(() => {
		boxCallback();
	}, [boxCallback]);

	return (
		<div className={className} onClick={() => setCount((prev) => prev + 1)} />
	);
};

export default Box;
