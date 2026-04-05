"use client";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CldImage } from "next-cloudinary";

const DrawerHeader = ({ onClose, onCartOpen, cartCount }) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-footer">
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="text-[22px] text-head cursor-pointer"
      >
        <IoMdClose />
      </button>

      <CldImage
        src="navicon_is7dpu"
        alt="Uomo logo"
        width={400}
        height={800}
        className="w-27.75 h-6.75"
      />

      <button
        onClick={onCartOpen}
        aria-label="Open cart"
        className="relative cursor-pointer pr-2.5"
      >
        <span className="text-[23px] text-head">
          <HiOutlineShoppingBag />
        </span>
        {cartCount > 0 && (
          <span className="absolute bg-third w-4.25 h-4.25 flex items-center justify-center text-[10px] font-medium text-white rounded-full -bottom-1.25 right-0.5">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

DrawerHeader.propTypes = {
  onClose:    PropTypes.func.isRequired,
  onCartOpen: PropTypes.func.isRequired,
  cartCount:  PropTypes.number.isRequired,
};

export default DrawerHeader;