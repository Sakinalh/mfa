import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const mount = (el: HTMLElement) => {
    const root = createRoot(el!);
    root.render(<App />);
}

if(process.env.NODE_ENV === 'development') {
    const devRoot: HTMLElement = document.querySelector('#_basket-dev-root');
    if(devRoot){
        mount(devRoot);
    } 
}

export { mount }