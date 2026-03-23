"use client";
import React, { useState } from "react";
import Container from "../Container";
import allImages from "@/helper/imagesProvider";
import Images from "../Images";
import { navItems, quickLinks } from "@/helper/projectArrayObj";
import Link from "next/link";
import allIcons from "@/helper/iconProvider";
const NavDownImg = "/assets/images/nav-dropImage.png";
import Button from "../Button";
import Login from "../../auth/Login";
import AddToCart from "../../shopMain/addToCart/AddToCart";
import NavTabs from "../../navtabs/NavTabs";
import useCartStore from "@/store/cartSlice";
import { FaHeart } from "react-icons/fa6"; // jokhne wiahliat hobe jokhn ai iocn dekahbe

const NavbarLg = () => {
  // for icon and images
  const { navLogo } = allImages;
  const { navIconItems, close } = allIcons;

  // add to cart korle aita diye data dhorbe
  const { cartItems, wishlistItems } = useCartStore(); // wishlistItems koita add kora hoyeceh
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length; // NEW wishlist count koita hoyeche

  // for manage state
  const [hoverItems, setHoverITems] = useState(null);
  const [open, setIsOpen] = useState(null);

  //  for handle evetnt
  const handleclicked = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  const handleUnMount = (value) => {
    setIsOpen(value);
    console.log(value);
  };

  return (
    <nav className="pt-7.25 pb-4.75 relative z-999!">
      <Container>
        <div className="flex justify-between">
          <div className="flex  items-center  gap-x-14 ">
            <Link href={"/"}>
              {" "}
              <Images
                imgSrc={navLogo}
                imgAlt={navLogo}
                className={"w-27.75 h-6.75"}
              />
            </Link>
            <ul className=" flex gap-x-9.25 ">
              {navItems.map((items, index) => {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => setHoverITems(items.label)}
                    onMouseLeave={() => setHoverITems(null)}
                    className=""
                  >
                    <Link
                      href={items.path}
                      className="texts_14_medium text-head relative  after:absolute after:content-[''] after:w-[0%] after:h-[1.5px] after:bg-head after:bottom-4.75 after:left-0 hover:after:w-[60%]  after:duration-500 after:ease-in-out   pb-6 "
                    >
                      {items.label}
                    </Link>

                    {/* for shop */}
                    {items.hasMegaMenu &&
                      hoverItems === items.label &&
                      hoverItems === "SHOP" && (
                        <div className=" bg-white absolute w-full top-full shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] left-0 ">
                          <Container>
                            <div className="  border-t border-footer pt-10 pb-11 grid grid-cols-12 ">
                              <div className="col-span-9 grid grid-cols-6">
                                <div>
                                  <div className="">
                                    <p className="texts_14_medium text-second pb-3">
                                      {items.megaMenuData[0]?.title}
                                    </p>
                                    <ul>
                                      {items.megaMenuData[0]?.links.map(
                                        (items, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="texts_14_regular text-head leading-8.75! w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                            >
                                              <Link href={items.link}>
                                                {items.name}
                                              </Link>
                                            </li>
                                          );
                                        },
                                      )}
                                    </ul>
                                  </div>
                                  <div className="mt-7.25">
                                    <p className="texts_14_medium text-second pb-3">
                                      {items.megaMenuData[1]?.title}
                                    </p>
                                    <ul>
                                      {items.megaMenuData[1]?.links.map(
                                        (items, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="texts_14_regular text-head leading-8.75! w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                            >
                                              <Link href={items.link}>
                                                {items.name}
                                              </Link>
                                            </li>
                                          );
                                        },
                                      )}
                                    </ul>
                                  </div>
                                </div>
                                <div className=" col-span-2 flex justify-center ">
                                  <div className="">
                                    <p className="texts_14_medium text-second pb-3">
                                      {items.megaMenuData[2]?.title}
                                    </p>
                                    <ul>
                                      {items.megaMenuData[2]?.links.map(
                                        (items, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="texts_14_regular text-head leading-8.75! w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                            >
                                              <Link href={items.link}>
                                                {items.name}
                                              </Link>
                                            </li>
                                          );
                                        },
                                      )}
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-span-3 grid grid-cols-2">
                                  <div className="flex justify-center">
                                    <div>
                                      <p className="texts_14_medium text-second pb-3">
                                        {items.megaMenuData[3]?.title}
                                      </p>
                                      <ul>
                                        {items.megaMenuData[3]?.links
                                          .slice(0, 12)
                                          .map((items, index) => {
                                            return (
                                              <li
                                                key={index}
                                                className="texts_14_regular text-head leading-8.75! w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                              >
                                                <Link href={items.link}>
                                                  {items.name}
                                                </Link>
                                              </li>
                                            );
                                          })}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="ml-10 mt-10.25">
                                    <ul>
                                      {items.megaMenuData[3]?.links
                                        .slice(12)
                                        .map((items, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="texts_14_regular text-head leading-8.75! w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                            >
                                              <Link href={items.link}>
                                                {items.name}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-3 relative ">
                                <Images
                                  imgAlt={"navdropDownImage"}
                                  imgSrc={NavDownImg}
                                  className={"w-102.5 h-112.5 object-cover"}
                                />
                                <div className=" absolute bottom-7.5 left-7.5">
                                  <h4 className="text-[28px] font-medium  text-head">
                                    NEW <br />
                                    HORIZONS
                                  </h4>
                                  <Button
                                    btnText={"SHOP NOW"}
                                    className={
                                      " mt-0.5 relative  after:absolute after:content-[''] after:w-[40%] after:h-0.5 after:bg-head after:-bottom-px after:left-0 hover:after:w-full  after:duration-500 after:ease-in-out"
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </Container>
                        </div>
                      )}

                    {/* for journal */}
                    {items.hasMegaMenu &&
                      hoverItems === items.label &&
                      hoverItems === "JOURNAL" && (
                        <div className=" shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)]  bg-white absolute top-[102%]  w-[795px] left-1/2  translate-x-[-36%] pt-[40px] pb-[32px] px-[59px] grid grid-cols-3">
                          <div className=" ">
                            <p className="texts_14_medium text-second pb-3">
                              {items.megaMenuData[0]?.title}
                            </p>
                            <ul>
                              {items.megaMenuData[0]?.links.map(
                                (items, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="texts_14_regular text-head !leading-[35px] w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                    >
                                      <Link href={items.link}>
                                        {items.name}
                                      </Link>
                                    </li>
                                  );
                                },
                              )}
                            </ul>
                          </div>
                          <div className="flex justify-center">
                            <div className=" ">
                              <p className="texts_14_medium text-second pb-3">
                                {items.megaMenuData[1]?.title}
                              </p>
                              <ul>
                                {items.megaMenuData[1]?.links.map(
                                  (items, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="texts_14_regular text-head !leading-[35px] w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                      >
                                        <Link href={items.link}>
                                          {items.name}
                                        </Link>
                                      </li>
                                    );
                                  },
                                )}
                              </ul>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className=" ">
                              <p className="texts_14_medium text-second pb-3">
                                {items.megaMenuData[2]?.title}
                              </p>
                              <ul>
                                {items.megaMenuData[2]?.links.map(
                                  (items, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="texts_14_regular text-head !leading-[35px] w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                      >
                                        <Link href={items.link}>
                                          {items.name}
                                        </Link>
                                      </li>
                                    );
                                  },
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* for pages */}
                    {items.dropdownData &&
                      items.label === "PAGES" &&
                      hoverItems === "PAGES" && (
                        <div className=" shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)]  bg-white absolute top-[102%]  w-[260px] left-1/2  translate-x-[-28%] pt-[23px] pb-[17px] px-[30px] ">
                          <div className=" ">
                            <ul>
                              {items.dropdownData?.map((items, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="texts_14_regular text-head !leading-[35px] w-fit   relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                  >
                                    <Link href={items.link}>{items.name}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="flex gap-x-[30px] ">
              {navIconItems.map((items) => {
                const isActive = items.id === open;

                return items.name === "Cart" ? (
                  <li key={items.id} onClick={() => handleclicked(items.id)}>
                    <Link
                      href={items.link}
                      className=" relative text-[22px] text-head "
                    >
                      <span className="absolute bg-third  w-[19px] h-[19px] flex  flex items-center justify-center text-xs font-medium text-white  rounded-full  bottom-[-10px] !right-[-8px]">
                        {cartCount}
                      </span>
                      {items.icon}
                    </Link>

                    {/* for cart */}
                    {isActive && items.name === "Cart" && (
                      <div
                        className="absolute z-[999] bg-[#22222258] h-screen w-full top-0 left-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="h-full absolute  right-0">
                          <AddToCart unMount={handleUnMount} />
                        </div>
                      </div>
                    )}
                  </li>
                ) : items.name === "Wishlist" ? ( // ✅ NEW: Wishlist block
                  <li key={items.id}>
                    <Link
                      href={items.link}
                      className="relative text-[22px] text-head"
                    >
                      {/* Badge — item থাকলেই দেখাবে */}
                      {wishlistCount > 0 && (
                        <span className="absolute bg-third w-[19px] h-[19px] flex items-center justify-center text-xs font-medium text-white rounded-full bottom-[-10px] !right-[-8px]">
                          {wishlistCount}
                        </span>
                      )}
                      {/* Icon switch — item থাকলে filled red, না থাকলে outline */}
                      {wishlistCount > 0 ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        items.icon
                      )}
                    </Link>
                  </li>
                ) : (
                  <li key={items.id} onClick={() => handleclicked(items.id)}>
                    <Link href={items.link} className="text-[22px] text-head">
                      {isActive && items.name === "Search" ? (
                        <span className="text-[25px]">{close}</span>
                      ) : (
                        items.icon
                      )}
                    </Link>

                    {/* for searching part */}
                    {isActive && items.name === "Search" && (
                      <div
                        className=" pt-[62px] pb-[73px] absolute bg-white left-0 w-full shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] top-[100%] "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Container>
                          <div>
                            <p className="texts_14_medium text-second mb-[29px]">
                              WHAT ARE YOU LOOKING FOR?
                            </p>
                            <div className="relative ">
                              <input
                                type="text"
                                className="w-full py-[10px] border-b-2 border-second text-head   "
                                placeholder="SEARCH PRODUCTS"
                              />
                              <span className="absolute top-1/2  translate-y-[-65%] text-[22px] right-0 cursor-pointer">
                                {items.icon}
                              </span>
                            </div>
                            <div className="pt-[27px]">
                              <p className="texts_14_medium text-second">
                                {quickLinks.title}
                              </p>
                              <ul>
                                {quickLinks.links.map((items) => {
                                  return (
                                    <li
                                      key={items.id}
                                      className="texts_14_regular text-head  w-fit !leading-[35px] relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%]  after:duration-500 after:ease-in-out"
                                    >
                                      <Link href={items.link}>
                                        {items.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </Container>
                      </div>
                    )}

                    {/* for login part */}
                    {isActive && items.name === "Account" && (
                      <div
                        className="absolute z-[999] bg-[#22222258] h-screen w-full top-0 left-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="h-full absolute  right-0">
                          <Login unMount={handleUnMount} />
                        </div>
                      </div>
                    )}

                    {/* for nav tabs part */}
                    {isActive && items.name === "Mobile Menu" && (
                      <div
                        className="absolute z-[999] bg-[#22222258] h-screen w-full top-0 left-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="h-full absolute  right-0">
                          <NavTabs unMount={handleUnMount} />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavbarLg;
