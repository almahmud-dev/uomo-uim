"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/component/common/Container";
import { shopList1 } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import Product from "@/component/common/Product";
import { Progress } from "@/component/ui/progress";
import Button from "@/component/common/Button";
import ShopFilter from "./ShopFilter";
import useAllProduct from "@/customHook/useAllProduct";

// Category display name map
const CATEGORY_LABEL = {
  "womens-dresses": "WOMEN",
  "mens-shirts": "MEN",
  tops: "KIDS",
};

const ShopBannerInner = () => {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || "";

  const [skip, setSkip] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [cols, setCols] = useState(4);
  const [sortBy, setSortBy] = useState("default");
  const limit = 16;

  // URL category বদলালে skip reset করো
  useEffect(() => {
    setSkip(0);
  }, [urlCategory]);

  const { data, isLoading, isError } = useAllProduct(limit, skip, "", urlCategory);
  const rawProducts = data?.products || [];

  const products = [...rawProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "latest") return b.id - a.id;
    return 0;
  });

  const total = data?.total || 0;
  const visibleCount = skip + products.length;
  const percentage = total > 0 ? (visibleCount / total) * 100 : 0;

  const handleLoadMore = () => setSkip((prev) => prev + limit);

  if (isError) return <div>Something went wrong.</div>;

  const { filter } = allIcons;

  const categoryLabel = CATEGORY_LABEL[urlCategory];

  return (
    <section>
      {/* Banner */}
      <div className="bg-[url('/assets/images/ShopBannerBg.png')] py-10 sm:py-20 md:py-33.75 mx-4 sm:mx-8 md:mx-15 bg-no-repeat bg-cover bg-center relative pt-10 sm:pt-14 md:pt-18.75">
        <Container>
          <div>
            <h3 className="font-bold text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase tracking-wide text-[#efefef] bg-transparent">
              {categoryLabel ? `${categoryLabel} COLLECTION` : "Jackets & Coats"}
            </h3>
          </div>
          <div className="pt-3.5 overflow-x-auto">
            <ul className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10 whitespace-nowrap">
              {shopList1.map((items) => (
                <li key={items.id}>
                  <button className="texts_16_medium cursor-pointer text-head relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-head after:bottom-[2.5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out [&:hover::after]:w-[60%] py-1">
                    {items.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="mt-6 sm:mt-9 mb-10 sm:mb-16 md:mb-25">
        <Container>
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
            <p className="text-head texts_14_medium">
              HOME / THE SHOP{categoryLabel ? ` / ${categoryLabel}` : ""}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-7.5 gap-y-2">
              {/* Sort */}
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="border-b-2 border-head cursor-pointer bg-transparent outline-none texts_14_medium text-head px-2 appearance-none pr-6"
              >
                <option value="default">Default Sorting</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Average Rating</option>
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              <div className="h-6 w-0.5 bg-gray-300 hidden sm:block"></div>

              {/* View cols */}
              <div className="flex justify-between items-center gap-x-3 cursor-pointer">
                <button className="texts_14_medium text-head">VIEW</button>
                <button onClick={() => setCols(1)} className="texts_14_medium text-head">1</button>
                <button onClick={() => setCols(2)} className="texts_14_medium text-head">2</button>
                <button onClick={() => setCols(3)} className="texts_14_medium text-head hidden md:block">3</button>
                <button onClick={() => setCols(4)} className="texts_14_medium text-head hidden lg:block">4</button>
              </div>

              {/* Filter */}
              <button
                onClick={() => setFilterOpen(true)}
                className="border-l-2 pl-4 sm:pl-7.5 border-footer texts_14_medium text-head flex items-center gap-x-2.5 cursor-pointer"
              >
                <span className="text-lg">{filter}</span> FILTER
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div>
            {isLoading ? (
              <div
                className={`pt-10 pb-12.5 grid gap-4 sm:gap-6 md:gap-7.5
                  ${cols === 1 ? "grid-cols-1" : ""}
                  ${cols === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
                  ${cols === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : ""}
                  ${cols === 4 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""}
                `}
              >
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-80 w-full" />
                ))}
              </div>
            ) : (
              <div
                className={`pt-10 pb-12.5 grid gap-4 sm:gap-6 md:gap-7.5
                  ${cols === 1 ? "grid-cols-1" : ""}
                  ${cols === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
                  ${cols === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : ""}
                  ${cols === 4 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""}
                `}
              >
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
                        ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
                        : null
                    }
                  />
                ))}
              </div>
            )}

            {/* Load More */}
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
                    className={"texts_14_medium text-black hover:after:w-15 pt-4.25"}
                    btnText={"SHOW MORE"}
                  />
                </button>
              )}
            </div>
          </div>
        </Container>

        <ShopFilter isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
      </div>
    </section>
  );
};

// useSearchParams এর জন্য Suspense wrapper দরকার Next.js এ
const ShopBanner = () => (
  <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
    <ShopBannerInner />
  </Suspense>
);

export default ShopBanner;