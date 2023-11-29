import { memo, useCallback, useMemo, useState } from 'react';
import Box, { BoxColor } from '../components/@common/box/Box';

const MemoizationBox = memo(Box);

const switchBoxColor = (color: BoxColor) => {
	switch (color) {
		case 'black':
			return 'red';
		case 'red':
			return 'blue';
		case 'blue':
			return 'yellow';
		case 'yellow':
			return 'black';
	}
};

const useBoxHandler = ({ count = 1 }: { count?: number }) => {
	const boxObj = useMemo(() => ({ number: count }), [count]);
	const boxClickHandler = useCallback(
		() => console.log(`box${count}ClickHandler`),
		[count]
	);

	return { boxObj, boxClickHandler };
};

const Memoization = () => {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState<BoxColor>('black');

	const { boxObj: box1Obj, boxClickHandler: box1ClickHandler } = useBoxHandler(
		{}
	);
	const { boxObj: box2Obj, boxClickHandler: box2ClickHandler } = useBoxHandler({
		count,
	});

	console.log(`렌더링 횟수: ${count}`);

	const reRenderHandler = () => {
		setCount((prev) => prev + 1);
	};

	const changeColorHandler = () => {
		setColor((prev) => switchBoxColor(prev));
	};

	return (
		<div>
			<button type='button' onClick={reRenderHandler}>
				렌더링 추가
			</button>
			<button type='button' onClick={changeColorHandler}>
				색 변경
			</button>
			<MemoizationBox color={color} obj={box1Obj} onClick={box1ClickHandler} />
			<MemoizationBox obj={box2Obj} onClick={box2ClickHandler} />
		</div>
	);
};

export default Memoization;
