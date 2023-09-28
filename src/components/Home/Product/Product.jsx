import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ featureProduct }) => {
  const { id, name, image, price, photo, category } = featureProduct;
  return (
    <div>
      <Link to={`/singleProduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="category">{category}</figcaption>
          </figure>
          <div className="card-data flex gap-4">
            <h1>{name}</h1>
            <h1>{price}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
