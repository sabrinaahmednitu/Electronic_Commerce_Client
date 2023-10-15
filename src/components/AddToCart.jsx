import React from 'react';

const AddToCart = ({ singleProduct }) => {
    const { id, colors, stock } = singleProduct;
    return (
        <div>
            <div className="colors">
                <p>
                    Color : {colors.map((color, index) => <button style={{ backgroundColor: color}}
                        className='rounded-[50%] ml-3' key={index}>
                           {color}
                        </button>
                    )}
                </p>
           </div>
        </div>
    );
};

export default AddToCart;