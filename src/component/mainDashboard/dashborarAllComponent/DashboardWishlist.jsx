'use client';
import React from "react";
const wish_img = "/assets/images/nav-dropImage.png";

const wishlistItems = [
  { id: 1, category: "Dresses", name: "Colorful Jacket", price: "$29" },
  { id: 2, category: "Dresses", name: "Shirt In Botanical Cheetah Print", price: "$62" },
  { id: 3, category: "Dresses", name: "Cotton Jersey T-Shirt", price: "$17" },
];

const DashboardWishlist = () => {
  return (
    <div className="w-full pt-8 sm:pt-14 lg:pt-27 px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-[30px]">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="w-full group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={wish_img}
                alt={item.name}
                className="w-full object-cover"
              />
              {/* X button */}
              <button className="absolute top-3 left-3 w-7 h-7 bg-white border border-gray-200 flex items-center justify-center text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                ✕
              </button>
            </div>

            {/* Info */}
            <div className="flex items-start justify-between pt-2">
              <div>
                <p className="text-[11px] text-gray-400 mb-[2px]">{item.category}</p>
                <p className="text-[12px] sm:text-sm text-gray-900 font-normal">{item.name}</p>
                <p className="text-[12px] sm:text-sm text-gray-900 mt-[2px]">{item.price}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 mt-1 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardWishlist;