import React from 'react';
import { useFilterContext } from '../../../context/filterContext';
import GridView from '../GridView/GridView';

const ProductList = () => {
    const { filter_products ,setGridView } = useFilterContext();
    // console.log(filter_products);
  
  if (setGridView) {
    return <GridView products={filter_products}></GridView>;
  }
  // if (setGridView === false) {
  //   return <ListView products={filter_products}></ListView>;
  // }
   
};

export default ProductList;