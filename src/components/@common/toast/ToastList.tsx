import { Fragment, memo } from 'react';
import { createPortal } from 'react-dom';
import useToast from './useToast';

import styles from './Toast.module.scss';
import Toast from './Toast';

const ToastList = () => {
	const { toastItem } = useToast();
	const root = document.getElementById('toast-root') ?? document.body;

	return createPortal(
		<Fragment>
			{toastItem.length > 0 && (
				<div className={styles['toast-list-wrapper']} aria-live='assertive'>
					{toastItem.map((props) => (
						<Toast key={props.id} {...props} />
					))}
				</div>
			)}
		</Fragment>,
		root
	);
};

export default memo(ToastList);
