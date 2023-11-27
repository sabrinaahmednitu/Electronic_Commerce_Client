import React from 'react';
import './ListView.css';

const ListView = ({ products }) => {
    
    return (
        <div>
            <div className="container grid lg:grid-cols-1">
                {
                    products.map((product) => {
                        const{id,name,price,description,image}
                    })
                }
           </div>
        </div>
    );
};

export default ListView;