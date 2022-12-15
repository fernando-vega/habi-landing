import { FC, useState } from 'react';
import './App.scss';

const App: FC = () => {
	const isBrowserDefaulDark = () =>
		window.matchMedia('(prefers-color-scheme: dark)').matches;

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem('default-theme');
		const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
		return localStorageTheme || browserDefault;
	};

	const [theme, setTheme] = useState(getDefaultTheme());

	return (
		<></>
	);
};

export default App;
