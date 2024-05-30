// FeatureProduct.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterFeaturedProducts, setSingleProduct } from '../features/cartslice'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function FeatureProduct() {
    const dispatch = useDispatch();
    const featuredProducts = useSelector(state => state.cart.featuredProducts);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://api.pujakaitem.com/api/products');
                dispatch(filterFeaturedProducts(response.data));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <p className='font-bold text-gray-800 ml-6 text-3xl'>Featured Products</p>
            <div className="flex flex-col md:flex-row">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="w-auto  h-auto bg-[#F5F5F3] items-center justify-center text-center md:w-1/3 p-4">
                        <Link to={`/singleproduct/${product.id}`} onClick={() => dispatch(setSingleProduct(product))}>
                            <div className="relative flex flex-col justify-center items-center text-center overflow-hidden ml-10 rounded-lg border border-gray-100 bg-white h-[16rem] w-[15rem] shadow-md">
                                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                    <img className="w-auto h-auto " src={product.image} alt="product image" />
                                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                                </a>
                                <div className="mt-4 px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                                    </a>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                                            <span className="text-sm text-slate-900 line-through">${product.originalPrice}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FeatureProduct;
