import React from 'react';
import './Sort.css'
import {BsFillGridFill ,BsList} from "react-icons/bs"
import { useFilterContext } from '../../../context/filterContext';
const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products } =
    useFilterContext();
    return (
      <div>
        <div className="sorting-section">
          {/* 1st column */}
          <div className="sorting-list--grid">
            <button
              className={grid_view ? 'active sort-btn' : 'sort-btn'}
              onClick={setGridView}
            >
              <BsFillGridFill className=""></BsFillGridFill>
            </button>
            <button
              className={!grid_view ? 'active sort-btn' : 'sort-btn'}
              onClick={setListView}
            >
              <BsList className=""></BsList>
            </button>
          </div>
          {/* 2nd column */}
          <div className="product-data">
            <p>{`${filter_products.length} Products Available`}</p>
          </div>
          {/* 3rd column */}
          <div className="sort-according-price">price</div>
        </div>
      </div>
    );
};

export default Sort;