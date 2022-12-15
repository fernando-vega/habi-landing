import { FC, ReactNode } from 'react';
import Form from './Form/Form';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import './styles.scss';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="layout-wrapper">
			<div className="main-wrapper">
				<Header />
				<Hero />
				<Form />
				{children}
			</div>
		</div>
	);
};

export default Layout;
