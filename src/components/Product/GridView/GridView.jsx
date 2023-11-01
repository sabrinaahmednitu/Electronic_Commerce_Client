import React from 'react';
import './GridView.css';

const GridView = ({products}) => {
    return (
        <div>
            <div className="container grid lg:grid-cols-3 md:grid-cols-2 ">
                {
                    products.map((product)=> {
                     
                       
                    })
                }
            </div>
        </div>
    );
};

export default GridView;