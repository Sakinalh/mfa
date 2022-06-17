import { createSlice , PayloadAction} from '@reduxjs/toolkit';
import { Book } from '../models/Product';

export interface CartState {
    cart: Book[]
}

const initialState: CartState = {
    cart: []
}

export const userSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Book[]>)  => {
            state.cart = action.payload;
        },
        removeFromCart:  (state: CartState, action: PayloadAction<Book[]>)  => {
            state.cart = action.payload;
        }
    }
});

export const { addToCart, removeFromCart } = userSlice.actions;
export default userSlice.reducer;