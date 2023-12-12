import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import './index.css';
import { router } from './Routes/Routes.jsx';
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
