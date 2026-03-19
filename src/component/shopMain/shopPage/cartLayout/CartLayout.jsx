'use client';
import React from "react";
import { usePathname } from 'next/navigation';
import StepIndicator from "../stepIndicators/StepIndicator";

const getTitleByPath = (pathname) => {
  if (pathname.includes("order-tracking")) return "ORDER TRACKING";
  if (pathname.includes("order-recived")) return "ORDER RECEIVED";
  if (pathname.includes("shoping-and-checkout")) return "SHIPPING AND CHECKOUT";
  return "CART";
};

const CartLayout = ({ children }) => {
  const pathname = usePathname();
  const title = getTitleByPath(pathname);

  return (
    <section className="pt-34 lg:pt-40 pb-[90px]">
      <div className="container px-4 sm:px-6">
        <h1
          className={`text-[22px] sm:text-[28px] md:text-[35px] text-head font-bold pb-6 sm:pb-9 md:pb-12 ${pathname.includes("order-tracking") ? "text-center w-full" : ""}`}
        >
          {title}
        </h1>

        {!pathname.includes("order-tracking") && <StepIndicator />}

        {children}
      </div>
    </section>
  );
};

export default CartLayout;
