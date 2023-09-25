import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import './index.css';
import { router } from './Routes/Routes.jsx';
import { AppProvider } from './context/productContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
       <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
