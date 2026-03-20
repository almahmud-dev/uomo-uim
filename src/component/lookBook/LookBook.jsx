'use client';
import Container from "@/component/common/Container";
import FeaturedProducts from "@/component/common/FeaturedProducts";
import React from "react";
import Images from "@/component/common/Images";
import Button from "@/component/common/Button";
import useAllProduct from "@/coustomHook/useAllProduct";

const LookBook = () => {
  const { data, isLoading } = useAllProduct(6, 60);
  const products = data?.products || [];

  if (isLoading) {
    return (
      <section className="mt-[85px] pt-[60px] lg:pt-[80px]">
        <Container>
          <h3 className="head_35_bold">LOOKBOOK</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-80 w-full" />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const [p1, p2, p3, p4, p5, p6] = products;

  return (
    <section className="mt-[85px] pt-[60px] lg:pt-[80px]">
      <Container>
        <h3 className="head_35_bold">LOOKBOOK</h3>

        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-10.5">
          <div className="space-y-7.5">
            <FeaturedProducts
              imgSrc={p1?.thumbnail}
              imgAlt={p1?.title}
              price={`STARTING AT $${p1?.price}`}
              category={p1?.title}
            />
            <FeaturedProducts
              imgSrc={p2?.thumbnail}
              imgAlt={p2?.title}
              price={`STARTING AT $${p2?.price}`}
              category={p2?.title}
            />
          </div>
          <div className="relative group w-full overflow-hidden hover:bg-red h-[300px] lg:h-[715px]">
            <Images imgSrc={p3?.thumbnail} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-red/80 group-hover:h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
            <div className="absolute bottom-10 left-10">
              <p className="texts_14_regular text-head group-hover:text-white transition-colors duration-700">
                STARTING AT ${p3?.price}
              </p>
              <h3 className="head_26_medium text-head group-hover:text-white transition-colors duration-700 pb-1.25">
                {p3?.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-7.5">
          <div className="relative group overflow-hidden w-full hover:bg-red h-[300px] lg:h-[715px]">
            <Images imgSrc={p4?.thumbnail} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-red/80 group-hover:h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
            <div className="absolute bottom-10 left-10">
              <p className="texts_14_regular text-head group-hover:text-white transition-colors duration-700">
                STARTING AT ${p4?.price}
              </p>
              <h3 className="head_26_medium text-head group-hover:text-white transition-colors duration-700 pb-1.25">
                {p4?.title}
              </h3>
            </div>
          </div>
          <div className="space-y-7.5">
            <FeaturedProducts
              imgSrc={p5?.thumbnail}
              imgAlt={p5?.title}
              price={`STARTING AT $${p5?.price}`}
              category={p5?.title}
            />
            <FeaturedProducts
              imgSrc={p6?.thumbnail}
              imgAlt={p6?.title}
              price={`STARTING AT $${p6?.price}`}
              category={p6?.title}
            />
          </div>
        </div>

        <Button
          className="left-1/2 -translate-x-1/2 mt-12.5 mb-[60px] lg:mb-24.75 relative after:absolute after:bottom-0 after:left-0 after:contant-[''] after:bg-head after:w-[60px] after:h-[2px]"
          btnText="SHOW MORE"
        />
      </Container>
    </section>
  );
};

export default LookBook;