import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Country {
	cca2: string;
	flags: { png: string };
	name: { common: string };
	population: number;
	region: string;
	capital: string;
}

interface CountriesState {
	countries: Country[];
}

const initialState: CountriesState = {
	countries: [],
};

export const fetchCountries = createAsyncThunk(
	'countries/fetchCountries',
	async () => {
		const response = await fetch('https://restcountries.com/v3.1/all');
		const data = await response.json();
		return data;
	}
);

const CountriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			state.countries = action.payload;
		});
	},
});

export default CountriesSlice.reducer;
