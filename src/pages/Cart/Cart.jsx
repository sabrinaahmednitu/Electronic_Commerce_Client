import React from 'react';
import CartItem from '../../components/Cart/CartItem';
import { useCartContext } from '../../context/cartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <div className="container mx-auto">
      <div className="car-heading grid-five-column">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <div className="cart-hide">Subtotal</div>
        <p>Remove</p>
      </div>
      <hr />
          <div className="cart-item">
              {
                  cart.map((curElem) => {
                      return <CartItem key={curElem.id} {...curElem} ></CartItem>;
                  })
              }
      </div>
    </div>
  );
};

export default Cart;
