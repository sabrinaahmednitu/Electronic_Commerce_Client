import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
    filter_products: [...products],
    all_products:[]
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();


    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS" , payload:products})
    },[])

    return (
        <FilterContext.Provider value={...state} >
            {children}
        </FilterContext.Provider>
    );
};

//useContext for consumer so thata it can use .
//when i want to use the hook i just called the useFilterContext 
export const useFilterContext = () => {
    return useContext(FilterContext);
}