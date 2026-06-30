import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import toggleCartSlice from './toogle-cart-slice'

const store = configureStore({
    reducer:{cart : cartSlice.reducer , toggleCart : toggleCartSlice.reducer}
})
export default store;