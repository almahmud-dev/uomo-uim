'use client';
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import allIcons from "@/helper/iconProvider";
import useAllProduct from "@/coustomHook/useAllProduct";

// Skeleton Loader
const SkeletonCard = () => (
  <div className="flex flex-col gap-3 animate-pulse">
    <div className="bg-gray-200 rounded-lg w-full aspect-square" />
    <div className="bg-gray-200 rounded h-3 w-2/3" />
    <div className="bg-gray-200 rounded h-4 w-1/2" />
    <div className="bg-gray-200 rounded h-3 w-1/3" />
  </div>
);

// Nav Button
const NavButton = React.forwardRef(({ icon, side }, ref) => (
  <button
    ref={ref}
    aria-label={side === "prev" ? "Previous slide" : "Next slide"}
    className={`
      absolute top-1/2 -translate-y-1/2 z-10
      h-9 w-9 flex items-center justify-center
      rounded-full bg-white border border-gray-200
      shadow-md hover:shadow-lg hover:scale-105
      transition-all duration-200 ease-out
      cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed
      ${side === "prev" ? "-left-4" : "-right-4"}
    `}
  >
    <span className="text-lg text-gray-600">{icon}</span>
  </button>
));
NavButton.displayName = "NavButton";

// Section Header
const SectionHeader = () => (
  <div className="text-center mb-8">
    <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-1">
      Exclusive Collection
    </p>
    <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-800">
      LIMITED{" "}
      <span className="font-bold text-gray-900">EDITION</span>
    </h2>
    <div className="mt-3 mx-auto w-12 h-0.5 bg-gray-900 rounded-full" />
  </div>
);

// Swiper Wrapper
const ProductSwiper = ({ products, slidesPerView, prevRef, nextRef }) => (
  <div className="relative px-5">
    <NavButton ref={prevRef} icon={<ChevronLeft />} side="prev" />
    <NavButton ref={nextRef} icon={<ChevronRight />} side="next" />
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={24}
      slidesPerView={slidesPerView}
      loop={products.length > slidesPerView}
      autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
    >
      {products.map((product) => (
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
      ))}
    </Swiper>
  </div>
);

// Inline SVG icons (fallback if allIcons chevron not available)
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ------ Main Component -------
const LimitedEdition = () => {
  const { data, isLoading, isError } = useAllProduct(20, 30);
  const products = data?.products || [];

  // Separate refs for each breakpoint swiper
  const lgPrevRef = useRef(null);
  const lgNextRef = useRef(null);
  const mdPrevRef = useRef(null);
  const mdNextRef = useRef(null);
  const xsPrevRef = useRef(null);
  const xsNextRef = useRef(null);

  // Loading State
  if (isLoading) {
    return (
      <section className="pt-10 lg:pt-20">
        <Container>
          <SectionHeader />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        </Container>
      </section>
    );
  }

  //  Error State 
  if (isError || products.length === 0) {
    return (
      <section className="pt-10 lg:pt-20">
        <Container>
          <SectionHeader />
          <p className="text-center text-gray-400 py-16 text-sm">
            No products available right now.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="pt-10 lg:pt-20">
      <Container>
        <SectionHeader />

        {/* Desktop - 4 slides */}
        <div className="hidden lg:block">
          <ProductSwiper
            products={products}
            slidesPerView={4}
            prevRef={lgPrevRef}
            nextRef={lgNextRef}
          />
        </div>

        {/* Tablet - 3 slides */}
        <div className="hidden md:block lg:hidden">
          <ProductSwiper
            products={products}
            slidesPerView={3}
            prevRef={mdPrevRef}
            nextRef={mdNextRef}
          />
        </div>

        {/* Mobile - 2 slides */}
        <div className="block md:hidden">
          <ProductSwiper
            products={products}
            slidesPerView={2}
            prevRef={xsPrevRef}
            nextRef={xsNextRef}
          />
        </div>
      </Container>
    </section>
  );
};

export default LimitedEdition;