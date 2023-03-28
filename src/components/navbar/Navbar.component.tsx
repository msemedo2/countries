import { useAppDispatch, useAppSelector } from '../../app/store';
import { changeTheme } from '../../app/features/themeSlice';

import './Navbar.styles.scss';

interface NavbarProps {
	mode: string;
}

const Navbar = ({ mode }: NavbarProps) => {
	const { text, icon } = useAppSelector((state) => state.theme);
	const dispatch = useAppDispatch();

	const toggleTheme = () => {
		const newTheme = {
			mode: mode === '' ? 'dark-mode' : '',
			text: mode === '' ? 'Light Mode' : 'Dark Mode',
			icon: mode === '' ? 's' : '-regular',
		};
		dispatch(changeTheme(newTheme));
	};

	return (
		<div className="navbar-container">
			<div className="navbar">
				<h1>Where in the world?</h1>
				<div className="theme-container" onClick={toggleTheme}>
					<i className={`fa${icon} fa-moon`} />
					<span>{text}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
