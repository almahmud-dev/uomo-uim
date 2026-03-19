'use client';
import Container from "@/component/common/Container";
import React from "react";

const DashboardAccDetails = () => {
  return (
    <>
      <Container>
        <div className="w-full mt-8 sm:mt-12 lg:mt-25">

          {/* First Name + Last Name */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[27px] mb-5 sm:mb-7.5">
            <div className="flex-1 border border-[#c8dde9] focus-within:border-gray-400 transition-all">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
            <div className="flex-1 border border-[#c8dde9] focus-within:border-gray-400 transition-all">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Display Name */}
          <div className="border border-[#c8dde9] mb-5 sm:mb-7.5 focus-within:border-gray-400 transition-all">
            <input
              type="text"
              placeholder="Display Name"
              className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Email Address */}
          <div className="border border-[#c8dde9] mb-5 sm:mb-7.5 focus-within:border-gray-900 transition-all">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Password Change */}
          <div className="pt-2 sm:pt-4">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-900 mb-5 sm:mb-7.5">
              Password Change
            </p>

            <div className="border border-[#c8dde9] mb-5 sm:mb-7.5 focus-within:border-gray-400 transition-all">
              <input
                type="password"
                placeholder="Current password (leave blank to leave unchanged)"
                className="w-full px-4 py-3 lg:pl-5.5 lg:pt-5 lg:pb-3.75 lg:pr-0 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            <div className="border border-[#c8dde9] mb-5 sm:mb-7.5 focus-within:border-gray-400 transition-all">
              <input
                type="password"
                placeholder="New password (leave blank to leave unchanged)"
                className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            <div className="border border-[#c8dde9] mb-5 sm:mb-7.5 focus-within:border-gray-400 transition-all">
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-2 sm:pt-4 pb-5">
            <button className="w-full sm:w-auto bg-black text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-8 py-3 sm:px-10 sm:py-4 lg:pl-25 lg:pt-5.25 lg:pr-23.5 lg:pb-3.75 hover:bg-gray-800 transition-colors">
              Save Changes
            </button>
          </div>

        </div>
      </Container>
    </>
  );
};

export default DashboardAccDetails;