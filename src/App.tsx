import countries from './data/countries.json';
import { useAppSelector } from './app/store';
import Navbar from './components/navbar/Navbar.component';
import './App.scss';

const App = () => {
	const { mode } = useAppSelector((state) => state.theme);

	return (
		<div className={`app ${mode}`}>
			<div className="app-container">
				<Navbar mode={mode} />
			</div>
		</div>
	);
};

export default App;
