import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            let found = state.find(element => element.id == action.payload.id)
            if (found) {
                alert('Product Already Added')
            } else {
                state.push(action.payload)
            }

        },
        remove(state, action) {
            return state.filter(product => action.payload !== product.id)
        }
    }
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;