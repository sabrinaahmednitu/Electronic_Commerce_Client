import axios from 'axios';
import { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

//delivery man
const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        const res = await axios.get(url);;
        const products = await res.data;
        console.log(products);
    };


    useEffect(() => {
        getProducts(API);;
    }, []);
    

    return (
      <AppContext.Provider value={{ myName: 'Sabrina Ahmed Nitu' }}>
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