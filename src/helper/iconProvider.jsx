'use client';
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const allIcons = {
  navIconItems: [
    { id: 1, name: "Search", icon: <GoSearch />, link: "#", badge: null },
    { id: 2, name: "Account", icon: <FaRegUser />, link: "#", badge: null },
    { id: 3, name: "Wishlist", icon: <FiHeart />, link: "/dashboard/wishlist", badge: null },
    { id: 4, name: "Cart", icon: <HiOutlineShoppingBag />, link: "#", badge: 3 },
    { id: 5, name: "Mobile Menu", icon: <HiMiniBars3CenterLeft />, link: "#", badge: null },
  ],
  close: <IoMdClose />,
  socialIcons: [
    { id: 1, name: "Facebook", icon: FaFacebookF, link: "https://www.facebook.com" },
    { id: 2, name: "Twitter", icon: FaTwitter, link: "https://www.twitter.com" },
    { id: 3, name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com" },
    { id: 4, name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com" },
    { id: 5, name: "Pinterest", icon: FaPinterestP, link: "https://www.pinterest.com" },
  ],
  filter: <IoFilterSharp />,
  chevron: [
    { id: 1, icon: <GoChevronLeft /> },
    { id: 2, icon: <GoChevronRight /> },
  ],
};

export default allIcons;
