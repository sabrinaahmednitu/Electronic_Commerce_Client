import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import './index.css';
import { router } from './Routes/Routes.jsx';
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filterContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <RouterProvider router={router} />
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
