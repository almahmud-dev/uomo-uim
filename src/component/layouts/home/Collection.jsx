"use client";
import React from "react";
import Button from "@/component/common/Button";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

const CATEGORY_MAP = {
  women: "womens-dresses",
  men: "mens-shirts",
  kids: "tops",
};

const Collection = () => {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/shop?category=${CATEGORY_MAP[category]}`);
  };

  return (
    <>
      <section className="lg:mt-25 mt-3.75 px-3.75 lg:px-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3.75 lg:gap-7.5">
            {/* Women Collection */}
            <div className="relative group overflow-hidden cursor-pointer" onClick={() => handleCategoryClick("women")}>
              <CldImage
                src="womencollection_dhhu4y"
                alt="Women Collection"
                width={500}
                height={700}
                className="w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                <p className="texts_14_regular text-head text-[11px] sm:text-[14px]">HOT LIST</p>
                <h3 className="text-head font-medium text-[16px] sm:text-[20px] lg:text-[26px] pb-1 leading-tight">
                  <span className="font-bold">WOMEN</span> COLLECTION
                </h3>
                <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3.75 lg:gap-7.5">
              {/* Men Collection */}
              <div className="relative group overflow-hidden cursor-pointer" onClick={() => handleCategoryClick("men")}>
                <CldImage
                  src="mencollection_nr2nff"
                  alt="Men Collection"
                  width={500}
                  height={300}
                  className="w-full object-cover min-h-40 sm:min-h-50 lg:min-h-0"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                  <p className="texts_14_regular text-head text-[11px] sm:text-[14px]">HOT LIST</p>
                  <h3 className="text-head font-medium text-[16px] sm:text-[20px] lg:text-[26px] pb-1 leading-tight">
                    <span className="font-bold">MEN</span> COLLECTION
                  </h3>
                  <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
                </div>
              </div>

              {/* Kids + Gift Cards */}
              <div className="grid grid-cols-2 gap-3.75 lg:gap-7.5">
                {/* Kids Collection */}
                <div className="relative group overflow-hidden cursor-pointer" onClick={() => handleCategoryClick("kids")}>
                  <CldImage
                    src="kidscollection_l4suvb"
                    alt="Kids Collection"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                    <p className="texts_14_regular text-head text-[10px] sm:text-[14px]">HOT LIST</p>
                    <h3 className="text-head font-medium text-[13px] sm:text-[18px] lg:text-[26px] pb-1 leading-tight">
                      <span className="font-bold">KIDS</span>{" "}
                      <span className="hidden xs:inline">COLLECTION</span>
                    </h3>
                    <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
                  </div>
                </div>

                {/* E-Gift Cards */}
                <div className="relative group overflow-hidden">
                  <CldImage
                    src="giftcard_dkzyq1"
                    alt="E-Gift Cards"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                    <h3 className="text-head font-medium text-[13px] sm:text-[18px] lg:text-[26px] pb-1 leading-tight">
                      <span className="font-bold">E-GIFT</span>{" "}
                      <span className="hidden xs:inline">CARDS</span>
                    </h3>
                    <p className="texts_14_regular text-head text-[10px] sm:text-[13px] lg:text-[14px] pt-1 pb-2 sm:pb-4 hidden sm:block w-full max-w-50">
                      Surprise someone with the gift they really want.
                    </p>
                    <Button className={"hover:after:w-12.5"} btnText={"DISCOVER MORE"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;