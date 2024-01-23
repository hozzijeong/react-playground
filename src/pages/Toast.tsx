import { useCallback } from 'react';
import useToast from '../components/@common/toast/useToast';

const Toast = () => {
	const { addToast } = useToast();

	const showToast = useCallback(() => {
		addToast({
			message: '토스트 추가',
			type: 'info',
		});
	}, []);

	return (
		<div>
			<button onClick={showToast}>토스트 띄우기</button>
		</div>
	);
};

export default Toast;
