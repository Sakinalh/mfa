import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import productsReducer, {setProducts} from './productsSlice';
import cartReducer, {addToCart} from './cartSlice';

import { Provider, useSelector, useDispatch } from 'react-redux';
import {useGetBooksQuery, useGetOffersQuery} from './hooksApi';
import {bookApi, offersApi} from './hooksApi';
import { Book } from '../models/Product';

export const store = configureStore({
  reducer: {
      [bookApi.reducerPath]: bookApi.reducer,
      [offersApi.reducerPath]: offersApi.reducer,
      books: productsReducer,
      cart: cartReducer,
  },
  middleware: () => getDefaultMiddleware().concat(bookApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

export function useStore(){
  const books = useSelector((state: RootState)=> state.books);
  const cart = useSelector((state: RootState)=> state.cart)

  const dispatch = useDispatch();

  return {
    books,
    setProducts: (books: Book[]) => dispatch(setProducts(books)),
    useGetBooksQuery,
    useGetOffersQuery,
    cart,
    addToCart: (items: Book[]) => dispatch(addToCart(items)),
   }
}

export function StoreProvider({children}: any){
  return <Provider store={store}> {children} </Provider>
}

