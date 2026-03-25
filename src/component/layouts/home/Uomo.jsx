'use client';
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import React, { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";

const Uomo = () => {
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts({ limit: 12 });
  }, []);

  return (
    <section className="mt-12.5 lg:mt-20.25">
      <Container>
        <h2 className="head_35_regular text-bold text-center">@UOMO</h2>

        {loading && <p className="text-center mt-4">Loading...</p>}

        <div className="mt-8.5 grid grid-cols-3 lg:grid-cols-6 gap-3.75 lg:gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 p-3 rounded-sm"
            >
              <Images
                imgSrc={product.thumbnail}
                imgAlt={product.title}
                className="w-full h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Uomo;