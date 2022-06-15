import React from 'react';
import {BrowserRouter} from 'react-router-dom';


export function SharedBrowserRouter({children}: any){
    return <BrowserRouter>{children}</BrowserRouter>
  }