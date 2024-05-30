import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <nav className="bg-white border-b border-gray-300 py-4 px-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 font-bold text-5xl max-sm:ml-0 max-sm:text-2xl  ml-6 hover:underline">
            Closet
          </div>
          <div className="flex items-center justify-between md:items-center">
            <div className="md:flex">
              <button className="mr-8 text-gray-500 border-r pr-8 border-gray-400 font-semibold hover:underline">
                <Link to="/">Home</Link>
              </button>
              <button className="mr-8 text-gray-500 border-r pr-8 border-gray-400 font-semibold hover:underline">
                <Link to="/shop">Shop</Link>
              </button>
              <button className="mr-8 text-gray-500 border-r pr-8 border-gray-400 font-semibold hover:underline">
                <Link to="/contact">Contact</Link>
              </button>
              <button className="mr-8 text-gray-500 font-semibold hover:underline">
                <Link to="/about">About</Link>
              </button>
            </div>
            <Link to={totalQuantity === 0 ? "empty" : "/cart"} className="md:ml-8 max-sm:mr-4">
              <div className="flex justify-center items-center">
                <div className="relative py-2">
                  <div className="absolute left-3 top-0">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-gray-700 p-2.5 mt-2 text-xs text-white">
                      {totalQuantity}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
