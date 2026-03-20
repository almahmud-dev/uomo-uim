'use client';
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import allIcons from "@/helper/iconProvider";
import useAllProduct from "@/coustomHook/useAllProduct";

const LimitedEdition = () => {
  const { chevron } = allIcons;
  const swiperRef = useRef(null);
  const { data, isLoading } = useAllProduct(20, 30);
  const products = data?.products || [];

  const swiperConfig = (prevClass, nextClass, slides) => ({
    onSwiper: (swiper) => (swiperRef.current = swiper),
    modules: [Autoplay, Navigation],
    spaceBetween: 30,
    slidesPerView: slides,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` },
  });

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
              ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
              : null
          }
        />
      </SwiperSlide>
    ));

  const NavButton = ({ className, icon }) => (
    <button
      className={`${className} absolute top-[50%] -translate-y-1/2 h-8.75 w-8.75 border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer`}
    >
      <span className="text-xl text-second">{icon}</span>
    </button>
  );

  if (isLoading) {
    return (
      <section className="pt-9.25 lg:mt-22.75">
        <Container>
          <div className="text-center">
            <h2 className="head_35_regular text-head">
              LIMITED <span className="head_35_bold text-head">EDITION</span>
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-7.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-80 w-full" />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="pt-9.25 lg:pt-22.75">
      <Container>
        <div className="text-center">
          <h2 className="head_35_regular text-head">
            LIMITED <span className="head_35_bold text-head">EDITION</span>
          </h2>
        </div>

        {/* Desktop — lg */}
        <div className="hidden lg:block mt-8.25 relative">
          <NavButton className="lg-swiper-button-prev -left-2.5" icon={chevron[0].icon} />
          <NavButton className="lg-swiper-button-next -right-2.5" icon={chevron[1].icon} />
          <Swiper {...swiperConfig("lg-swiper-button-prev", "lg-swiper-button-next", 4)}>
            {renderSlides()}
          </Swiper>
        </div>

        {/* Tablet — md */}
        <div className="hidden md:block lg:hidden mt-5 relative">
          <NavButton className="md-swiper-button-prev -left-2.5" icon={chevron[0].icon} />
          <NavButton className="md-swiper-button-next -right-2.5" icon={chevron[1].icon} />
          <Swiper {...swiperConfig("md-swiper-button-prev", "md-swiper-button-next", 3)}>
            {renderSlides()}
          </Swiper>
        </div>

        {/* Mobile — xs */}
        <div className="block md:hidden mt-3 relative">
          <NavButton className="xs-swiper-button-prev -left-2.5" icon={chevron[0].icon} />
          <NavButton className="xs-swiper-button-next -right-2.5" icon={chevron[1].icon} />
          <Swiper {...swiperConfig("xs-swiper-button-prev", "xs-swiper-button-next", 2)} className="z-0">
            {renderSlides()}
          </Swiper>
        </div>

      </Container>
    </section>
  );
};

export default LimitedEdition;