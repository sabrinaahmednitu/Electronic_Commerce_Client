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
      <div>
        <section className="customerService-main">
          <div className=" max-w-[1280px] mx-auto pt-20 pb-20">
            <h1 className="text-3xl text-white font-bold">
              {' '}
              Welcome to Amazon Customer Service
            </h1>
            <h1 className="text-2xl mt-4 text-white font-bold">
              What would you like help with today? You can quickly take care of
              most things here, or connect with us when needed.
            </h1>

            <div className="customer-service-cards text-black">
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
        </section>
        <section>
          <div className="container mx-auto mt-12">
            <h1 className="text-3xl text-black font-bold mb-3">
              Search our help library
            </h1>
            <input
              type="text"
              className="w-[75%] bg-white border p-2 rounded"
              value="order"
            />
          </div>
          <section className="container mx-auto text-black">
            <h2 className="text-3xl mt-4">All help topics</h2>
          </section>
        </section>
      </div>
    );
};

export default CustomerService;