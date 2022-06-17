import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsApp from '../components/ProductsApp';
import { SharedBrowserRouter } from './router';

const rootElem = document.querySelector('#_root_container');
const root = createRoot(rootElem!);


root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"   element={<App />}>

                <Route path="/products" element={<ProductsApp />}/> 
                <Route  index element={<ProductsApp />}/> 

            </Route> 
        </Routes>
    </BrowserRouter>
)

