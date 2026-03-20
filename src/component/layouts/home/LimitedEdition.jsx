'use client';
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import allIcons from "@/helper/iconProvider";

const LimitedEdition = () => {
  const { chevron } = allIcons;
  const swiperRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=10&select=title,price,discountPercentage,thumbnail,category"
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const swiperProps = (prevClass, nextClass, slides) => ({
    onSwiper: (swiper) => (swiperRef.current = swiper),
    modules: [Autoplay, Navigation],
    spaceBetween: 30,
    slidesPerView: slides,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` },
  });

  const renderSlides = () =>
    products.map((product) => {
      const discountedPrice = product.discountPercentage
        ? (product.price * (1 - product.discountPercentage / 100)).toFixed(0)
        : null;

      return (
        <SwiperSlide key={product.id}>
          <Product
            imgSrc={product.thumbnail}
            imgAlt={product.title}
            catagory={product.category}
            itemName={product.title}
            itemPrice={product.price.toString()}
            discountPrice={discountedPrice}
          />
        </SwiperSlide>
      );
    });

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="mt-[37px] lg:mt-22.75">
      <Container>
        <div className="text-center">
          <h2 className="head_35_regular text-head">
            LIMITED <span className="head_35_bold text-head">EDITION</span>
          </h2>
        </div>

        {/* Desktop — lg */}
        <div className="hidden lg:block mt-8.25 relative">
          <button className="lg-swiper-button-prev absolute left-[-10px] top-[50%] -translate-y-1/2 h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
            <span className="text-xl text-second">{chevron[0].icon}</span>
          </button>
          <button className="lg-swiper-button-next absolute right-[-10px] top-[50%] -translate-y-1/2 h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
            <span className="text-xl text-second">{chevron[1].icon}</span>
          </button>
          <Swiper {...swiperProps("lg-swiper-button-prev", "lg-swiper-button-next", 4)}>
            {renderSlides()}
          </Swiper>
        </div>

        {/* Tablet — md */}
        <div className="hidden md:block lg:hidden mt-5 relative">
          <button className="md-swiper-button-prev absolute left-[-10px] top-[50%] -translate-y-1/2 h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
            <span className="text-xl text-second">{chevron[0].icon}</span>
          </button>
          <button className="md-swiper-button-next absolute right-[-10px] top-[50%] -translate-y-1/2 h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
            <span className="text-xl text-second">{chevron[1].icon}</span>
          </button>
          <Swiper {...swiperProps("md-swiper-button-prev", "md-swiper-button-next", 3)}>
            {renderSlides()}
          </Swiper>
        </div>

        {/* Mobile — xs */}
        <div className="block md:hidden mt-3 relative">
          <button className="xs-swiper-button-prev absolute left-[-10px] top-[30%] -translate-y-1/2 h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
            <span className="text-xl text-second">{chevron[0].icon}</span>
          </button>
          <button className="xs-swiper-button-next absolute right-[-10px] top-[30%] -translate-y-1/2 h-[35px] w-[35px] border border-footer rounded-full flex justify-center items-center bg-white z-10 cursor-pointer">
            <span className="text-xl text-second">{chevron[1].icon}</span>
          </button>
          <Swiper {...swiperProps("xs-swiper-button-prev", "xs-swiper-button-next", 2)} className="z-0">
            {renderSlides()}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default LimitedEdition;