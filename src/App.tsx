import { useState, useEffect } from 'react';
import { useAppSelector } from './app/store';
import Navbar from './components/navbar/Navbar.component';
import Countries, { Country } from './components/countries/Countries.component';
import './App.scss';

const App = () => {
	const [countries, setCountries] = useState([]);
	const { mode } = useAppSelector((state) => state.theme);

	const fetchCountries = async () => {
		const response = await fetch('https://restcountries.com/v3.1/all');
		const data = await response.json();
		setCountries(data);
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<div className={`app ${mode}`}>
			<div className="app-container">
				<Navbar mode={mode} />
				<Countries countries={countries as Country[]} />
			</div>
		</div>
	);
};

export default App;
