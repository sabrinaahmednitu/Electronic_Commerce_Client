import React from 'react';
import Helmet from 'react-helmet';
import CartComp from '../../components/Cart/Cart/Cart';
const Cart = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cart | Electronic web</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <CartComp></CartComp>
      </div>
    );
};

export default Cart;