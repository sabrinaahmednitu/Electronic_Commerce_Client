import React from 'react';
import Helmet from 'react-helmet';
import SignleProductCom from '../../components/SingleProduct/SingleProduct/SingleProduct';
const SignleProduct = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Product Details | Electronic web</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <SignleProductCom></SignleProductCom>
      </div>
    );
};

export default SignleProduct;