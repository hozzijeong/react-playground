import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ToastProvider } from './components/@common/toast/ToastContext';
import ToastList from './components/@common/toast/ToastList';

function App() {
	return (
		<ToastProvider>
			<RouterProvider router={router} />
			<ToastList />
		</ToastProvider>
	);
}

export default App;
