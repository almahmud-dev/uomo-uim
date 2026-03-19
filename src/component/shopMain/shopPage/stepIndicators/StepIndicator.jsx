'use client';
import React from "react";
import { useRouter, usePathname } from 'next/navigation';

const steps = [
  {
    num: "01",
    label: "SHOPPING BAG",
    sub: "Manage Your Items List",
    path: "/cart",
  },
  {
    num: "02",
    label: "SHIPPING AND CHECKOUT",
    sub: "Checkout Your Items List",
    path: "/cart/shoping-and-checkout",
  },
  {
    num: "03",
    label: "CONFIRMATION",
    sub: "Review And Submit Your Order",
    path: "/cart/order-recived",
  },
];

const getStepIndex = (pathname) => {
  if (pathname.includes("order-recived") || pathname.includes("order-tracking")) return 2;
  if (pathname.includes("shoping-and-checkout")) return 1;
  return 0;
};

const StepIndicator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentStep = getStepIndex(pathname);

  return (
    <div className="flex mb-6 sm:mb-8 lg:mb-10 border-b border-gray-200">
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        return (
          <div
            key={step.num}
            onClick={() => router.push(step.path)}
            style={{ flex: 1 }}
            className="relative pb-3 sm:pb-4 lg:pb-5 transition-all duration-200 text-head cursor-pointer"
          >
            {idx <= currentStep && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-head" />
            )}
            <div className="flex items-baseline gap-1 lg:gap-2 hover:opacity-60 transition-opacity duration-200">
              <span className="text-[13px] sm:text-[15px] lg:text-[18px] font-medium">
                {step.num}
              </span>
              <span className={`text-[13px] sm:text-[15px] lg:text-[18px] font-medium hidden sm:inline ${isActive ? "text-head" : "text-gray-400"}`}>
                {step.label}
              </span>
              <span className={`text-[11px] font-medium sm:hidden ${isActive ? "text-head" : "text-gray-400"}`}>
                {step.label.split(" ")[0]}
              </span>
            </div>
            <p className="text-[11px] sm:text-[12px] lg:text-[14px] text-second mt-1 ml-4 sm:ml-5 lg:ml-7 hidden sm:block">
              {step.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
