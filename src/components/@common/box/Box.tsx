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

	console.log(`${obj.number} box 렌더링, color: ${color}`, onClick());

	return <div className={className} />;
};

export default Box;
