import { useCallback, useContext } from 'react';
import { ToastContext, ToastItem } from './ToastContext';

const useToast = () => {
	const toastContext = useContext(ToastContext);

	if (toastContext === null) {
		throw new Error('ToastProvider 내부에서 사용해주세요');
	}

	const { toastItem, setToastItem } = toastContext;

	const addToast = useCallback(
		(props: Omit<ToastItem, 'id'>) => {
			const id = self.crypto.randomUUID();

			setToastItem((prev) => [...prev, { ...props, id }]);
		},
		[setToastItem]
	);

	return { toastItem, addToast, setToastItem };
};

export default useToast;
