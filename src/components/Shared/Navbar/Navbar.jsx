import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navItem = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/customerservice">Customer Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </>
    );
    return (
      <div>
          <div className="navbar bg-[#e6e7eb] text-black font-bold ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                >
                  {navItem}
                </ul>
              </div>
              <a className="normal-case text-xl">Electronic Web</a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItem}</ul>
            </div>

            <div className="navbar-end mx-auto ">
              {/* <p>{user?.displayName}</p> */}
              <div className="dropdown dropdown-end flex justify-center align-items-center">
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label> */}
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar w-15 "
                >
                  <Link to="/cart" className="cart__trolly__link">
                    <i className="fa-solid fa-cart-shopping text-2xl cart__trolly"></i>
                    <span className="cart__total__item">5</span>
                  </Link>
                </label>

                <label
                  tabIndex={1}
                  htmlFor="dashboard-sidebar"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>

      </div>
    );
};

export default Navbar;