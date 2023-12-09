import React from 'react';
import { useFilterContext } from '../../../context/filterContext';

const FilterSection = () => {
  const {
    filters: { text }, updateFilterValue } = useFilterContext();
    return (
      <div>
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
              name="text"
              name="text"
              onChange={updateFilterValue} />
          </form>
       </div>
      </div>
    );
};

export default FilterSection; 