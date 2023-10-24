import React from 'react';
import StripeProvider from '../project/component/payment/stripe';
import Introduction from '../project/pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from '../project/pages/products';
import './App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Introduction />} />
                <Route index path='/Products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}