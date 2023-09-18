import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="max-w-6xl container services-main grid lg:grid-cols-3 md:grid-cols-3 mx-auto mt-20">
      <div className="services-1">
        <i class="fa-solid fa-car text-indigo-600 text-2xl"></i>
        <h1>Super Fast and Free Delivery</h1>
      </div>

      <div className="services-2 services-column-2">
        <div className="row-1">
          <i class="fa-solid fa-shield-halved text-indigo-600 text-2xl"></i>
          <h1>Non-contact Shipping</h1>
        </div>
        <div className="row-1">
          <i class="fa-solid fa-shield-halved text-indigo-600 text-2xl"></i>
          <h1>Money-back Guranteed</h1>
        </div>
      </div>

      <div className="services-3">
        <i class="fa-solid fa-file-shield text-indigo-600 text-2xl"></i>
        <h1>Super Secure Payment System</h1>
      </div>
    </div>
  );
};

export default Services;
