import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Stars = ({ stars, reviews }) => {
    // console.log(stars,reviews);
   const ratingStar= Array.from({ length: 5 }, (elem, index) => {
       let numbers = index + 0.5;  
       return (
         <span key={index}>
           {stars >= index + 1
             ? <FaStar></FaStar>
             : stars >= numbers
             ? <FaStarHalfAlt></FaStarHalfAlt>
             : <AiOutlineStar></AiOutlineStar>}
         </span>
       );
    });
    return (
        <div>
            <div className='flex gap-3'>
                {ratingStar}
                <p>({ reviews} customer reviews)</p>
          </div>
        </div>
    );
};

export default Stars;