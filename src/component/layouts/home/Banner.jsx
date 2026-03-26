'use client';
import Images from "@/component/common/Images";
import React, { useRef, useState } from "react";
import Button from "@/component/common/Button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sliderData = [
  { id: 1, img: "/assets/images/hero/bannerRightImg.png" },
  { id: 2, img: "/assets/images/hero/bannerRightImg2.png" },
  { id: 3, img: "/assets/images/hero/bannerRightImg3.png" },
  { id: 4, img: "/assets/images/hero/bannerRightImg4.png" },
  { id: 5, img: "/assets/images/hero/bannerRightImg5.png" },
];

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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sliderData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="
                  bg-[url('/assets/images/bannerBg.png')]
                  mx-auto max-w-450 w-full
                  bg-no-repeat bg-cover bg-center
                  overflow-hidden relative
                  h-105 sm:h-150 md:h-187.5 lg:h-200
                "
              >
                {/* Desktop image */}
                <div className="absolute top-0 bottom-0 right-0 hidden lg:block">
                  <Images
                    imgSrc={item.img}
                    className="h-full w-auto object-cover object-top"
                    priority={idx === 0}
                  />
                </div>

                {/* Mobile image */}
                <div
                  className="
                    absolute z-0
                    right-0 bottom-0
                    md:h-full
                    h-[95%]
                    w-[60%] sm:w-[65%] lg:w-[60%]
                    flex items-end justify-end lg:hidden
                  "
                >
                  <Images
                    imgSrc={item.img}
                    className="h-full w-full object-cover object-top"
                    priority={idx === 0}
                  />
                </div>

                {/* Left Content */}
                <div className="container px-4 sm:px-7.5 xl:px-0 h-full relative">
                  <div
                    className="
                      leftContent
                      absolute z-10
                      bottom-12 sm:bottom-20 lg:bottom-auto lg:top-[50%] lg:-translate-y-[10%]
                      left-4 sm:left-7.5 xl:left-0
                      w-[52%] sm:w-[50%] lg:w-[45%]
                    "
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 sm:w-10 h-0.5 bg-second-red"></div>
                      <p className="texts_14_medium text-second-red text-[10px] sm:text-[12px] lg:text-[14px]">
                        NEW TREND
                      </p>
                    </div>

                    <h1 className="head_70_regular pb-2 text-head hidden lg:block">
                      <span className="whitespace-nowrap"> SUMMER SALE STYLISH</span>
                      <span className="head_70_bold block">WOMENS</span>
                    </h1>
                    <h1 className="head_70_regular pb-2 text-head block lg:hidden">
                      <span className="whitespace-nowrap"> SUMMER SALE</span>
                      <span className="block whitespace-nowrap">
                        <span> STYLISH </span>
                        <span className="head_70_bold">WOMENS</span>
                      </span>
                    </h1>

                    <Button className={"hover:after:w-24"} btnText={"DISCOVER MORE"} />

                    <div className="mt-6 sm:mt-10 lg:mt-16 flex gap-1">
                      {sliderData.map((_, index) => (
                        <div
                          onClick={() => swiperRef.current?.slideToLoop(index)}
                          key={index}
                          className="group relative flex items-center justify-center p-2 sm:p-3 cursor-pointer"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300
                            ${activeIndex === index ? "bg-black" : "bg-[#DDC2B9] group-hover:bg-black"}`}
                          ></div>
                          <div
                            className={`absolute inset-0 border-2 border-black rounded-full transition-all duration-300
                            ${activeIndex === index ? "scale-100" : "scale-0 group-hover:scale-100"}`}
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

        <div className="absolute top-1/2 -left-10 -translate-y-[50%] hidden lg:block">
          <div className="flex flex-col gap-y-6.25 z-10">
            <Link href="#"><FaFacebookF className="text-second" size={15} /></Link>
            <Link href="#"><FaTwitter className="text-second" size={15} /></Link>
            <Link href="#"><FaInstagram className="text-second" size={15} /></Link>
            <Link href="#"><FaPinterest className="text-second" size={15} /></Link>
            <Link href="#">
              <p className="texts_14_medium text-second rotate-270 -ml-7.75 mt-6.5">FOLLOW US</p>
            </Link>
          </div>
        </div>
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
