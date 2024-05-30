import React, { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { filterProducts, setItems } from "../features/cartslice"; // Import setItems action creator

  
function Searchbar() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://api.pujakaitem.com/api/products");
        const data = await response.json();
        dispatch(setItems(data)); 
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [dispatch]); 

  const [terms, setTerms] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setTerms(term);
    dispatch(filterProducts(term));
  };


  return (
    <>
    <div className="w-full h-[6rem] bg-[#F5F5F3] relative">
    <div className="flex items-center justify-center pt-6 relative">
      <div className="relative flex items-center">
        <input
          className="h-[3rem] max-sm:w-auto  w-[30rem] border-b border-t border-l rounded-md outline-none placeholder-[#C4C4C4] text-[14px] px-2"
          type="text"
          placeholder="Search your products here"
          value={terms}
          onChange={handleSearch}
        />
        <button
          className="absolute right-0 top-0 bg-white h-[3rem] w-12 border-b border-t border-r rounded-md flex justify-center items-center"
        >
          <FaSearch className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="absolute right-0 top-0 flex pt-[3rem] mr-8 items-center h-[3rem]">
       
      </div>
      </div>
      </div>
    </>
  )
}

export default Searchbar