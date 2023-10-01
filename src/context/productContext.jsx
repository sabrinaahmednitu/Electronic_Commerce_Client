import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/productReducer';


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct:{}
};


//delivery man
const AppProvider = ({ children }) => {
  //const [count,setCount]=useState([])
  const [state, dispatch] = useReducer(reducer, initialState);

  //my 1st api call for products
  const getProducts = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  };
  //my 1st api call for products


  //my second api call for single products
  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' });
    }
  };
  //my second api call for single products

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProducts }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
    return useContext(AppContext);
    //  const myname = useContext(AppContext) ai line er poriborte oi last part bosbe;
};

export { AppProvider, AppContext, useProductContext };