import React from 'react';
import './ListView.css';
import FormatPrice from '../../../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <div>
      <div className="container grid lg:grid-cols-1">
        {products.map((product) => {
          const { id, name, price, description, image } = product;
          return (
            <div className="card grid grid-cols-2">
              <figure className="w-50">
                <img src={image} alt="" />
              </figure>
              <div>
                <h1>{name}</h1>
                <p>
                  {' '}
                  <FormatPrice price={price}></FormatPrice>{' '}
                </p>
                <p>{description.slice(0, 99)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
