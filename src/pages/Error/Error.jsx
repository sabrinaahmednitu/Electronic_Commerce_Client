import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className='container m-auto text-black text-center mt-24 mb-24' >
        <h3 className='text-6xl'> 404 ! </h3>
        <h2 className='text-3xl mt-5 mb-1'>ops! You are lost.</h2>
        <p>
                The page you are loking for does not exist.
                <br /> But you can click the
          button below to go back to the homepage.
        </p>
        <button className="btn w-[170px] text-white bg-indigo-400  border-0 rounded mt-7">
         <Link to="/" >Go Back To Home</Link>
        </button>
      </div>
    );
};

export default Error;