'use client';
import allIcons from "@/helper/iconProvider";
import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import Images from "@/component/common/Images";
import useCartStore from "@/store/cartSlice";

const AddToCart = ({ unMount }) => {
  const { close } = allIcons;
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCartStore();
  const navtabRef = useRef(null);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navtabRef.current && !navtabRef.current.contains(event.target)) {
        unMount(null);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [unMount]);

  return (
    <div ref={navtabRef} className="w-full lg:w-105 h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-footer">
        <p className="texts_16_medium text-head tracking-wider">
          SHOPPING BAG ({cartItems.length})
        </p>
        <span className="text-2xl cursor-pointer" onClick={() => unMount(null)}>
          {close}
        </span>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-y-4">
        {cartItems.length === 0 ? (
          <p className="texts_14_regular text-second text-center mt-10">
            Your cart is empty
          </p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="relative flex gap-x-4 pb-4 border-b border-footer">
              {/* Remove */}
              <span
                className="absolute top-0 right-0 text-sm cursor-pointer text-head"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </span>

              {/* Image */}
              <div className="w-25 h-25 bg-secondbg shrink-0">
                {item.image ? (
                  <Images imgSrc={item.image} imgAlt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-secondbg" />
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-y-1 flex-1">
                <p className="texts_14_medium text-second">{item.name}</p>
                <p className="texts_13_regular text-second">{item.category}</p>

                {/* Quantity + Price */}
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-x-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="text-head texts_14_regular cursor-pointer"
                    >-</button>
                    <span className="texts_14_regular text-head">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="text-head texts_14_regular cursor-pointer"
                    >+</button>
                  </div>
                  <p className="texts_14_regular text-head">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex flex-col gap-y-3 border-t border-footer pt-4">
        <div className="flex justify-between items-center">
          <p className="texts_14_medium text-head tracking-wider">SUBTOTAL:</p>
          <p className="texts_14_medium text-head">${subtotal.toFixed(2)}</p>
        </div>
        <Link
          href="/cart"
          className="w-full border border-head text-center texts_14_medium text-head py-3 lg:pt-5.5 lg:pb-3.5 cursor-pointer hover:bg-head hover:text-white transition-all"
        >
          VIEW CART
        </Link>
        <Link
          href="/cart/shoping-and-checkout"
          className="w-full bg-head text-white py-3.5 lg:pt-5.5 lg:pb-3.5 hover:bg-[#DB4444] transition-all mt-1 leading-6 text-center texts_14_medium cursor-pointer"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;