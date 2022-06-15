import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../models/Product';

export interface ProductState {
  products: Book[]
}

const initialState: ProductState = {
    products: [],
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: ProductState, action: PayloadAction<Book[]>) => {
      console.log('set product', action)
      state.products = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;