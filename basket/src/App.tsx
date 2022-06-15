import React from 'react';
import { StoreProvider, store } from "store/StoreApp";
import  {Basket}  from '../components/Basket';

export default function App() {
    return (
            <StoreProvider store={store}>

                    <Basket />
            </StoreProvider>
    )
}
