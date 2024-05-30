import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars, reviews }) {
  const ratingstar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (<FaStar className='text-yellow-400' />) : stars >= number ? (<FaStarHalfAlt className='text-yellow-400' />) : <AiOutlineStar className='text-yellow-400 text-xl' />}
      </span>
    );
  });

  return (
    <>
    <div className='flex'> {ratingstar}     
    <p className='text-gray-500 ml-2'>  ({reviews} customer reviews)</p></div>
      
    </>
  );
}

export default Star;
