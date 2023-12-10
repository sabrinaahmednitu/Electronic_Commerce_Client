import React from 'react';
import { useFilterContext } from '../../../context/filterContext';
import './FilterSection.css'
const FilterSection = () => {
  const {
    filters: { text , category  }, updateFilterValue, all_products } = useFilterContext();
  
  //to get the unique fields
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    return newValue = ["All" , ...new Set(newValue)] //unique value asbe
    // console.log(newValue);
  }
  
  //we need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");//data and category pass kore dawa props hisabe
  const companyData = getUniqueData(all_products, "company");
    return (
      <div>
        {/* --------search part--------- */}
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              onChange={updateFilterValue}
              placeholder="Search"
            />
          </form>
        </div>

        {/* --------Category wise filter part--------- */}
        <div className="filter-category">
          <h4>Category</h4>
          <div className="category-name">
            {categoryOnlyData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>
        {/* --------Category wise filter part--------- */}
        <div className="filter-category">
          <h4>Company</h4>
          <div className="company-name">
            <form action="#">
              <select name="company"
                id="company"
                className='filter-company-select'
                onClick={updateFilterValue}>
                {
                  companyData.map((curElem,index) => {
                    return (
                      <option key={index} value={curElem} name="company">
                        {curElem}
                      </option>
                    )
                  })
                }
                </select>
            </form>
          </div>
        </div>
      </div>
    );
};

export default FilterSection; 