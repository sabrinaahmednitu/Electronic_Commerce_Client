import React, { useContext } from 'react';
import { AppContext } from '../../context/productContext';

const About = () => {
    const myName=useContext(AppContext)
    return (
      <div>
        <h1>about</h1>
        <h1>{myName}</h1>
      </div>
    );
};

export default About;