import React, { useState } from 'react';
import './AddToCart.css';
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ singleProduct }) => {

    const { id, colors, stock } = singleProduct;
    const [NewColor, setNewColor] = useState(colors[0]);

    return (
      <div>
        <div className="colors">
          <p>
            Color :{' '}
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={NewColor === color ? 'btnStyle active' : 'btnStyle'}
                onClick={() => setNewColor(NewColor)}
              >
                {NewColor === color ? (
                  <FaCheck className="checkStyle"></FaCheck>
                ) : null}
              </button>
            ))}
          </p>
        </div>
      </div>
    );
};

export default AddToCart;