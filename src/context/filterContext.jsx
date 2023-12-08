import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    //grid_view:false, //list view
     grid_view: true, //grid view
    sorting_value:"lowest"
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();


    const [state, dispatch] = useReducer(reducer, initialState);


    //to set grid view
    const setGridView=() => {
        return dispatch({type:"SET_GRID_VIEW"})
    }
    //to set list view
    const setListView = () => {
       return dispatch({type:"SET_LIST_VIEW"})
   }

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
  };


  useEffect(() => {
   dispatch({type:"SORTING_PRODUCTS" ,payload:products})
  },[state.sorting_value])



    useEffect(() => {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
      <FilterContext.Provider value={{ ...state, setGridView, setListView,sorting }}>
        {children}
      </FilterContext.Provider>
    );
};

//useContext for consumer so thata it can use .
//when i want to use the hook i just called the useFilterContext 
export const useFilterContext = () => {
    return useContext(FilterContext);
}