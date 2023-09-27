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
};


//delivery man
const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
       dispatch({ type: "SET_LOADING" });
      try {
          const res = await axios.get(url);;
        const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload:products });
      }
      catch (error) {
        dispatch({type:"API_ERROR"})
      }
    };


    useEffect(() => {
        getProducts(API);;
    }, []);
    

    return (
      <AppContext.Provider value={{ ...state }}>
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