import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({ featureProduct }) => {
  const { id, name, image, price, category } = featureProduct;
  return (
    <div >
      <Link to={`/singleProduct/${id}`}>
        <div className="card">
          <figure className='product-figure'>
            <img src={image} alt={name} />
            <figcaption className="category">{category}</figcaption>
          </figure>
          <div className="card-data card-data-flex">
            <h1>{name}</h1>
            <h1>{price}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
