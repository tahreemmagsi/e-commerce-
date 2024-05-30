import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeproduct } from "../features/cartslice";
import { increasequantity } from "../features/cartslice";
import { decreasequantity } from "../features/cartslice";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  if (totalQuantity === 0) {
    return <Navigate to="/empty" />;
  }
  return (
    <section className="py-12 bg-white font-poppins dark:bg-gray-700 flex-grow">
      <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <h2 className="mb-8 text-4xl text-gray-700 font-bold dark:text-gray-400">
            Your Cart
          </h2>
          <div className="p-6 mb-8 border border-gray-300 bg-gray-200 dark:bg-gray-800 dark:border-gray-800">
            <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
              <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <h2 className="font-bold text-gray-500 dark:text-gray-400">
                  Product{" "}
                </h2>
              </div>
              <div className="hidden px-4 lg:block lg:w-2/12">
                <h2 className="font-bold text-gray-500 dark:text-gray-400">
                  Price
                </h2>
              </div>
              <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                <h2 className="font-bold text-gray-500 dark:text-gray-400">
                  Quantity
                </h2>
              </div>
              <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                <h2 className="font-bold text-gray-500 dark:text-gray-400">
                  {" "}
                  Subtotal
                </h2>
              </div>
            </div>

            {cart.map((product) => (
              <div
                key={product.id}
                className="py-4 mb-8  border-b border-gray-300 dark:border-gray-700"
              >
                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                  <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                    <div className="flex flex-wrap items-center -mx-4">
                      <div className="w-full px-4 mb-3 md:w-1/3">
                        <div className="w-full h-96 md:h-24 md:w-24">
                          {Array.isArray(product.image) ? (
                            <img
                              src={product.image[0].url}
                              alt="Product Image"
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <img
                              src={product.image}
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          )}
                          {console.log(product.image)}
                        </div>
                      </div>
                      <div className="w-2/3 px-4">
                        <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                          {product.name}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 ">
                          {product.title}
                        </p>
                        <button
                          className="text-red-500 dark:text-red-400 hover:underline"
                          onClick={() => dispatch(removeproduct(product.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden px-4 lg:block lg:w-2/12">
                    <p className="text-lg font-bold text-black dark:text-gray-400">
                      ${product.price}
                    </p>
                    <span className="text-xs text-gray-500 line-through dark:text-gray-400">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                    <div className="inline-flex items-center px-4 font-semibold text-black  rounded-md dark:border-gray-700 ">
                      <button
                        className="py-2 hover:text-gray-700 bg-gray-400 dark:text-white"
                        onClick={() => dispatch(decreasequantity(product.id))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-white dark:text-gray-400 md:text-right"
                        value={product.quantity}
                      />
                      <button
                        className="py-2 hover:text-gray-700 bg-gray-400 dark:text-gray-400"
                        onClick={() => dispatch(increasequantity(product.id))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-auto px-4 text-right  md:w-1/6 lg:w-2/12 ">
                    <p className="text-lg font-bold text-black dark:text-gray-400">
                      ${product.price * product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-[4.5rem] md:w-1/3 px-4 lg:pl-8">
          <div className="p-6 border border-blue-200 dark:bg-gray-900 dark:border-gray-900 bg-gray-200 md:p-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
              Order Summary
            </h2>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
              <span className="text-gray-700 dark:text-gray-400">
                Total Quantity
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                {totalQuantity}
              </span>
            </div>

            <div className="flex items-center justify-between pb-4 mb-4 ">
              <span className="text-gray-700 dark:text-gray-400">
                Total Amount
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                ${totalPrice}
              </span>
            </div>

            <div className="flex items-center justify-between ">
              <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-black rounded-md hover:bg-gray-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
