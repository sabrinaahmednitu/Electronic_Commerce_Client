import React from 'react';
import './ListView.css'
import FormatPrice from '../../../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <div>
      <div className="list-container">
        {products.map((product) => {
          const { id, name, price, description, image } = product;
          return (
            <div className="listview-card">
              {/* column-1 */}
              <figure>
                <img src={image} alt="" />
              </figure>

              {/* column-2 */}
              <div className="listview-card-data">
                <h1>{name}</h1>
                <p>
                  <FormatPrice price={price}></FormatPrice>
                </p>
                <h5>{description.slice(0, 99)}...</h5>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className="list-btn">Read More</button>
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
