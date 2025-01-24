// createSlice
// initialize initial state
// slice -> name, mention initial state, actions

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
	name: 'cart', // unique identifier for this slice | key name in the reducer object
	initialState, //starting state of the slice
	reducers: {
		//object containing reducer functions
		addToCart(state, action) {
			console.log('this is the action: ', action);
			console.log('this is the action payload id', action.payload.id);

			state.push(action.payload);
		},
		removeFromCart(state, action) {
			console.log('item removed', action);

			const filtered = state.filter((item) => item.id !== action.payload.id);
			return filtered;
		},
	},
});

//accessing the functions from the object reducer
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
