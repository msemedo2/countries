import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/store';
import { fetchCountries } from './app/features/countriesSlice';
import Navbar from './components/navbar/Navbar.component';
import Countries, { Country } from './components/countries/Countries.component';
import './App.scss';

const App = () => {
	const dispatch = useAppDispatch();
	const countries = useAppSelector((state) => state.countries.countries);
	const { mode } = useAppSelector((state) => state.theme);

	useEffect(() => {
		dispatch(fetchCountries());
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
