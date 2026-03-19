'use client';
import allIcons from "@/helper/iconProvider";

import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import { cartItems } from "@/helper/projectArrayObj";
import Images from "@/component/common/Images";

const AddToCart = ({ unMount }) => {
  const { close } = allIcons;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  //Containe er bahire click korle e cole jabe
  const navtabRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navtabRef.current && !navtabRef.current.contains(event.target)) {
        unMount(null);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [unMount]);

  return (
    <div ref={navtabRef} className=" w-full lg:w-105 h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-footer">
        <p className="texts_16_medium text-head tracking-wider">
          SHOPPING BAG ( {cartItems.length} )
        </p>
        <span
          className="text-2xl cursor-pointer"
          onClick={() => unMount("hello world")}
        >
          {close}
        </span>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="relative flex gap-x-4 pb-4 border-b border-footer"
          >
            {/* Remove */}
            <span className="absolute top-0 right-0 text-sm cursor-pointer text-head">
              ×
            </span>

            {/* Image */}
            <div className="w-25 h-25 bg-secondbg shrink-0">
              {item.image ? (
                <Images
                  imgSrc={item.image}
                  imgAlt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondbg" />
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-y-1 flex-1">
              <p className="texts_14_medium text-second">{item.name}</p>
              <p className="texts_13_regular text-second">
                Color: {item.color}
              </p>
              <p className="texts_13_regular text-second">Size: {item.size}</p>

              {/* Quantity + Price */}
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center gap-x-3">
                  <button className="text-head texts_14_regular">-</button>
                  <span className="texts_14_regular text-head">
                    {item.quantity}
                  </span>
                  <button className="text-head texts_14_regular">+</button>
                </div>
                <p className="texts_14_regular text-head">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex flex-col gap-y-3 border-t border-footer pt-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <p className="texts_14_medium text-head tracking-wider">SUBTOTAL:</p>
          <p className="texts_14_medium text-head">${subtotal}.00</p>
        </div>

        {/* View Cart */}
        <Link
          href="/cart"
          className="w-full border border-head text-center texts_14_medium text-head py-3 lg:pt-5.5 lg:pb-3.5 cursor-pointer hover:bg-head hover:text-white transition-all "
        >
          VIEW CART
        </Link>

        {/* Checkout */}
        <Link
          href="/cart/shoping-and-checkout"
          className="w-full bg-head text-white py-3.5 lg:pt-5.5 lg:pb-3.5
          hover:bg-[#DB4444] transition-all mt-1 leading-6 text-center texts_14_medium cursor-pointer"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
