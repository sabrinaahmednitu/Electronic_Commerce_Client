import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section className="z-10">
        <div className="footer-short max-w-4xl m-auto py-12 px-5 bg-[#BEADFA] bg-[#f472b6] text-white rounded-lg translate-y-[65px] ">
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

      <section className="bg-[#e6e7eb] z-1">
        <footer className="footer container mx-auto p-10 text-black pt-24">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>

        <footer className="bg-[#e6e7eb] text-black  text-center pt-3 pb-5">
          <hr class="h-px my-8 bg-base-100 border-0 w-[85%] mx-auto"></hr>
          <h1>
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