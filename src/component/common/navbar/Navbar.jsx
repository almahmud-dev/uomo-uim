'use client';
import React from "react";
import NavbarLg from "./NavbarLg";
import NavbarMobile from "./NavbarMobile";
import { usePathname } from 'next/navigation';
import allImages from "@/helper/imagesProvider";

const Navbar = () => {
  // for locations
  const pathname = usePathname();

  // for images
  const { notFoundPage } = allImages;

  return (
    <div className="fixed top-0 left-0 w-full z-999 ">
      <div
        className={`hidden lg:block ${
          pathname === "/404" || pathname === "/coming-soon"
            ? "bg-white/10 backdrop-blur-md border-b border-white/20"
            : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        }`}
      >
        <NavbarLg />
      </div>
      <div className={`lg:hidden block bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)]`}>
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
