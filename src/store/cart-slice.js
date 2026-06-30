import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[],totalQuantity:0,totalAmount:0},
    reducers:{
        addItemToCart(state,action){
            const newItem=action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push({...newItem,quantity:1,totalPrice:newItem.price});
                state.totalQuantity++;
                state.totalAmount += newItem.price;
            }else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                state.totalAmount += newItem.price;
            }

        },
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalAmount -= existingItem.price;
            }else if(existingItem && existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;
            }
        },
        removeItemFully(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity --;
                state.totalAmount -= (existingItem.totalPrice * existingItem.quantity);
            }
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;