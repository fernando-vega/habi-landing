import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../form.reducer';
import { rootReducer } from '../rootSlice.reducer';

export default configureStore({
	reducer: {
		form: formSlice,
		root: rootReducer,
	},
});
