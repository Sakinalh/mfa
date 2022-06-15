import React from 'react';
import ProductList from '../components/Products/ProductList';
import { StoreProvider, store, useStore } from "store/StoreApp";
import { BrowserRouter } from 'react-router-dom';


export const  App = () => {
    return (
        <BrowserRouter>
          <StoreProvider store={store}>

            <ProductList />
            </StoreProvider>
        </BrowserRouter>
  
    )
}
