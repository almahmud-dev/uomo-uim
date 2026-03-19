'use client';
import allIcons from "@/helper/iconProvider";

import React from "react";
import { GiCelebrationFire } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
const producttwo = "/assets/images/productstwo.png";
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import Product from "./Product";

const CollectionSlider = ({
  collectionHeading,
  iconClassName,
  prevButton,
  nextButton,
}) => {
  // for icons
  const { chevron } = allIcons;

  return (
    <div>
      <div className="flex items-center  justify-between gap-x-2">
        <h2 className="head_35_bold text-head  flex gap-x-5 items-center">
          {collectionHeading}{" "}
          <span className={`text-2xl text-orange-500 hidden sm:block ${iconClassName}`}>
            <GiCelebrationFire />
          </span>
        </h2>
        <select className="border p-2">
          <option>Default Sorting</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>
      <div className="mt-10">
        <div className="relative hidden lg:block ">
          {/* data comes from useCategory destructure */}
          <button
            className={`${prevButton} absolute left-[-25px]  top-1/2 -translate-y-1/2  h-[40px] w-[40px]  border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
          >
            <span className="text-xl text-gray_00">{chevron[0].icon}</span>
          </button>
          <button
            className={`${nextButton} absolute right-[-25px]  top-1/2 -translate-y-1/2  h-[40px] w-[40px]  border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
          >
            <span className="text-xl text-gray_00">{chevron[1].icon}</span>
          </button>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper"
            navigation={{
              prevEl: `.${prevButton}`,
              nextEl: `.${nextButton}`,
            }}
          >
            {[...new Array(10)].map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <Product
                      imgSrc={producttwo}
                      imgAlt={producttwo}
                      catagory={"Dresses"}
                      itemName={"Hub Accent Mirror"}
                      itemPrice={"29"}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="relative lg:hidden md:block hidden  xl:hidden 2xl:hidden">
          {/* data comes from useCategory destructure */}
          <button
            className={`${prevButton} absolute left-[-15px]  top-1/2 -translate-y-1/2  h-[40px] w-[40px]  border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
          >
            <span className="text-xl text-gray_00">{chevron[0].icon}</span>
          </button>
          <button
            className={`${nextButton} absolute right-[-15px]  top-1/2 -translate-y-1/2  h-[40px] w-[40px]  border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
          >
            <span className="text-xl text-gray_00">{chevron[1].icon}</span>
          </button>
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper"
            navigation={{
              prevEl: `.${prevButton}`,
              nextEl: `.${nextButton}`,
            }}
          >
            {[...new Array(10)].map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <Product
                      imgSrc={producttwo}
                      imgAlt={producttwo}
                      catagory={"Dresses"}
                      itemName={"Hub Accent Mirror"}
                      itemPrice={"29"}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="relative block  md:hidden lg:hidden xl:hidden 2xl:hidden">
          {/* data comes from useCategory destructure */}
          <button
            className={`${prevButton} absolute left-[-10px]  top-[60%] -translate-y-1/2  h-[40px] w-[40px]  border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
          >
            <span className="text-xl text-gray_00">{chevron[0].icon}</span>
          </button>
          <button
            className={`${nextButton} absolute right-[-10px]  top-[60%]  -translate-y-1/2  h-[40px] w-[40px]  border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
          >
            <span className="text-xl text-gray_00">{chevron[1].icon}</span>
          </button>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper"
            navigation={{
              prevEl: `.${prevButton}`,
              nextEl: `.${nextButton}`,
            }}
          >
            {[...new Array(10)].map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <Product
                      imgSrc={producttwo}
                      imgAlt={producttwo}
                      catagory={"Dresses"}
                      itemName={"Hub Accent Mirror"}
                      itemPrice={"29"}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
