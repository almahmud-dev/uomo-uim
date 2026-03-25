'use client';
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import useAllProduct from "@/coustomHook/useAllProduct";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ─── Skeleton Card ────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="flex flex-col gap-3 animate-pulse">
    <div className="bg-gray-200 rounded-xl w-full aspect-square" />
    <div className="bg-gray-200 rounded h-3 w-1/2" />
    <div className="bg-gray-200 rounded h-4 w-3/4" />
    <div className="bg-gray-200 rounded h-3 w-1/3" />
  </div>
);

// ─── Section Header ───────────────────────────────────────────────────────────
const SectionHeader = () => (
  <div className="text-center mb-8 lg:mb-10">
    <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-1">
      Exclusive Collection
    </p>
    <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-800">
      LIMITED <span className="font-bold text-gray-900">EDITION</span>
    </h2>
    <div className="mt-3 mx-auto w-12 h-0.5 bg-gray-900 rounded-full" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const LimitedEdition = () => {
  const { data, isLoading, isError } = useAllProduct(20, 30);
  const products = data?.products || [];

  // ✅ Single pair of refs — একটাই Swiper তাই একটাই ref
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // ── Loading ──
  if (isLoading) {
    return (
      <section className="pt-10 lg:pt-20">
        <Container>
          <SectionHeader />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        </Container>
      </section>
    );
  }

  // ── Error / Empty ──
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

        {/* ✅ একটাই Swiper — breakpoints দিয়ে সব device handle */}
        <div className="relative px-6">

          {/* Prev Button */}
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              h-9 w-9 flex items-center justify-center
              rounded-full bg-white border border-gray-200
              shadow-md hover:shadow-lg hover:scale-110
              transition-all duration-200 ease-out cursor-pointer
            "
          >
            <ChevronLeft />
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              h-9 w-9 flex items-center justify-center
              rounded-full bg-white border border-gray-200
              shadow-md hover:shadow-lg hover:scale-110
              transition-all duration-200 ease-out cursor-pointer
            "
          >
            <ChevronRight />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // ✅ Swiper built-in breakpoints — 3টা আলাদা Swiper এর বদলে
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
            }}
            // ✅ onBeforeInit — Swiper init হওয়ার আগেই ref inject করে
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
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

      </Container>
    </section>
  );
};

export default LimitedEdition;