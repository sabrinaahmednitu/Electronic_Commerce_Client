import React from 'react';
import './Services.css'

const Services = () => {
    return (
      <div className="container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 mx-auto">
        <div className="services-column-1">
          <div className="flex justify-center items-center flex-col">
            <i class="fa-solid fa-car"></i>
            <h1>Super Fast and Free Delivery</h1>
          </div>
        </div>
        <div
          className="services-column-2 flex justify-center items-center flex-col gap-3
        "
        >
          <div className="row-1 flex justify-center items-center flex-row gap-5">
            <i class="fa-solid fa-shield-halved"></i>
            <h1>Non-contact Shipping</h1>
          </div>
          <div className="row-2 flex justify-center items-center flex-row gap-5">
            <i class="fa-solid fa-shield-halved"></i>
            <h1>Money-back Guranteed</h1>
          </div>
        </div>
        <div className="services-column-1">
          <div className="flex justify-center items-center flex-col">
            <i class="fa-solid fa-file-shield"></i>
            <h1>Super Secure Payment System</h1>
          </div>
        </div>
      </div>
    );
};

export default Services;