import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/productContext';

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
console.log(singleProduct);
  useEffect(() => {
    getSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`);
  }, []);

  return (
    <div>
      <h1>SingleProduct { id}</h1>
    </div>
  );
};

export default SingleProduct;
