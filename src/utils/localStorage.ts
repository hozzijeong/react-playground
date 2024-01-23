export const getLocalStorage = <T>(key: string, initialValue: T): T => {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	} catch (error) {
		console.warn(`Error reading localStorage key “${key}”:`, error);
		return initialValue;
	}
};

export const setLocalStorage = <T>(key: string, value: T) => {
	const item = JSON.stringify(value);
	localStorage.setItem(key, item);
};

export const removeLocalStorage = (key: string) => {
	const item = localStorage.getItem(key);
	if (item === null) return false;

	localStorage.removeItem(key);

	return true;
};
