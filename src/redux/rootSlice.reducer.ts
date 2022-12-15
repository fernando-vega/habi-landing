import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
	name: 'root',
	initialState: {
		name: '',
		email: '',
		address: '',
		floor: '',
		extras: '',
		parking: '',
		amount: '',
		photo: '',
		lift: '',
	},
	reducers: {
		completeName: (state, action) => {
			state.name = action.payload;
		},
		completeEmail: (state, action) => {
			state.email = action.payload;
		},
		completeAddress: (state, action) => {
			state.address = action.payload;
		},
		completeFloor: (state, action) => {
			state.floor = action.payload;
		},
		completeExtras: (state, action) => {
			state.extras = action.payload;
		},
		completeParking: (state, action) => {
			state.parking = action.payload;
		},
		completeAmount: (state, action) => {
			state.amount = action.payload;
		},
		completePhoto: (state, action) => {
			state.photo = action.payload;
		},
		completeLift: (state, action) => {
			state.lift = action.payload;
		},
	},
});

export const rootReducer = rootSlice.reducer;

export const { completeName, completeEmail, completeAddress, completeFloor, completeExtras, completeParking, completeAmount, completePhoto, completeLift } = rootSlice.actions;
