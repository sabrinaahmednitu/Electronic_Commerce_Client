import React from 'react';
import Helmet from 'react-helmet';
import ContactComp from '../../components/Contact/Contact';
const Contact = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us | Electronic web</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <ContactComp></ContactComp>
      </div>
    );
};

export default Contact;