'use client';
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const ShopFilter = ({ isOpen, onClose}) => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };
  return (
    <>
      <section>
        <div className={`fixed top-0 right-0 h-full w-105 bg-white shadow-lg overflow-y-auto z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8 bg-footer pt-8.25 pb-6.5 pl-10 pr-10">
            <h3 className='texts_16_medium text-head uppercase'>Filter By</h3>
            <button onClick={onClose} className="text-head texts_16_medium ">✕</button>
          </div>
          {/* Categories */}
          <div className="pl-10 pt-9.5 pr-10 pb-4 mb-4">
            <button
              onClick={() => toggle("categories")}
              className="flex justify-between w-full texts_18_medium text-head uppercase"
            >
              Product Categories
              <span>{open === "categories" ? <IoIosArrowUp /> : <IoIosArrowDown />
              }</span>
            </button>

            {open === "categories" && (
              <div className="grid grid-cols-2 gap-2 mt-3.25 texts_14_regular text-head">
                <span className='texts_14_medium text-head cursor-pointer'>Dresses</span>
                <span className='texts_14_medium text-head cursor-pointer'>Shorts</span>
                <span className='texts_14_medium text-head cursor-pointer'>Sweatshirts</span>
                <span className='texts_14_medium text-head cursor-pointer'>Swimwear</span>
                <span className='texts_14_medium text-head cursor-pointer'>Jackets</span>
                <span className='texts_14_medium text-head cursor-pointer'>T-Shirts & Tops</span>
                <span className='texts_14_medium text-head cursor-pointer'>Jeans</span>
                <span className='texts_14_medium text-head cursor-pointer'>Trousers</span>
                <span className='texts_14_medium text-head cursor-pointer'>Men</span>
                <span className='texts_14_medium text-head cursor-pointer'>Jumpers & Cardigans</span>
              </div>
            )}
          </div>
          {/* Colors */}
          <div className="pl-10 pt-9.5 pr-10 pb-4 mb-4">
            <button
              onClick={() => toggle("colors")}
              className="flex justify-between w-full texts_18_medium text-head uppercase"
            >
              Color
              <span>{open === "colors" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </button>

            {open === "colors" && (
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="w-4 h-4 rounded-full bg-[#0A2472]"></div>
                <div className="w-4 h-4 rounded-full bg-[#D7BB4F]"></div>
                <div className="w-4 h-4 rounded-full bg-[#282828]"></div>
                <div className="w-4 h-4 rounded-full bg-[#B1D6E8]"></div>
                <div className="w-4 h-4 rounded-full bg-[#9C7539]"></div>
                <div className="w-4 h-4 rounded-full bg-[#D29B48]"></div>
                <div className="w-4 h-4 rounded-full bg-pink-300"></div>
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
              </div>
            )}
          </div>
          {/* Sizes */}
          <div className="pl-10 pt-9.5 pr-10 pb-4 mb-4">
            <button
              onClick={() => toggle("sizes")}
              className="flex justify-between w-full texts_18_medium text-head uppercase"
            >
              Sizes
              <span>{open === "sizes" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </button>

            {open === "sizes" && (
              <div className="flex flex-wrap gap-2 mt-3">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="border px-3 py-1 text-sm hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Brands */}
      <div className="pl-10 pt-9.5 pr-10 pb-4 mb-4">
        <button
          onClick={() => toggle("brands")}
          className="flex justify-between w-full texts_18_medium text-head uppercase"
        >
          Brands
          <span>{open === "brands" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>

        {open === "brands" && (
          <div className="mt-3">

            <input
              type="text"
              placeholder="Search"
              className="border-2 w-full px-3 py-2 mb-3 texts_14_medium"
            />

            <div className="space-y-2 texts_14_medium">

              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75 mt-7.5" />
                  Adidas
                </span>
                <span className="text-gray-400 mb-5.75 mt-7.5">2</span>
              </label>

              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75" />
                  Balmain
                </span>
                <span className="text-gray-400 mb-5.75">7</span>
              </label>

              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75" />
                  Balenciaga
                </span>
                <span className="text-gray-400 mb-5.75">10</span>
              </label>

              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75" />
                  Burberry
                </span>
                <span className="text-gray-400 mb-5.75">39</span>
              </label>
              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75" />
                  Kenzo
                </span>
                <span className="text-gray-400 mb-5.75">95</span>
              </label>
              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75" />
                  Givenchy
                </span>
                <span className="text-gray-400 mb-5.75">1092</span>
              </label>
              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2 mb-5.75" />
                  Zara
                </span>
                <span className="text-gray-400 mb-5.75">48</span>
              </label>

            </div>
          </div>
        )}
      </div>
           {/* Price */}
      <div className="pl-10 pt-9.5 pr-10 pb-4 mb-4">
        <button
          onClick={() => toggle("price")}
          className="flex justify-between w-full texts_18_medium text-head uppercase"
        >
          Price
          <span>{open === "price" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>

        {open === "price" && (
          <div className="mt-3">
            <input type="range" min="29" max="937" className="w-full" />

            <div className="flex justify-between texts_14_medium mt-2 text-head">
              <span>Min Price: $29</span>
              <span>Max: $937</span>
            </div>
          </div>
        )}
      </div>
       
 
        </div>
      </section>
    </>
  )
}

export default ShopFilter