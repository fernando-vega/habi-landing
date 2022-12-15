import { FC, useState } from 'react';

import { ThemeContext } from 'context/theme-context';
import Layout from './layout';
import './App.scss';

const App: FC = () => {
	const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem('default-theme');
		const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
		return localStorageTheme || browserDefault;
	};

	const [theme, setTheme] = useState(getDefaultTheme());

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={`theme-${theme}`}>
				<Layout>{}</Layout>
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
