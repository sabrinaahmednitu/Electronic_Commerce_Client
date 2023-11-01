import React from 'react';
import { useFilterContext } from '../../../context/filterContext';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

const ProductList = () => {
    const { filter_products ,setGridView } = useFilterContext();
    // console.log(filter_products);
  
  if (setGridView ) {
    return <GridView products={filter_products}></GridView>;
  }
  // if (setGridView === "false") {
  //   return <ListView products={filter_products}></ListView>;
  // }
    return (
      <div>
        <h1>ProductList ProductList</h1>
      </div>
    );
};

export default ProductList;