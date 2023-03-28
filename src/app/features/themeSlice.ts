import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
	mode: string;
	text: string;
	icon: string;
}

const initialState: ThemeState = {
	mode: '',
	text: 'Dark Mode',
	icon: '-regular',
};

const ThemeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			state.mode = action.payload.mode;
			state.text = action.payload.text;
			state.icon = action.payload.icon;
		},
	},
});

export default ThemeSlice.reducer;
export const { changeTheme } = ThemeSlice.actions;
