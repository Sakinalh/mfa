import React from 'react';
import ProductList from '../components/Products/ProductList';
import { StoreProvider, store, useStore } from "store/StoreApp";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const  App = () => {
    return (
          <StoreProvider store={store}>
              <BrowserRouter>
                <Routes>
                    <Route path="/products" element={<ProductList />}/> 
                    <Route path="/"   element={<ProductList />}>
                        <Route path="/products" element={<ProductList />}/> 
                        <Route  index element={<ProductList />}/> 
                    </Route> 
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    )
}


