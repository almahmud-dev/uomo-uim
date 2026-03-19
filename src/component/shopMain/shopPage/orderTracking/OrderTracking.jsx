'use client';
import React, { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-[14px] text-second leading-6 max-w-125 mb-5 ">
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>

      <div className="w-full max-w-125 flex flex-col gap-4">
        {/* Order ID */}
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order ID"
          className="w-full border border-footer px-4.25 pt-4.25 pb-3.5 text-[14px] text-head placeholder:text-second outline-none focus:border-2 focus:border-head transition-colors leading-6"
        />

        <div className="relative w-full">
          <label className="absolute -top-2.5 left-3 bg-white px-1 leading-6 text-[14px] text-head">
            Billing email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-footer px-4.25 pt-4.25 pb-3.5 text-[14px] text-head placeholder:text-second outline-none focus:border-head focus:border-2 transition-colors leading-6"
          />
        </div>

        {/* Track Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-head text-white pt-5.5 pb-3.5 text-[14px] font-medium
          hover:bg-[#DB4444] transition-all mt-1 leading-6"
        >
          TRACK
        </button>
      </div>
    </div>
  );
};

export default OrderTracking;
