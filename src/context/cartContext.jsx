import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("nituCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: '',
  total_amount: '',
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, currentColor, amount, singleProduct) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, currentColor, amount, singleProduct },
    });
  };

  //increment and decrement cart product
  const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT" , payload:id})
  }
  const setIncrease = (id) => {
    dispatch({type:"SET_INCREMENT" , payload:id})
  }

  //remove /delete
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  //clear all cart
  const clearCart = () => {
    dispatch({type:"CLEAR_CART"})
  }

  //to add the data in localStorage
  useEffect(() => {
    localStorage.setItem("nituCart",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//global hook
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
