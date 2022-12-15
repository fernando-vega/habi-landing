import { FC, useContext } from 'react';
import { ThemeContext } from 'context/theme-context';
import './Header.scss';

import logoIcon from 'assets/icons/logo-icon.png';

const Header: FC = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeChange = () => {
		const isCurrentDark = theme === 'dark';
		setTheme(isCurrentDark ? 'light' : 'dark');
		localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
	};

	return (
		<header className="header">
			<div className="header-content">
				<a href="/" className="logo-section">
					<img src={logoIcon} alt="logo" />
				</a>
				<div className="toggle-btn-section">
					<div className={`toggle-checkbox m-vertical-auto`}>
						<input className="toggle-btn__input" type="checkbox" name="checkbox" onChange={handleThemeChange} checked={theme === 'light'} />
						<button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
