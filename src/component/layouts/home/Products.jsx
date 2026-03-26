"use client";
import Product from "@/component/common/Product";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/component/common/Button";
import Container from "@/component/common/Container";
import useAllProduct from "@/customHook/useAllProduct";

const Products = () => {
  const [filter, setFilter] = useState("all");
  const { data, isLoading, isError } = useAllProduct(8);
  const products = data?.products || [];

  const getFiltered = () => {
    if (filter === "all") return products;
    if (filter === "newArrivals")
      return products.filter((p) => p.rating >= 4.5);
    if (filter === "bestSeller") return products.filter((p) => p.stock > 50);
    if (filter === "toprating") return products.filter((p) => p.rating >= 4.8);
    return products;
  };

  const filters = [
    { key: "all", label: "ALL" },
    { key: "newArrivals", label: "NEW ARRIVALS" },
    { key: "bestSeller", label: "BEST SELLER" },
    { key: "toprating", label: "TOP RATING" },
  ];
  if (isError) return <div>Something went wrong</div>;
  return (
    <>
      <section className="mt-9.5 md:mt-15 lg:mt-23.5">
        <Container>
          <div className="heading text-center">
            <h2 className="lg:head_35_regular font-medium text-[26px] text-head">
              OUR TRENDY{" "}
              <span className="lg:head_35_bold font-bold text-[26px] text-head">
                PRODUCTS
              </span>
            </h2>
            <div className="flex flex-wrap justify-center items-center lg:gap-10 gap-4 mt-4 lg:mt-7.75">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`lg:texts_16_medium text-[14px] duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%] cursor-pointer ${
                    filter === f.key
                      ? "text-head after:w-[60%]"
                      : "text-second hover:text-head"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="mt-5.5 grid lg:grid-cols-4 grid-cols-2 md:gap-7.5 gap-3.5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-200 h-80 w-full"
                />
              ))}
            </div>
          ) : (
            <div className="mt-5.5 grid lg:grid-cols-4 grid-cols-2 justify-center md:gap-7.5 gap-3.5">
              {getFiltered().map((product) => (
                <Product
                  key={product.id}
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
              ))}
            </div>
          )}

          <div className="mt-10.5 text-center">
            <Link href="/shop">
              <Button
                className={"hover:after:w-24"}
                btnText={"SEE ALL PRODUCT"}
              />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
