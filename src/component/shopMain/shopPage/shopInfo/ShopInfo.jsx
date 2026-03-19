'use client';
import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { LiaDollarSignSolid } from "react-icons/lia";
import { useCartStore } from "../cart/Cart";

// CartLayout provides: <section>, <div className="container">, <h1>, <StepIndicator>
const ShopInfo = () => {
  const { items: cartItems, clearCart } = useCartStore();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const vat = Math.round(subtotal * 0.015);
  const total = subtotal + vat;
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
  return (
    <div className="w-full flex flex-col items-center">
      {/* ── Checkmark + Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center mt-4 sm:mt-6 mb-8 sm:mb-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
            delay: 0.15,
          }}
          className="w-13 h-13 sm:w-14.5 sm:h-14.5 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-5 sm:mb-4.75 bg-third"
        >
          <HiCheck
            className="text-white text-[22px] sm:text-[26px] lg:text-[30px] "
            strokeWidth={2}
          />
        </motion.div>

        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[35px] leading-[100%] font-normal text-head mb-1.5">
          Your order is completed!
        </h2>
        <p className="text-[14px] leading-6 text-second font-normal">
          Thank you. Your order has been received.
        </p>
      </motion.div>

      {/* ── Order Meta — dashed border, NO column dividers ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full max-w-225 dashed-border mb-8 sm:mb-9"
      >
        {/* Mobile & Tablet: grid, Desktop: flex with exact gaps */}
        <div className="grid grid-cols-2 gap-y-6 py-8 px-6 sm:grid-cols-2 sm:gap-y-8 sm:px-8 md:grid-cols-4 md:gap-y-0 md:px-10 lg:flex lg:items-start lg:py-10 lg:px-0">
          <div className="flex flex-col gap-1 lg:pl-10.75 lg:pr-21.25 whitespace-nowrap">
            <span className="text-[12px] sm:text-[14px] text-second font-medium leading-6">
              Order Number
            </span>
            <span className="text-[14px] sm:text-[16px] font-medium text-head leading-[100%]">
              13119
            </span>
          </div>

          <div className="flex flex-col gap-1 lg:pr-37 whitespace-nowrap">
            <span className="text-[12px] sm:text-[14px] text-second font-medium leading-6">
              Date
            </span>
            <span className="text-[14px] sm:text-[16px] font-medium text-head leading-[100%]">
              {formattedDate}
            </span>
          </div>

          <div className="flex flex-col gap-1 lg:pr-30.75 whitespace-nowrap">
            <span className="text-[12px] sm:text-[14px] text-second font-medium leading-6">
              Total
            </span>
            <span className="text-[14px] sm:text-[16px] font-medium text-head leading-[100%]">{`$${total.toFixed(2)}`}</span>
          </div>

          <div className="flex flex-col gap-1 lg:pr-61.5 whitespace-nowrap">
            <span className="text-[12px] sm:text-[14px] text-second font-medium leading-6">
              Payment Method
            </span>
            <span className="text-[14px] sm:text-[16px] font-medium text-head leading-[100%]">
              Direct Bank Transfer
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Order Details — solid border box ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="w-full max-w-225 border border-head mb-8 sm:mb-10 px-10.25"
      >
        {/* "ORDER DETAILS" heading row with icon */}
        <div className="flex items-center ">
          <span
            className="
          text-[13px]
          sm:text-[14px]
          md:text-[16px]
          font-medium text-head leading-[100%] pt-9.5 pb-8"
          >
            ORDER DETAILS
          </span>
        </div>

        {/* PRODUCT / SUBTOTAL column headers — plain, no background */}
        <div
          className="
        flex justify-between border-b border-footer"
        >
          <span className="text-[12px] sm:text-[14px] font-medium text-head leading-6 pb-3.25">
            PRODUCT
          </span>
          <span className="text-[12px] sm:text-[14px] font-medium text-head leading-6">
            SUBTOTAL
          </span>
        </div>

        {/* Cart items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center py-3.25"
          >
            <span className="text-[13px] sm:text-[14px] text-second font-medium">
              {item.title}{" "}
              <span className="font-medium text-second">x{item.quantity}</span>
            </span>
            <span className="text-[13px] sm:text-[14px] text-head font-normal flex items-center gap-0.5">
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        {/* SUBTOTAL */}
        <div className="flex justify-between items-center pt-5 pb-3.25 border-y border-footer">
          <span className="text-[13px] sm:text-[14px] font-medium text-head">
            SUBTOTAL
          </span>
          <span className="text-[13px] sm:text-[14px] text-head font-medium flex items-center gap-0.5">
            <LiaDollarSignSolid />
            {subtotal.toFixed(2)}
          </span>
        </div>

        {/* SHIPPING — with truck icon */}
        <div className="flex justify-between items-center pt-5 pb-5.25 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-medium text-head flex items-center gap-2">
            SHIPPING
          </span>
          <span className="text-[13px] sm:text-[14px] text-second font-normal leading-6">
            Free shipping
          </span>
        </div>

        {/* VAT */}
        <div className="flex justify-between items-center pt-3.5 pb-3.25 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-medium text-head">
            VAT
          </span>
          <span className="text-[13px] sm:text-[14px] text-head font-normal flex items-center gap-0.5">
            <LiaDollarSignSolid />
            {vat}
          </span>
        </div>

        {/* PAYMENT METHOD — with card icon */}
        <div className="flex justify-between items-center pt-3.75 pb-2.5 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase flex items-center gap-2">
            Payment Method
          </span>
          <span className="text-[13px] sm:text-[14px] text-second leading-6 font-normal">
            Direct bank transfer
          </span>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between items-cente pt-3.75 pb-7.75">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase">
            Total
          </span>
          <span className="text-[13px] sm:text-[14px] text-head font-semibold flex items-center gap-0.5">
            <LiaDollarSignSolid />
            {total}
          </span>
        </div>
      </motion.div>

      {/* ── Continue Shopping button ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex flex-col sm:flex-row"
      >
        <Link
          href="/"
          onClick={clearCart}
          className="inline-block px-14 sm:px-16 pt-5.5 pb-3.5 bg-head text-white text-[12px] sm:text-[13px] font-medium hover:bg-[#DB4444] transition-all uppercase w-full sm:w-auto text-center mb-3 sm:mb-0"
        >
          Continue Shopping
        </Link>
        <Link
          href="/cart/order-tracking"
          className="inline-block px-14 sm:px-16 pt-5.5 pb-3.5 bg-head text-white text-[12px] sm:text-[13px] font-medium hover:bg-[#DB4444] transition-all uppercase w-full sm:w-auto text-center sm:ml-4 ml-0"
        >
          Order Tracking
        </Link>
      </motion.div>
    </div>
  );
};

export default ShopInfo;
