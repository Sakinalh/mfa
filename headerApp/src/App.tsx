import React from 'react';
import { StoreProvider, store, useStore } from "store/StoreApp";
import { CustomAppBar } from '../components/AppBar';

export default function App() {
    return (
        <StoreProvider store={store}>
                <CustomAppBar />
        </StoreProvider>
    )
}
