import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './productContext';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [], //its for grid and list
  all_products: [], //for filter section
  //grid_view:false, //list view
  grid_view: true, //grid view
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //to set grid view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };
  //to set list view
  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
  };

  //update search
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } });
  };

  //to sort the product
  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORTING_PRODUCTS' });
  }, [products, state.sorting_value, state.filters]);

  //to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//useContext for consumer so thata it can use .
//when i want to use the hook i just called the useFilterContext
export const useFilterContext = () => {
  return useContext(FilterContext);
};
