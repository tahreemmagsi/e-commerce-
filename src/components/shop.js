import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setSingleProduct } from '../features/cartslice';
import { Link } from 'react-router-dom';
import SideFilterBar from './sidefilterbar';
import Searchbar from './searchbar';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


function Shop() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.cart.searchResults);
  const items = useSelector(state => state.cart.items);
  const category = useSelector(state => state.cart.filters);

  const [viewMode, setViewMode] = useState('grid');
  const [showFilterBar, setShowFilterBar] = useState(true); 
console.log(items)
  const productsToDisplay = result.length > 0 ? result.filter(item => category.includes(item)) : category.length > 0 ? category : items;
  return (
    <>
      <Searchbar />
      <div className='flex mt-6 justify-between mr-12'>
        <p className='mb-6 ml-6 text-gray-700 text-5xl max-sm:text-sm font-bold dark:text-gray-400'>Products</p>
        <p className='text-gray-600 max-sm:text-sm max-sm:ml-4 max-sm:mt-0 mt-4'>{productsToDisplay.length} Products Available</p>
        <div className='mt-4 max-sm:mt-0'>
          <button
            className={`mr-4 max-sm:text-sm text-2xl ${viewMode === 'grid' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => setViewMode('grid')}
          >
            <IoGrid />
          </button>
          <button
            className={`mr-4 max-sm:text-sm text-2xl ${viewMode === 'list' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => setViewMode('list')}
          >
            <FaList />
          </button>
        </div>
      </div>
      <div className="md:hidden mt-4 ml-6">
        <button  onClick={() => setShowFilterBar(!showFilterBar)}>< IoMenu className='text-2xl' /></button>
      </div>
      <div className='flex'>
        {showFilterBar && (
          <div className='bg-white w-auto mt-8 md:block'> 
            <SideFilterBar />
          </div>
        )}
        <div className={`container mx-auto w-auto h-auto p-4 ${viewMode === 'grid' ? 'flex flex-wrap' : ''}`}>
          {productsToDisplay.map((product) => (
            <div key={product.id} className={`w-auto h-auto ${viewMode === 'grid' ? 'md:w-1/3' : ''} p-4`}>
              {viewMode === 'grid' && (
                <div className='relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white h-auto w-auto shadow-md'>
                  <Link to={`/singleproduct/${product.id}`} onClick={() => dispatch(setSingleProduct(product))}>
                    <img className='object-cover ' src={product.image} alt='product image' />
                  </Link>
                  <div className='mt-4 px-5 pb-5'>
                    <Link to={`/product/${product.id}`}>
                      <h5 className='text-xl tracking-tight text-slate-900'>{product.name}</h5>
                    </Link>
                    <div className='mt-2 mb-5 flex items-center justify-between'>
                      <p>
                        <span className='text-3xl font-bold text-slate-900'>${product.price}</span>
                        <span className='text-sm text-slate-900 line-through'>{product.originalPrice}</span>
                      </p>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {viewMode === 'list' && (
                <div className='flex border-b border-gray-200 pb-4'>
                  <Link to={`/singleproduct/${product.id}`} onClick={() => dispatch(setSingleProduct(product))}>
                    <img className='w-auto h-auto ' src={product.image} alt='product image' />
                  </Link>
                  <div className='ml-4'>
                    <Link to={`/product/${product.id}`}>
                      <h5 className='text-xl tracking-tight text-slate-900'>{product.name}</h5>
                    </Link>
                    <p className='text-gray-500'>{product.description}</p>

                    <p className='text-gray-700 mt-2'>${product.price}</p>
                    <p className='text-gray-500 line-through'>{product.originalPrice}</p>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className='mt-4 inline-block px-4 py-2 bg-slate-900 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
