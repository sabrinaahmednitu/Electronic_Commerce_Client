import React from 'react';
import { useCartContext } from '../../context/cartContext';

const Cart = () => {
    const { cart } = useCartContext();
    console.log(cart);
    return (
      
            <div className="container mx-auto">
                <div className="car-heading grid lg:grid-cols-5 text-center">
                    <p>Item</p>
                    <p className="cart-hide">Price</p>
                    <p>Quantity</p>
                    <div className="cart-hide">Subtotal</div>
                    <p>Remove</p>
                </div>
                <hr />
            </div>
     
    );
};

export default Cart;