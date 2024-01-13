import React from 'react';
import './Contact.css';
import contact from '../../images/CustomerServiceimg/contact-img.png'
import Helmet from 'react-helmet';
const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Electronic web</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto mt-12 mb-12">
        <h2 className="text-2xl text-black text-center mb-5">
          Feel Free To Contact
        </h2>
        <section className="contact-form-section mt-12 mb-12">
          <div className="contact-img">
            <img src={contact} alt="" />
          </div>
          <form
            action="https://formspree.io/f/xwkdndpq"
            method="POST"
            className="contact-form w-[100%]"
          >
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="Email" name="Email" />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="7"
              placeholder="Place your comment here"
            ></textarea>
            <button className="btn bg-indigo-400">Submit</button>
          </form>
        </section>
        <section className="location-section">
          <div className="location-text">
            <br /> <br />
            <br />
            <br />
            <p>
              Newmarket is a town and regional seat of the Regional Municipality
              of York in the Canadian province of Ontario. It is part of Greater
              Toronto in the Golden Horseshoe region of Southern Ontario. The
              name stems from the fact that the settlement was a "New Market",
              in contrast to York as the Old Market.
            </p>
            <br />
            <h1>Province: Ontario</h1>
            <h1>Regional municipality: York Region</h1>
          </div>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235373.9083414654!2d89.27794933319095!3d22.812936138465016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91780094f875%3A0x17bf6cf5c0e7b50b!2sDak%20bangla%20more%20Boro%20Bazar%20khulna%20Bangladesh!5e0!3m2!1sen!2sbd!4v1695062048906!5m2!1sen!2sbd"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
