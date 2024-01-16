import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import error from '../../images/error/error-404.jpg'

const Error = () => {
    return (
      <div className="container m-auto text-black text-center mb-24">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Error | Electronic web</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <img className='block mx-auto' src={error} alt="" />
        <h2 className="text-3xl mb-1">ops! You are lost.</h2>
        <p>
          The page you are loking for does not exist.
          <br /> But you can click the button below to go back to the homepage.
        </p>
        <button className="btn w-[170px] text-white bg-indigo-400  border-0 rounded mt-7">
          <Link to="/">Go Back To Home</Link>
        </button>
      </div>
    );
};

export default Error;