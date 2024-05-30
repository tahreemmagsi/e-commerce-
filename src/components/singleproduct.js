import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleProduct } from "../features/cartslice";
import PageNavigation from "./pagenavigation";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import ProductImages from "./productimages";
import Star from "./star";
import { FaCheck } from "react-icons/fa";
import { addToCart } from "../features/cartslice";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.cart.singleProduct);
  const [loading, setLoading] = useState(true);
  const [color, setcolor] = useState(singleProduct.colors[0]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.pujakaitem.com/api/products/${id}`
        );
        dispatch(setSingleProduct(response.data));
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, dispatch]);
 
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <PageNavigation title={singleProduct.name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white md:mt-16 md:ml-0 p-4">
          <ProductImages imgs={singleProduct.image} />
        </div>
        <div className="bg-white w-full p-4 md:w-[35rem]">
          {singleProduct && (
            <div>
              <h2 className="text-3xl mb-4">{singleProduct.name}</h2>
              <Star
                stars={singleProduct.stars}
                reviews={singleProduct.reviews}
              />
              <div className="mt-2">
                MRP: <del>${singleProduct.price + 250000}</del>
              </div>
              <p className="text-blue-600 mt-2">Deal of the day: ${singleProduct.price}</p>
              <p className="mt-2">{singleProduct.description}</p>

              <div className="flex items-center text-center mt-2 justify-between">
                <div>
                  <TbTruckDelivery className="ml-6" />
                  <p>Free Delivery</p>
                </div>
                <div>
                  <TbReplace className="ml-12" />

                  <p>30 days Replacement</p>
                </div>
                <div>
                  <TbTruckDelivery className="ml-4" />
                  <p>Delivered</p>
                </div>
                <div>
                  <MdSecurity className="ml-10" />
                  <p>Two year Warranty</p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                Available:{" "}
                <span className="text-black">
                  {singleProduct.stock > 0 ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p className="mt-2 text-gray-500">ID:<span className="text-black"> {singleProduct.id}</span></p>
              <p className="mt-2 text-gray-500">Brand:<span className="text-black"> {singleProduct.company}</span></p>
              <hr className="border-1.5 border-black mt-4" />
              <p className="flex mt-2 mr-2">
                Colors: 
                {singleProduct.colors.map((curcol, index) => (
                  <button
                    className="rounded-full h-4  w-4 mr-2 mt-1.5  flex justify-center items-center"
                    onClick={() => setcolor(curcol)}
                    key={index}
                    style={{ backgroundColor: curcol }}
                  >
                    {" "}
                    {color === curcol ? (
                      <FaCheck className="text-white text-xs" />
                    ) : null}
                  </button>
                ))}
              </p>
              
              <button
                onClick={() => dispatch(addToCart(singleProduct))}
                className="flex mt-6 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
