import React from 'react';
import './CartItem.css';
import FormatPrice from '../../Helpers/FormatPrice';
import CartAmountToggle from '../SingleProduct/CartAmountToggle/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ id, name, image, color, price, amount }) => {
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  return (
    <div>
      <div className="grid lg:grid-cols-5">
        {/* ---------cart-item---------- */}
        <div className="cart-item">
          <div>
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>color : </p>
              <div
                className="color-style "
                style={{
                  backgroundColor: color,
                  color: color,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* ---------Price---------- */}
        <div className="cart-price cart-hide">
          <p>
            <FormatPrice price={price}></FormatPrice>
          </p>
        </div>
        {/* ---------Quantity---------- */}
        <div className="cart-quantity">
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          ></CartAmountToggle>
        </div>
        {/* ---------Subtotal---------- */}
        <div className="cart-subtotal cart-hide">
          <p>
            <FormatPrice price={price * amount}></FormatPrice>
          </p>
        </div>
        {/* ---------cart-remove---------- */}
        <div className="cart-remove">
          <FaTrash className="remove-icon"></FaTrash>
        </div>
      </div>
    </div>
  );
};

export default CartItem;