'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Container from "@/component/common/Container";
import { shopList1 } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import Product from "@/component/common/Product";
import allImages from "@/helper/imagesProvider";
import { Progress } from "@/components/ui/progress";
import Button from "@/component/common/Button";
import ShopFilter from "./ShopFilter";


const ShopBanner = () => {
  const [visibleItems, setVisibleItems] = useState(36);
    const totalItems = 100;
      const percentage = (visibleItems / totalItems) * 100;

      const handleLoadMore = () => {
    if (visibleItems < totalItems) {
      setVisibleItems((prev) => Math.min(prev + 12, totalItems));
    }
  };
  //for icons & img

  const { filter } = allIcons;
  const { shopimg } = allImages;

  return (
    <section>
      <div className="bg-[url('/assets/images/ShopBannerBg.png')] py-33.75 mx-15 bg-no-repeat bg-cover bg-center relative mt-[75px]">
        <Container>
          <div className="">
            <h3
              className="font-bold text-[90px] uppercase tracking-wide
               text-[#efefef] bg-transparent
               filter-[drop-shadow(1px_0_0_#8b8282)_drop-shadow(-1px_0_0_#8b8282)_drop-shadow(0_1px_0_#8b8282)_drop-shadow(0_-1px_0_#8b8282)]"
            >
              Jackets & Coats
            </h3>
          </div>
          <div className="pt-3.5">
            <ul className="flex items-center gap-x-10">
              {shopList1.map((items) => {
                return (
                  <li key={items.id}>
                    <button className="texts_16_medium text-head relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[-2px] after:left-0 hover:after:w-[60%]  after:duration-500 after:ease-in-out">
                      {items.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>

      <div className="mt-9 mb-25">
        <Container>
          <div className="flex justify-between">
            <p className="text-head texts_14_medium">HOME / THE SHOP</p>
            <div className="flex  items-center gap-x-7.5">
              <select className="border-b-2 border-head  ">
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
                <div class="h-6 w-0.5 bg-gray-300 cursor-pointer "></div>
              <div className="flex justify-between items-center gap-x-3 cursor-pointer">
                <button className="texts_14_medium text-head">VIEW</button>
                <button  className="texts_14_medium text-head">2</button>
                <button className="texts_14_medium text-head">3</button>
                <button  className="texts_14_medium text-head">4</button>
              </div>
              <button className=" border-l-2 pl-7.5 border-footer texts_14_medium text-head flex items-center gap-x-[10px] cursor-pointer">
                <span className="text-lg">{filter}</span> FILTER
              </button>
            </div>
          </div>
          <div>
            <div className="pt-10 pb-12.5 grid  grid-cols-4 gap-7.5">
              {[...new Array(16)].map((_, index) => {
                return (
                  <Product
                    imgAlt={"shop-page-img"}
                    catagory={"Dresses"}
                    itemName={"Colorful Jacket"}
                    itemPrice={"$29"}
                    discountPrice={"$5"}
                    imgSrc={shopimg}
                  />
                );
              })}
            </div>
                   <div className="flex flex-col items-center  w-full max-w-75 mx-auto uppercase">

          <p className="texts_14_medium text-black pb-1.25">
            Showing {visibleItems} of {totalItems} Items
          </p>

          <Progress
            value={percentage}
            className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
          />

          {visibleItems < totalItems && (
            <Link href="#">
              {" "}
              <Button
                onClick={handleLoadMore}
                className={
                  "texts_14_medium text-black hover:after:w-15 pt-4.25"
                }
                btnText={"SHOW MORE"}
              />
            </Link>
          )}
        </div>
          </div>
        </Container>
        {/* Filter part start */}
        <ShopFilter/>
        {/* Filter part end */}
      </div>
    </section>
  );
};

export default ShopBanner;
