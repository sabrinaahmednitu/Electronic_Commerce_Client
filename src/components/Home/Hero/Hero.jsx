import React from 'react';
import './Hero.css'
import HeroImg from '../../../images/family.jpg'

const Hero = () => {
    return (
      <div className="max-w-4xl mx-auto mt-20">
        <div className="grid gap-12 lg:grid-cols-2 sm:grid-cols-1">
          <div className="hero-left text-black">
            <p>Welcome to</p>
            <h3 className="text-4xl mt-2 mb-2">Electronic Store</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              optio, dolor dicta possimus a quibusdam nobis illo accusamus,
              sapiente doloribus ea ducimus illum. Nisi pariatur quasi deleniti
              id, cum maiores aliquid repudiandae, enim illo cupiditate beatae,
              ipsa nam accusamus! Ut incidunt repudiandae animi officia ullam.
              Molestiae odit asperiores dolores expedita.
            </p>
            <button className="btn text-white bg-indigo-400  border-0 mt-4">
              Shop Now
            </button>
          </div>

          <div className="hero-img">
            <div className="hero-image-div">
              <figure>
                <img src={HeroImg} alt="" className="img-style" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;