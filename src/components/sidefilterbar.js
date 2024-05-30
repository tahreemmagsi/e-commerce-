import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByCompany,
  filterByColor,
  
  filterByPrice
} from "../features/cartslice";

function SideFilterBar() {
  const items = useSelector((state) => state.cart.items);
  let priceAr = items.map((crntElem) => crntElem.price);
  let maxprice = Math.max(...priceAr);
  const [minPrice, setMinPriceLocal] = useState(0);
  const [maxPrice, setMaxPriceLocal] = useState(items.price);

 

  const dispatch = useDispatch();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => curElem[property]);
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return ["All", ...new Set(newVal)];
  };

  const categoryData = getUniqueData(items, "category");
  const companyData = getUniqueData(items, "company");
  const colorsData = getUniqueData(items, "colors");

  const handleCategory = (category) => {
    dispatch(filterByCategory(category));
  };

  const handleCompany = (company) => {
    dispatch(filterByCompany(company));
  };

  const handleColor = (colors) => {
    dispatch(filterByColor(colors));
  };

  const handlePriceChange = (e) => {
    const newMaxPrice = e.target.value;
    setMaxPriceLocal(newMaxPrice);
   
      setMinPriceLocal(0);
    
    dispatch(filterByPrice({ minPrice, maxPrice: newMaxPrice }));
  };

  return (
    <>
      <h1 className="text-xl mr-16 ml-8">Category</h1>
      <div className="mt-2">
        {categoryData.map((curElem, index) => (
          <button
            key={index}
            onClick={() => handleCategory(curElem)}
            className="text-gray-500 hover:underline mb-2 block ml-8"
            value={curElem}
            name="category"
          >
            {curElem}
          </button>
        ))}
      </div>
      <div>
        <h1 className="text-xl mt-4 mr-16 ml-8">Company</h1>
        <form>
          <select
            name="company"
            id="company"
            onChange={(e) => handleCompany(e.target.value)}
            className="ml-8 mt-2 border border-gray-600 border-1 w-[7rem] text-center"
          >
            {companyData.map((curElemnt, index) => (
              <option key={index} value={curElemnt}>
                {curElemnt}
              </option>
            ))}
          </select>
        </form>
      </div>
      <h1 className="text-xl mr-16 ml-8 mt-6">Colors</h1>
      <div className="mt-2 ml-4">
        {colorsData.map((curElem, index) => (
          <button
            key={index}
            onClick={() => handleColor(curElem)}
            className="text-black ml-2 rounded-full h-4  w-4"
            style={{ backgroundColor: curElem }}
            value={curElem}
            name="colors"
          >
            {curElem === "All" ? "All" : ""}
          </button>
        ))}
      </div>
      <h1 className="text-xl mr-16 ml-8 mt-4">Price</h1>
      <div className="mt-2">
        <p className="ml-6 text-gray-500">${maxPrice}</p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxprice}
          value={maxPrice}
          onChange={handlePriceChange}
          className="ml-4 bg-blue-500 text-blue-600"
        ></input>
      </div>
    </>
  );
}

export default SideFilterBar;
