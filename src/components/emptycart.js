import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/empty.png";

function Emptycart() {
  return (
    <>
    <h2 className="mb-6 mt-6 ml-6 text-gray-700 text-4xl font-bold dark:text-gray-400">
    Your Cart
  </h2>
    <div className='flex items-center justify-center mb-16 mt-16'>
      <div className="flex items-center">
        <img
          className="w-80 rounded-lg p-4 mx-auto"
          src={img}
          alt=""
        />
        <div className="max-w-[500px] p-4  bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
          <h1 className="font-titleFont text-xl font-bold uppercase">
            Your Cart feels lonely.
          </h1>
          <p className="text-sm text-center px-10 -mt-2">
            Your Shopping cart lives to serve. Give it purpose - fill it with
            books, electronics, videos, etc. and make it happy.
          </p>
          <Link to="/">
            <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-500 hover:text-white duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Emptycart;
