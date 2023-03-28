import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './features/themeSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
	reducer: {
		theme: ThemeSlice,
	},
});

export default store;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
