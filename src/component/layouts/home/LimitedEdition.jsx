'use client';
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef } from "react";
const producttwo = "/assets/images/productstwo.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import allIcons from "@/helper/iconProvider";

const LimitedEdition = () => {
  const { chevron } = allIcons;

  const swiperRef = useRef(null);
  return (
    <>
      <section className=" mt-[37px] lg:mt-22.75">
        <Container>
          <div className="text-center">
            <h2 className="head_35_regular text-head">
              LIMITED <span className="head_35_bold text-head">EDITION</span>
            </h2>
          </div>
          <div className=" hidden lg:block mt-8.25 flex flex-row gap-7.5 relative">
            <button className="lg-swiper-button-prev absolute left-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[0].icon}</span>
            </button>
            <button className="lg-swiper-button-next absolute right-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer ">
              <span className="text-xl text-second">{chevron[1].icon}</span>
            </button>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".lg-swiper-button-prev",
                nextEl: ".lg-swiper-button-next",
              }}
            >
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" lg:hidden md:hidden block mt-3 flex flex-row gap-7.5 relative">
            <button className="xs-swiper-button-prev absolute left-[-10px]  top-[30%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[0].icon}</span>
            </button>
            <button className="xs-swiper-button-next absolute right-[-10px]  top-[30%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[1].icon}</span>
            </button>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="z-0"
              navigation={{
                prevEl: ".xs-swiper-button-prev",
                nextEl: ".xs-swiper-button-next",
              }}
            >
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" hidden  md:block lg:hidden mt-5 flex flex-row gap-7.5 relative">
            <button className="md-swiper-button-prev absolute left-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
              <span className="text-xl text-second">{chevron[0].icon}</span>
            </button>
            <button className="md-swiper-button-next absolute right-[-10px]  top-[50%] -translate-y-1/2  h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer ">
              <span className="text-xl text-second">{chevron[1].icon}</span>
            </button>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".md-swiper-button-prev",
                nextEl: ".md-swiper-button-next",
              }}
            >
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LimitedEdition; /*  */
