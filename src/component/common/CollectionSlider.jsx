"use client";
import allIcons from "@/helper/iconProvider";
import React from "react";
import { GiCelebrationFire } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import Product from "./Product";
import useAllProduct from "@/coustomHook/useAllProduct";

const CollectionSlider = ({
  collectionHeading,
  iconClassName,
  prevButton,
  nextButton,
  skip = 0,
}) => {
  const { chevron } = allIcons;
  const { data, isLoading } = useAllProduct(10, skip);
  const products = data?.products || [];

  const swiperConfig = (prevClass, nextClass, slides) => ({
    slidesPerView: slides,
    spaceBetween: 30,
    freeMode: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    modules: [FreeMode, Navigation, Autoplay],
    navigation: { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` },
  });

  const NavButton = ({ className, icon }) => (
    <button
      className={`${className} absolute top-1/2 -translate-y-1/2 h-10 w-10 border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
    >
      <span className="text-xl text-gray_00">{icon}</span>
    </button>
  );

  const renderSlides = () =>
    products.map((product) => (
      <SwiperSlide key={product.id}>
        <Product
          id={product.id}
          imgSrc={product.thumbnail}
          imgAlt={product.title}
          catagory={product.category}
          itemName={product.title}
          itemPrice={product.price}
          discountPrice={
            product.discountPercentage > 0
              ? (
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)
              : null
          }
        />
      </SwiperSlide>
    ));

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-between gap-x-2">
          <h2 className="head_35_bold text-head flex gap-x-5 items-center">
            {collectionHeading}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-7.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-80 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-x-2">
        <h2 className="head_35_bold text-head flex gap-x-5 items-center">
          {collectionHeading}
          <span
            className={`text-2xl text-orange-500 hidden sm:block ${iconClassName}`}
          >
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
        {/* Desktop */}
        <div className="relative hidden lg:block">
          <NavButton
            className={`${prevButton} -left-6.25`}
            icon={chevron[0].icon}
          />
          <NavButton
            className={`${nextButton} -right-6.25`}
            icon={chevron[1].icon}
          />
          <Swiper {...swiperConfig(prevButton, nextButton, 4)}>
            {renderSlides()}
          </Swiper>
        </div>

        {/* Tablet */}
        <div className="relative lg:hidden md:block hidden">
          <NavButton
            className={`${prevButton} -left-3.75`}
            icon={chevron[0].icon}
          />
          <NavButton
            className={`${nextButton} -right-3.75`}
            icon={chevron[1].icon}
          />
          <Swiper {...swiperConfig(prevButton, nextButton, 3)}>
            {renderSlides()}
          </Swiper>
        </div>

        {/* Mobile */}
        <div className="relative block md:hidden">
          <NavButton
            className={`${prevButton} -left-2.5`}
            icon={chevron[0].icon}
          />
          <NavButton
            className={`${nextButton} -right-2.5`}
            icon={chevron[1].icon}
          />
          <Swiper {...swiperConfig(prevButton, nextButton, 2)}>
            {renderSlides()}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
