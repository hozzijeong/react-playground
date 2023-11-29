import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Memoization from './pages/Memoization';
import { URL_PATH } from './constants/urls';

const router = createBrowserRouter([
	{
		path: URL_PATH.home,
		element: <Root />,
		children: [
			{
				path: URL_PATH.memoization,
				element: <Memoization />,
			},
		],
	},
]);

export default router;
