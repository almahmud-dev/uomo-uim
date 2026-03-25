"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const ShopFilter = ({ isOpen, onClose }) => {
  return (
    <>
      <section>
        {isOpen && (
          <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
        )}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 md:w-90 lg:w-96 xl:w-105 2xl:w-105 bg-white shadow-lg overflow-y-auto z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8 bg-footer pt-8.25 pb-6.5 pl-6 sm:pl-8 md:pl-10 pr-6 sm:pr-8 md:pr-10">
            <h3 className="texts_16_medium text-head uppercase">Filter By</h3>
            <button onClick={onClose} className="text-head texts_16_medium">
              <AiOutlineClose />
            </button>
          </div>

          {/* Categories - Always Open */}
          <div className="pl-6 sm:pl-8 md:pl-10 pt-4 pr-6 sm:pr-8 md:pr-10 pb-4 mb-4">
            <div className="flex justify-between w-full texts_18_medium text-head uppercase mb-3">
              <span>Product Categories</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 texts_14_regular text-head">
              <span className="texts_14_medium text-head cursor-pointer">Dresses</span>
              <span className="texts_14_medium text-head cursor-pointer">Shorts</span>
              <span className="texts_14_medium text-head cursor-pointer">Sweatshirts</span>
              <span className="texts_14_medium text-head cursor-pointer">Swimwear</span>
              <span className="texts_14_medium text-head cursor-pointer">Jackets</span>
              <span className="texts_14_medium text-head cursor-pointer">T-Shirts & Tops</span>
              <span className="texts_14_medium text-head cursor-pointer">Jeans</span>
              <span className="texts_14_medium text-head cursor-pointer">Trousers</span>
              <span className="texts_14_medium text-head cursor-pointer">Men</span>
              <span className="texts_14_medium text-head cursor-pointer">Jumpers & Cardigans</span>
            </div>
          </div>

          {/* Colors - Always Open */}
          <div className="pl-6 sm:pl-8 md:pl-10 pt-4 pr-6 sm:pr-8 md:pr-10 pb-4 mb-4">
            <div className="flex justify-between w-full texts_18_medium text-head uppercase mb-3">
              <span>Color</span>
            </div>
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
          </div>

          {/* Sizes - Always Open */}
          <div className="pl-6 sm:pl-8 md:pl-10 pt-4 pr-6 sm:pr-8 md:pr-10 pb-4 mb-4">
            <div className="flex justify-between w-full texts_18_medium text-head uppercase mb-3">
              <span>Sizes</span>
            </div>
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
          </div>

          {/* Brands - Always Open */}
          <div className="pl-6 sm:pl-8 md:pl-10 pt-4 pr-6 sm:pr-8 md:pr-10 pb-4 mb-4">
            <div className="flex justify-between w-full texts_18_medium text-head uppercase mb-3">
              <span>Brands</span>
            </div>
            <div className="mt-3">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-2 w-full px-3 py-2 texts_14_medium pr-8"
                />
                <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="space-y-2 texts_14_medium">
                {[
                  { name: "Adidas", count: 2 },
                  { name: "Balmain", count: 7 },
                  { name: "Balenciaga", count: 10 },
                  { name: "Burberry", count: 39 },
                  { name: "Kenzo", count: 95 },
                  { name: "Givenchy", count: 1092 },
                  { name: "Zara", count: 48 },
                ].map((brand) => (
                  <label key={brand.name} className="flex justify-between items-center py-1.5">
                    <span className="flex items-center gap-2">
                      <input type="checkbox" className="mr-1" />
                      {brand.name}
                    </span>
                    <span className="text-gray-400">{brand.count}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Price - Always Open */}
          <div className="pl-6 sm:pl-8 md:pl-10 pt-4 pr-6 sm:pr-8 md:pr-10 pb-6 mb-4">
            <div className="flex justify-between w-full texts_18_medium text-head uppercase mb-3">
              <span>Price</span>
            </div>
            <div className="mt-3">
              <input type="range" min="29" max="937" className="w-full" />
              <div className="flex justify-between texts_14_medium mt-2 text-head">
                <span>Min Price: $29</span>
                <span>Max: $937</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopFilter;