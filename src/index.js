import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CarritoContextProvider } from './context/CarritoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoContextProvider>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </CarritoContextProvider>
);
