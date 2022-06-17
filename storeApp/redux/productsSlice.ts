import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../models/Product';

export interface ProductState {
  products: Book[];
  searchParam: string | null;
}

const initialState: ProductState = {
    products: [],
    searchParam: null,
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: ProductState, action: PayloadAction<Book[]>) => {
      state.products = action.payload
    },
    setSearchParam: (state: ProductState, action: PayloadAction<string>) => {
      state.searchParam = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setSearchParam } = productsSlice.actions;
export default productsSlice.reducer;