import React from 'react';
import { useFilterContext } from '../../../context/filterContext';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();
    // console.log(filter_products);
  
  if (grid_view === true) {
    return <GridView products={filter_products}></GridView>;
  }
  if (grid_view === false) {
    return <ListView products={filter_products}></ListView>;
  }
   
};

export default ProductList;