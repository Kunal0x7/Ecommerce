import { createSlice } from "@reduxjs/toolkit";

const toggleCartSlice = createSlice({
    name: "toggleCart",
    initialState: { isCartOpen: false },
    reducers: {
        toggle(state) {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

export const toggleCartActions = toggleCartSlice.actions;
export default toggleCartSlice;