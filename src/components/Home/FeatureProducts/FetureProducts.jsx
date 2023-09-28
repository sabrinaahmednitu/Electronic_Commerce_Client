import React from 'react';
import { useProductContext } from '../../../context/productContext';
import Product from '../Product/Product';


const FetureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  // console.log(featureProducts);
  if (isLoading) {
    return <div>...Loading</div>
  }
  return (
    <div>
      <div className="container m-auto">
        <h2>Check Now!</h2>
        <h1 className="text-2xl ">Feture Products</h1>
        <div className="grid grid-cols-3">
          {featureProducts.map((featureProduct) => (
            <Product
              key={featureProduct.id}
              featureProduct={featureProduct}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetureProducts;