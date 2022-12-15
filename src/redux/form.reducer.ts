import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		value: false,
	},
	reducers: {
		stateForm: (state) => {
			state.value = true;
		},
	},
});

export const { stateForm } = formSlice.actions;

export default formSlice.reducer;
