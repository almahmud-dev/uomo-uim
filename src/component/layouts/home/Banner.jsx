"use client";
import { CldImage } from "next-cloudinary";
import React, { useRef, useState } from "react";
import Button from "@/component/common/Button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const sliderData = [
  { id: 1, img: "bannerRightImg_fcjrx7" },
  { id: 2, img: "bannerRightImg2_dpzohr" },
  { id: 3, img: "bannerRightImg3_fqa6c9" },
  { id: 4, img: "bannerRightImg4_xy5i2o" },
  { id: 5, img: "bannerRightImg5_x4vfka" },
];

const BG_URL =
  "https://res.cloudinary.com/dlqvctrgm/image/upload/q_auto/f_auto/v1775147827/bannerBg_waubaz.png";

const Banner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-22.5 overflow-hidden">
      <div className="lg:mx-15 mx-0 relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {sliderData.map((item, idx) => (
            <SwiperSlide key={item.id}>
              <div className="mx-auto max-w-450 w-full bg-no-repeat bg-cover bg-center overflow-hidden relative h-105 sm:h-150 md:h-187.5 lg:h-200">
                {/* Background Image - next/image diye preload */}
                <Image
                  src={BG_URL}
                  alt=""
                  fill
                  priority={idx === 0}
                  quality={75}
                  className="object-cover object-center -z-10"
                  sizes="100vw"
                />

                {/* Same CldImage - mobile + desktop */}
                <div className="absolute z-0 right-0 bottom-0 lg:top-0 lg:bottom-0 h-[95%] lg:h-full w-[60%] sm:w-[65%] lg:w-auto flex items-end lg:items-stretch justify-end">
                  <CldImage
                    src={item.img}
                    width={600}
                    height={800}
                    alt={`banner slide ${idx + 1}`}
                    fetchPriority={idx === 0 ? "high" : "low"}
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    quality="auto"
                    format="auto"
                    sizes="(max-width: 768px) 60vw, (max-width: 1024px) 65vw, 50vw"
                    className="h-full w-auto object-cover object-top"
                  />
                </div>

                {/* Left Content */}
                <div className="container px-4 sm:px-7.5 xl:px-0 h-full relative">
                  <div className="leftContent absolute z-10 bottom-12 sm:bottom-20 lg:bottom-auto lg:top-[50%] lg:-translate-y-[10%] left-4 sm:left-7.5 xl:left-0 w-[52%] sm:w-[50%] lg:w-[45%]">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 sm:w-10 h-0.5 bg-second-red"></div>
                      <p className="texts_14_medium text-second-red text-[10px] sm:text-[12px] lg:text-[14px]">
                        NEW TREND
                      </p>
                    </div>

                    {/* Desktop heading */}
                    <h1 className="head_70_regular pb-2 text-head hidden lg:block">
                      <span className="whitespace-nowrap">
                        {" "}
                        SUMMER SALE STYLISH
                      </span>
                      <span className="head_70_bold block">WOMENS</span>
                    </h1>

                    {/* Mobile heading */}
                    <h1 className="head_70_regular pb-2 text-head block lg:hidden">
                      <span className="whitespace-nowrap"> SUMMER SALE</span>
                      <span className="block whitespace-nowrap">
                        <span> STYLISH </span>
                        <span className="head_70_bold">WOMENS</span>
                      </span>
                    </h1>

                    <Button
                      className={"hover:after:w-24"}
                      btnText={"DISCOVER MORE"}
                    />

                    {/* Dots */}
                    <div className="mt-6 sm:mt-10 lg:mt-16 flex gap-1">
                      {sliderData.map((_, index) => (
                        <div
                          onClick={() => swiperRef.current?.slideToLoop(index)}
                          key={index}
                          className="group relative flex items-center justify-center p-2 sm:p-3 cursor-pointer"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              activeIndex === index
                                ? "bg-black"
                                : "bg-[#DDC2B9] group-hover:bg-black"
                            }`}
                          ></div>
                          <div
                            className={`absolute inset-0 border-2 border-black rounded-full transition-all duration-300 ${
                              activeIndex === index
                                ? "scale-100"
                                : "scale-0 group-hover:scale-100"
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Social links - left */}
        <div className="absolute top-1/2 -left-10 -translate-y-[50%] hidden lg:block">
          <div className="flex flex-col gap-y-6.25 z-10">
            <Link href="#">
              <FaFacebookF className="text-second" size={15}/>
            </Link>
            <Link href="#">
              <FaTwitter className="text-second" size={15}/>
            </Link>
            <Link href="#">
              <FaInstagram className="text-second" size={15}/>
            </Link>
            <Link href="#">
              <FaPinterest className="text-second" size={15}/>
            </Link>
            <Link href="#">
              <p className="texts_14_medium text-second rotate-270 -ml-7.75 mt-6.5">
                FOLLOW US
              </p>
            </Link>
          </div>
        </div>

        {/* Scroll indicator - right */}
        <div className="absolute bottom-5.75 right-0 xl:-right-20 -translate-y-[50%] hidden lg:block">
          <div className="flex space-x-2.5 items-center rotate-270 z-10">
            <div className="w-7.5 h-0.5 bg-head"></div>
            <p className="texts_14_medium text-head">SCROLL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
