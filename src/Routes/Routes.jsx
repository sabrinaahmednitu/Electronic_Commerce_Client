import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../pages/About/AboutUs";
import ContactUs from "../pages/Contact/ContactUs";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SingleProduct from "../pages/SingleProduct/SingleProduct"
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },

      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/products',
        element: <Products></Products>,
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProduct></SingleProduct>,
      },
    ],
  },
]);

