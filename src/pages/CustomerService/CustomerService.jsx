import React from 'react';
import './CustomerService.css'
import cs1 from '../../images/CustomerServiceimg/CS1.png'
import cs2 from '../../images/CustomerServiceimg/CS2.png'
import cs3 from '../../images/CustomerServiceimg/CS3.png'
import cs4 from '../../images/CustomerServiceimg/CS4.png'
import cs5 from '../../images/CustomerServiceimg/CS5.png'
import cs6 from '../../images/CustomerServiceimg/CS6.png'
import cs7 from '../../images/CustomerServiceimg/CS7.png'
import cs8 from '../../images/CustomerServiceimg/CS8.png'
import cs9 from '../../images/CustomerServiceimg/CS9.png'
import cs10 from '../../images/CustomerServiceimg/CS10.png'
import cs11 from '../../images/CustomerServiceimg/CS11.png'

const CustomerService = () => {
    return (
      <div className="">
        <div className="text-black max-w-[1280px] mx-auto mt-20">
          <h1 className="text-2xl "> Welcome to Amazon Customer Service</h1>
          <h1 className="text-2xl mt-4">
            What would you like help with today? You can quickly take care of
            most things here, or connect with us when needed.
          </h1>

          <div className="customer-service-cards">
            <div className="customer-service-card">
              <div>
                <img src={cs1} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs2} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs3} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs4} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs5} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs6} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs7} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs8} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs9} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs10} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
            <div className="customer-service-card">
              <div>
                <img src={cs11} alt="" />
              </div>
              <div>A delivery, order or return</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustomerService;