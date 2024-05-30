import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div> <div className="max-w-container mx-auto px-4">
          <h2 className="mb-6 mt-6 ml-6 text-gray-700 text-5xl font-bold dark:text-gray-400">
    About
  </h2>
    <div className="pb-10">
      <h1 className="max-w-[600px] text-base text-lightText mb-2">
        <span className="text-primeColor font-semibold text-lg">Orebi</span>{" "}
        is one of the world's leading ecommerce brands and is internationally
        recognized for celebrating the essence of classic Worldwide cool
        looking style.
      </h1>
      <Link to="/shop">
        <button className="w-52 h-10 bg-black text-white hover:bg-gray-700 duration-300">
          Continue Shopping
        </button>
      </Link>
    </div>
  </div></div>
  )
}

export default About