'use client';
import React from "react";
import Link from 'next/link';
import { IoCloseOutline } from "react-icons/io5";
import useCartStore from "@/store/cartSlice";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { LiaDollarSignSolid } from "react-icons/lia";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCartStore();

  const increment = (item) => increaseQty(item.id);
  const decrement = (item) => decreaseQty(item.id);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const vat = Math.round(subtotal * 0.015);
  const total = subtotal + vat;

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ── Left ── */}
          <div className="flex-1 min-w-0 w-full">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-[3fr_0.8fr_1.2fr_0.8fr_30px] gap-4 pb-2.25">
              {["PRODUCT", "PRICE", "QUANTITY", "SUBTOTAL", ""].map((h) => (
                <span key={h} className="text-[14px] font-medium leading-6 text-head">
                  {h}
                </span>
              ))}
            </div>

            {/* Items */}
            {cartItems.map((cart) => (
              <div
                key={cart.id}
                className="
                  flex flex-col gap-3
                  md:grid md:grid-cols-[3fr_0.8fr_1.2fr_0.8fr_30px] md:gap-4 md:items-center
                  py-5 md:py-7.5
                  border-b border-[#E4E4E4] border-t
                  relative
                  animate-fadeIn
                "
              >
                {/* Product */}
                <div className="flex gap-3 md:gap-4 items-center">
                  <div className="shrink-0">
                    <img
                      className="w-16 h-16 md:w-30 md:h-30 object-cover bg-gray-200 rounded-sm"
                      src={cart.image}
                      alt={cart.title}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-[14px] md:text-[16px] font-normal text-head">
                      {cart.name}
                    </h3>
                    {cart.color && (
                      <p className="text-[12px] md:text-[13px] text-gray-500 mt-0.5">
                        Color: {cart.color}
                      </p>
                    )}
                    {cart.size && (
                      <p className="text-[12px] md:text-[13px] text-gray-500">
                        Size: {cart.size}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between md:block">
                  <span className="text-[12px] font-medium text-gray-400 md:hidden">Price</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-second flex items-center">
                    <LiaDollarSignSolid />
                    {cart.price}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between md:block">
                  <span className="text-[12px] font-medium text-gray-400 md:hidden">Quantity</span>
                  <div className="flex items-center border-2 border-[#E4E4E4] w-27.5 h-10 md:h-12.5">
                    <button
                      onClick={() => decrement(cart)}
                      className="w-9 h-full flex items-center justify-center text-gray-500 hover:text-[#DB4444] text-[14px] md:text-[16px] select-none cursor-pointer transition-colors"
                    >
                      <FaMinus />
                    </button>
                    <span className="flex-1 text-center text-[13px] md:text-[14px] select-none">
                      {cart.quantity}
                    </span>
                    <button
                      onClick={() => increment(cart)}
                      className="w-9 h-full flex items-center justify-center text-gray-500 hover:text-[#DB4444] text-[14px] md:text-[16px] select-none cursor-pointer transition-colors"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between md:block">
                  <span className="text-[12px] font-medium text-gray-400 md:hidden">Subtotal</span>
                  <span className="text-[14px] md:text-[16px] font-medium flex items-center text-head justify-start">
                    <LiaDollarSignSolid />
                    {(cart.price * cart.quantity).toFixed(0)}
                  </span>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(cart.id)}
                  className="absolute top-4 right-0 md:static text-gray-400 hover:text-[#DB4444] transition-colors cursor-pointer"
                >
                  <IoCloseOutline className="text-[20px]" />
                </button>
              </div>
            ))}

            {/* Bottom actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 md:mt-8">
              {/* Coupon */}
              <div className="flex items-center border border-[#E4E4E4] h-12 w-full sm:w-92.5 bg-white">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 pl-4 text-sm text-second outline-none h-full border-none bg-transparent"
                />
                <button className="px-3 md:px-4 h-full text-[12px] md:text-sm font-medium text-head cursor-pointer whitespace-nowrap">
                  APPLY COUPON
                </button>
              </div>

              {/* Update Cart — CSS only */}
              <button className="pt-5.5 pb-3.5 px-6 md:px-13.75 text-sm font-medium text-head bg-[#E4E4E4] hover:bg-[#DB4444] hover:text-white active:scale-[0.98] transition-all select-none whitespace-nowrap cursor-pointer">
                UPDATE CART
              </button>
            </div>
          </div>

          {/* ── Right: Totals ── */}
          <div className="w-full lg:w-105 shrink-0">
            <div className="border-2 border-head pl-5 md:pl-10.25 pr-5 md:pr-12.5 pt-6 md:pt-9.5 pb-5.5 animate-fadeIn">
              <h3 className="text-[15px] md:text-[16px] font-medium leading-[100%] mb-6 md:mb-8 uppercase">
                Cart Totals
              </h3>

              <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-3">
                <span className="text-sm font-medium text-head leading-6 uppercase">Subtotal</span>
                <span className="text-[14px] font-medium flex items-center pb-3.25">
                  <LiaDollarSignSolid />{subtotal}
                </span>
              </div>

              <div className="pb-5 border-b border-[#E4E4E4]">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-head uppercase pt-3.75">Shipping</span>
                  <div className="flex flex-col items-start space-y-2.5 pt-3.75">
                    {[
                      { id: "free", label: "Free shipping" },
                      { id: "flat", label: "Flat rate: $49" },
                      { id: "local", label: "Local pickup: $8" },
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded-none accent-head cursor-pointer shrink-0"
                        />
                        <span className="text-sm text-head leading-6 font-medium">{opt.label}</span>
                      </label>
                    ))}
                    <span className="text-sm text-head leading-6 font-medium">Shipping to AL.</span>
                    <button className="texts_14_medium text-head relative after:absolute after:content-[''] after:w-[59%] after:h-0.5 after:bg-head after:-bottom-0.75 after:left-0 hover:after:w-full after:duration-500 after:ease-in-out">
                      CHANGE ADDRESS
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between py-3.5 border-b border-[#E4E4E4]">
                <span className="text-sm text-head leading-6 font-medium uppercase">VAT</span>
                <span className="text-sm text-head leading-6 font-medium">${vat}</span>
              </div>

              <div className="flex items-center justify-between py-3.5">
                <span className="text-sm text-head leading-6 font-medium uppercase">Total</span>
                <span className="text-sm text-head leading-6 font-medium">${total}</span>
              </div>
            </div>

            <Link
              href="/cart/shopping-and-checkout"
              className="mt-5 block text-center pt-5.25 pb-3.75 bg-head text-white text-sm font-medium leading-6 hover:bg-[#DB4444] transition-all"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-6 bg-[#f9f9f9] rounded-lg border-2 border-dashed border-gray-300 animate-fadeIn">
          <div className="mb-6 bg-white p-5 rounded-full shadow-md">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-[22px] font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 text-center">Add some products to your cart to see them here.</p>
          <Link
            href="/"
            className="bg-[#DB4444] text-white px-10 py-3 rounded-sm hover:bg-black transition-all text-[14px] font-bold"
          >
            Go Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
