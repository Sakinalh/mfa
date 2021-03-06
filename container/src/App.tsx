import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Toolbar, Button, Typography } from '@mui/material';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from "../components/HeaderApp";
import ProductsApp from '../components/ProductsApp';

export default () => {  
    return (
            <Container maxWidth="xl" disableGutters>
                <CssBaseline />
                <Header />
                <Outlet />
            </Container>
        )
}
