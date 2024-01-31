import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section className="z-10">
        <div className="footer-short max-w-4xl m-auto py-12 px-5 bg-[#BEADFA] text-white rounded-lg translate-y-[65px] ">
          {/* <div className="footer-short max-w-4xl m-auto py-12 px-5 bg-[#BEADFA] bg-[#f472b6] text-white rounded-lg translate-y-[65px] "> */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3>Ready to get started ? </h3>
              <h3>Talk to us today</h3>
            </div>
            <div>
              <button className="btn w-[175px] bg-white block mx-auto text-black border-0 ">
                <Link to="/contact">GET STARTED</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="main-footer z-1">
        <footer className="footer container mx-auto p-10  pt-24">
          <nav>
            <header className="footer-title">Get to Know Us</header>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Investor</a>
            <a className="link link-hover">Relations</a>
            <a className="link link-hover">Electronic Web Devices</a>
            <a className="link link-hover">Electronic Web Science</a>
          </nav>
          <nav>
            <header className="footer-title">Make Money with Us</header>
            <a className="link link-hover">Sell products on Electronic Web</a>
            <a className="link link-hover">Sell on Electronic Web Business</a>
            <a className="link link-hover">Sell apps on Electronic Web</a>
            <a className="link link-hover">Become an Affiliate</a>
            <a className="link link-hover">Advertise Your Products</a>
            <a className="link link-hover">Self-Publish with Us</a>
            <a className="link link-hover">Host an Electronic Web Hub</a>
          </nav>
          <nav>
            <header className="footer-title">
              Electronic Web Payment Products
            </header>
            <a className="link link-hover">Electronic Web Business Card</a>
            <a className="link link-hover">Shop with Points</a>
            <a className="link link-hover">Reload Your Balance</a>
            <a className="link link-hover">Electronic Web Currency Converter</a>
            <fieldset className="form-control w-60">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="...@gmail.com"
                  className="input input-bordered w-full pr-16 bg-white"
                />
                <button className="btn absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </nav>
          <form>
            <header className="footer-title">Let Us Help You</header>
            <a className="link link-hover">Your Account</a>
            <a className="link link-hover">Your Orders</a>
            <a className="link link-hover">Shipping Rates & Policies</a>
            <a className="link link-hover">Returns & Replacements</a>
            <a className="link link-hover">Manage Your Content and Devices</a>
            <a className="link link-hover">Help</a>
          </form>
        </footer>

        {/* <footer className="bg-[#e6e7eb] text-black  text-center pt-3 pb-5"> */}
        <footer className="footer-claim text-center">
          <h1 className="">
            {' '}
            @ {new Date().getFullYear()} All Right Reserved by Sabrina Ahmed
            Nitu
          </h1>
        </footer>
      </section>
    </div>
  );
};

export default Footer;