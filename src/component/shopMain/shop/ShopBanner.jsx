"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "@/component/common/Container";
import { shopList1 } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import Product from "@/component/common/Product";
import { Progress } from "@/components/ui/progress";
import Button from "@/component/common/Button";
import ShopFilter from "./ShopFilter";
import useAllProduct from "@/coustomHook/useAllProduct";

const ShopBanner = () => {
  const [skip, setSkip] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
const [cols, setCols] = useState(4);
  const limit = 16;

  const { data, isLoading } = useAllProduct(limit, skip);
  const products = data?.products || [];
  const total = data?.total || 0;
  const visibleCount = skip + products.length;
  const percentage = total > 0 ? (visibleCount / total) * 100 : 0;

  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
  };

  const { filter } = allIcons;

  return (
    <section>
      <div className="bg-[url('/assets/images/ShopBannerBg.png')] py-33.75 mx-15 bg-no-repeat bg-cover bg-center relative pt-18.75">
        <Container>
          <div className="">
            <h3 className="font-bold text-[90px] uppercase tracking-wide text-[#efefef] bg-transparent">
              Jackets & Coats
            </h3>
          </div>
          <div className="pt-3.5">
            <ul className="flex items-center gap-x-10">
              {shopList1.map((items) => (
                <li key={items.id}>
                  <button className="texts_16_medium text-head relative after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:-bottom-0.5 after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out">
                    {items.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <div className="mt-9 mb-25">
        <Container>
          <div className="flex justify-between">
            <p className="text-head texts_14_medium">HOME / THE SHOP</p>
            <div className="flex items-center gap-x-7.5">
              <select className="border-b-2 border-head">
                <option className="text-head texts_14_medium" value="default">
                  Default Sorting
                </option>
                <option
                  className="text-head texts_14_medium"
                  value="popularity"
                >
                  Popularity
                </option>
                <option className="text-head texts_14_medium" value="rating">
                  Average Rating
                </option>
                <option className="text-head texts_14_medium" value="latest">
                  Latest
                </option>
                <option className="text-head texts_14_medium" value="price-low">
                  Price: Low to High
                </option>
                <option
                  className="text-head texts_14_medium"
                  value="price-high"
                >
                  Price: High to Low
                </option>
              </select>
              <div className="h-6 w-0.5 bg-gray-300 cursor-pointer"></div>
              <div className="flex justify-between items-center gap-x-3 cursor-pointer">
                <button className="texts_14_medium text-head">VIEW</button>
                <button onClick={() => setCols(1)} className="texts_14_medium text-head">1</button>
                <button onClick={() => setCols(2)} className="texts_14_medium text-head">2</button>
                <button onClick={() => setCols(3)} className="texts_14_medium text-head">3</button>
                <button onClick={() => setCols(4)} className="texts_14_medium text-head">4</button>
              </div>
              <button onClick={() => setFilterOpen(true)} className="border-l-2 pl-7.5 border-footer texts_14_medium text-head flex items-center gap-x-2.5 cursor-pointer">
                <span className="text-lg">{filter}</span> FILTER
              </button>
            </div>
          </div>

          <div>
            {isLoading ? (
              <div className={`pt-10 pb-12.5 grid grid-cols-${cols} gap-7.5`}>
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-200 h-80 w-full"
                  />
                ))}
              </div>
            ) : (
              <div className={`pt-10 pb-12.5 grid grid-cols-${cols} gap-7.5`}>
                {products.map((product) => (
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

            <div className="flex flex-col items-center w-full max-w-75 mx-auto uppercase">
              <p className="texts_14_medium text-black pb-1.25">
                Showing {visibleCount} of {total} Items
              </p>
              <Progress
                value={percentage}
                className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
              />
              {visibleCount < total && (
                <button onClick={handleLoadMore}>
                  <Button
                    className={
                      "texts_14_medium text-black hover:after:w-15 pt-4.25"
                    }
                    btnText={"SHOW MORE"}
                  />
                </button>
              )}
            </div>
          </div>
        </Container>
        <ShopFilter isOpen={filterOpen} onClose={() => setFilterOpen(false)}/>
      </div>
    </section>
  );
};

export default ShopBanner;
