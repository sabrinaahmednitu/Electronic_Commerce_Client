import React from 'react';
import { useFilterContext } from '../../../context/filterContext';
import './FilterSection.css'
const FilterSection = () => {
  const {
    filters: { text }, updateFilterValue, all_products } = useFilterContext();
  
  //to get the unique fields
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    newValue = ["All" , ...new Set(newValue)] //unique value asbe
    console.log(newValue);
  }
  
  //we need unique data
  const categoryOnlyData = getUniqueData(all_products,"category");
    return (
      <div>
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
              name="text"
              name="text"
              onChange={updateFilterValue}
            placeholder='Search'/>
          </form>
       </div>
      </div>
    );
};

export default FilterSection; 