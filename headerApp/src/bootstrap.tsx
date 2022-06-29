import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const mount = (el: HTMLElement) => {
    const root = createRoot(el!);
    root.render(<BrowserRouter><App /></BrowserRouter>);
}

if(process.env.NODE_ENV === 'development') {
    const devRoot: HTMLElement = document.querySelector('#_header-dev-root');
    if(devRoot){
        mount(devRoot);
    } 
}

export { mount }