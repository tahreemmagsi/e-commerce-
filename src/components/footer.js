import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegCopyright } from "react-icons/fa";
import paymentCard from "../images/payment.png"
function Footer() {
  return (
    <>
    <div> <div className="w-full bg-[#F5F5F3] py-20">
    <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
      <div className="col-span-2">
        <div className="flex flex-col gap-6">
        <h1 className='font-bold text-xl mb-6'>Your acount </h1>
          <p className="text-base w-full xl:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
            ab ullam, numquam nesciunt in.
          </p>
          <ul className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@reactjsBD"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaYoutube className='text-red-500 h-8 w-8' />
              </li>
            </a>
            <a
              href="https://github.com/noorjsdivs"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaGithub className='text-gray-700 h-8 w-8'/>
              </li>
            </a>
            <a
              href="https://www.facebook.com/Noorlalu143/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaFacebook className='text-blue-500 h-8 w-8'/>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaLinkedin className='text-blue-700 h-8 w-8'/>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
        <h1 className='font-bold text-xl mb-6'>Shop </h1>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Accesories
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Clothes
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Electronics
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Home appliances
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            New Arrivals
          </li>
        </ul>
      </div>
      <div>
       <h1 className='font-bold text-xl mb-6'>Your acount </h1> 
        <ul className="flex flex-col gap-2">
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Profile
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Orders
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Addresses
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Account Details
          </li>
          <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Payment Options
          </li>
        </ul>
      </div>
      <div className="col-span-2 flex flex-col items-center w-full px-4">
        <div className="w-full">
        
        <h1 className='font-bold text-xl mb-6'>Email </h1>
          <p className="text-center mb-4">
            A at pellentesque et mattis porta enim elementum.
          </p>
         
          <img
            className='w-[80%] lg:w-[60%] mx-auto '

            src={paymentCard}
          />
        </div>
      </div>
    </div>
  </div>

</div>
 <div className="w-full bg-[#F5F5F3] group">
 <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
   <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
     <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
       <FaRegCopyright />
     </span>
     Copyright 2022 | Orebi shopping | All Rights Reserved |
     <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
       <span className="ml-1 font-medium group-hover:text-primeColor">
         Powered by ReactBD.com
       </span>
     </a>
   </p>
 </div>
</div>
</>
  )
}

export default Footer