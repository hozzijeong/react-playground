import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Memoization from './pages/Memoization';
import { URL_PATH } from './constants/urls';
import SyncExternalStore from './pages/SyncExternalStore';
import Effect from './pages/Effect';
import Modal from './pages/Modal';
import { ModalProvider } from './components/@common/modal/ModalProvider';
import SuspenseRender from './pages/SuspenseRender';
import Toast from './pages/Toast';

const router = createBrowserRouter([
	{
		path: URL_PATH.home,
		element: <Root />,
		children: [
			{
				path: URL_PATH.memoization,
				element: <Memoization />,
			},
			{
				path: URL_PATH.externalStore,
				element: <SyncExternalStore />,
			},
			{
				path: URL_PATH.effect,
				element: <Effect />,
			},
			{
				path: URL_PATH.modal,
				element: (
					<ModalProvider>
						<Modal />
					</ModalProvider>
				),
			},
			{
				path: URL_PATH.suspenseRender,
				element: <SuspenseRender />,
			},
			{
				path: URL_PATH.toast,
				element: <Toast />,
			},
		],
	},
]);

export default router;
