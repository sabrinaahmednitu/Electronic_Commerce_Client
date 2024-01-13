import React from 'react';
import Helmet from 'react-helmet';
import CustomerServiceCom from '../../components/CustomerService/CustomerService'

const CustomerService = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Customer service | Electronic web</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <CustomerServiceCom></CustomerServiceCom>
      </div>
    );
};

export default CustomerService;