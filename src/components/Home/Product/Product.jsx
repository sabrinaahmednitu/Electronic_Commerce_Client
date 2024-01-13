import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import FormatPrice from '../../../Helpers/FormatPrice';

const Product = ({ featureProduct }) => {
  const { id, name, image, price, category } = featureProduct;
  return (
    <div>
      <Link to={`/singleProduct/${id}`}>
        <div className="card">
          <figure className="product-figure">
            <img src={image} alt={name} />
            <figcaption className="category">{category}</figcaption>
          </figure>
          <div className="card-data card-data-flex">
            <h1>{name}</h1>
            <p>{<FormatPrice price={price}></FormatPrice>}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
