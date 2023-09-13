import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

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
        element:<About></About>
      },

      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/products',
        element: <Products></Products>,
      },
      {
        path: '/singleProduct',
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);

