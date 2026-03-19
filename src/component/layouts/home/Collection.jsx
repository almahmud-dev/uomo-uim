'use client';
import Images from "@/component/common/Images";
import React from "react";
const womencollection = "/assets/images/womencollection.png";
const mencollection = "/assets/images/mencollection.png";
const kidcollection = "/assets/images/kidscollection.png";
const giftcard = "/assets/images/giftcard.png";
import Button from "@/component/common/Button";

const Collection = () => {
  return (
    <>
      <section className="lg:mt-25 mt-3.75 px-3.75 lg:px-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3.75 lg:gap-7.5">
            {/* ── Women Collection ── */}
            <div className="relative group overflow-hidden">
              <Images
                className="w-full object-cover"
                imgSrc={womencollection}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                <p className="texts_14_regular text-head text-[11px] sm:text-[14px]">
                  HOT LIST
                </p>
                <h3 className="text-head font-medium text-[16px] sm:text-[20px] lg:text-[26px] pb-1 leading-tight">
                  <span className="font-bold">WOMEN</span> COLLECTION
                </h3>
                <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
              </div>
            </div>

            {/* ── Right Column ── */}
            <div className="flex flex-col gap-3.75 lg:gap-7.5">
              {/* Men Collection */}
              <div className="relative group overflow-hidden">
                <Images
                  className="w-full object-cover min-h-[160px] sm:min-h-[200px] lg:min-h-0"
                  imgSrc={mencollection}
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                  <p className="texts_14_regular text-head text-[11px] sm:text-[14px]">
                    HOT LIST
                  </p>
                  <h3 className="text-head font-medium text-[16px] sm:text-[20px] lg:text-[26px] pb-1 leading-tight">
                    <span className="font-bold">MEN</span> COLLECTION
                  </h3>
                  <Button
                    className={"hover:after:w-12.5"}
                    btnText={"SHOP NOW"}
                  />
                </div>
              </div>

              {/* Kids + Gift Cards — side by side  */}
              <div className="grid grid-cols-2 gap-3.75 lg:gap-7.5">
                {/* Kids Collection */}
                <div className="relative group overflow-hidden">
                  <Images
                    className="w-full object-cover"
                    imgSrc={kidcollection}
                  />
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                    <p className="texts_14_regular text-head text-[10px] sm:text-[14px]">
                      HOT LIST
                    </p>
                    <h3 className="text-head font-medium text-[13px] sm:text-[18px] lg:text-[26px] pb-1 leading-tight">
                      <span className="font-bold">KIDS</span>{" "}
                      <span className="hidden xs:inline">COLLECTION</span>
                    </h3>
                    <Button
                      className={"hover:after:w-12.5"}
                      btnText={"SHOP NOW"}
                    />
                  </div>
                </div>

                {/* E-Gift Cards */}
                <div className="relative group overflow-hidden">
                  <Images className="w-full object-cover" imgSrc={giftcard} />
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                    <h3 className="text-head font-medium text-[13px] sm:text-[18px] lg:text-[26px] pb-1 leading-tight">
                      <span className="font-bold">E-GIFT</span>{" "}
                      <span className="hidden xs:inline">CARDS</span>
                    </h3>
                    <p className="texts_14_regular text-head text-[10px] sm:text-[13px] lg:text-[14px] pt-1 pb-2 sm:pb-4 hidden sm:block w-full max-w-[200px]">
                      Surprise someone with the gift they really want.
                    </p>
                    <Button
                      className={"hover:after:w-12.5"}
                      btnText={"DISCOVER MORE"}
                    />
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
