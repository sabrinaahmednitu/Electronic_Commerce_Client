import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee:5000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

   const addToCart = (id, currentColor, amount, singleProduct) => {
     dispatch({
       type: 'ADD_TO_CART',
       payload: { id, currentColor, amount, singleProduct },
     });
   };

    return (
      <CartContext.Provider value={{ ...state, addToCart }}>
        {children}
      </CartContext.Provider>
    );
};

//global hook
const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider ,useCartContext };