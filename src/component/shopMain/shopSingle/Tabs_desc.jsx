'use client';
import { useState } from "react";
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
const reviewOne = "/assets/images/clientReviewsOne.png";
import Add_review from "./Add_review";

const Tabs_desc = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-10 xl:gap-x-19 gap-y-6 sm:gap-y-0 texts_16_medium text-[#767676]">
        {/* DESCRIPTION Button */}
        <button
          onClick={() => setActiveTab("description")}
          className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
            activeTab === "description"
              ? "text-head after:w-full after:bg-head"
              : "after:w-0 hover:after:w-full after:bg-head"
          }`}
        >
          DESCRIPTION
        </button>

        {/* ADDITIONAL INFORMATION Button */}
        <button
          onClick={() => setActiveTab("additional")}
          className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
            activeTab === "additional"
              ? "text-head after:w-full after:bg-head"
              : "after:w-0 hover:after:w-full after:bg-head"
          }`}
        >
          ADDITIONAL INFORMATION
        </button>

        {/* REVIEWS Button */}
        <button
          onClick={() => setActiveTab("reviews")}
          className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
            activeTab === "reviews"
              ? "text-head after:w-full after:bg-head"
              : "after:w-0 hover:after:w-full after:bg-head"
          }`}
        >
          REVIEWS (3)
        </button>
      </div>
      <div className={"px-4 md:px-20 xl:px-60 mt-8 md:mt-10 lg:mt-12.5"}>
        <Container>
          {/* DESCRIPTION CONTENT */}
          {activeTab === "description" && (
            <div className="animate-fadeIn">
              <div className="">
                <h5 className="texts_16_medium text-head">
                  Sed do eiusmod tempor incididunt ut labore
                </h5>
                <p className="texts_14_regular text-head w-full xl:w-232.5 leading-7.5 pt-6 lg:pt-11.25 text-justify lg:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
              <div className="mt-9.75 flex flex-col md:flex-row gap-y-8 md:gap-x-20 xl:gap-x-37.5">
                <div className="">
                  <h4 className="texts_16_medium text-head">
                    Why choose product?
                  </h4>
                  <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                    <div className="flex items-center gap-x-2.5">
                      <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                      <p className="texts_14_regular text-head ">
                        Creat by cotton fibric with soft and smooth
                      </p>
                    </div>
                    <div className=" flex items-center gap-x-2.5">
                      <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                      <p className="texts_14_regular text-head ">
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                      <p className="texts_14_regular text-head ">
                        Downloadable/Digital Products, Virtual Products
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h4 className="texts_16_medium text-head">
                    Sample Number List
                  </h4>
                  <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                    <div className="flex items-start gap-x-2.5">
                      <p className="texts_14_regular text-head ">
                        1 Create Store-specific attrittbutes on the fly
                      </p>
                    </div>
                    <div className=" flex items-start gap-x-2.5">
                      <p className="texts_14_regular text-head ">
                        2 Simple, Configurable (e.g. size, color, etc.), bundled
                      </p>
                    </div>
                    <div className="flex items-start gap-x-2.5">
                      <p className="texts_14_regular text-head ">
                        3 Downloadable/Digital Products, Virtual Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="texts_16_medium text-head pt-9.25">Lining</h4>
              <p className="texts_14_regular text-head pb-4 lg:pb-0">
                100% Polyester, Main: 100% Polyeste
              </p>
            </div>
          )}

          {/* ADDITIONAL INFORMATION CONTENT */}
          {activeTab === "additional" && (
            <div className="flex flex-row gap-x-10 md:gap-x-16 lg:gap-x-22.5 my-8 lg:my-12.5 animate-fadeIn">
              <div className="w-[100px] lg:w-[82px] space-y-[20px] lg:space-y-[31px]">
                <h4 className="texts_16_medium text-head whitespace-nowrap">
                  Weight
                </h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">
                  Dimensions
                </h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">
                  Size
                </h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">
                  Color
                </h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">
                  Storage
                </h4>
              </div>
              <div className="space-y-[20px] lg:space-y-[31px]">
                <h5 className="texts_14_regular text-head">1.25 kg</h5>
                <h5 className="texts_14_regular text-head">90 x 60 x 90 cm</h5>
                <h5 className="texts_14_regular text-head">XS, S, M, L, XL</h5>
                <h5 className="texts_14_regular text-head">
                  Black, Orange, White
                </h5>
                <h5 className="texts_14_regular text-head leading-relaxed">
                  Relaxed fit shirt-style dress with a rugged
                </h5>
              </div>
            </div>
          )}

          {/* REVIEWS CONTENT */}
          {activeTab === "reviews" && (
            <div className="animate-fadeIn space-y-8">
              {/* Review 1 */}
              <div className="border-b border-footer pb-5.75">
                <h4 className="texts_16_medium text-head">Reviews</h4>
                <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center mt-6.5">
                  <div className="flex-shrink-0 w-12 md:w-auto">
                    <Images imgSrc={reviewOne} />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                      <h5 className="texts_14_regular text-head">
                        Janice Miller
                      </h5>
                      <div className="flex text-yellow-400 mt-1 md:mt-0">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <span className="texts_14_regular text-[#767676] block mt-1">
                      April 06, 2020
                    </span>
                  </div>
                </div>
                <p className="pt-5 md:pl-21 texts_14_regular text-[#767676] w-full lg:w-210 leading-6">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est…
                </p>
              </div>

              {/* Review 2 */}
              <div className="my-7.5">
                <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center">
                  <div className="flex-shrink-0 w-12 md:w-auto">
                    <Images imgSrc={reviewOne} />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                      <h5 className="texts_14_regular text-head">
                        Benjam Porter
                      </h5>
                      <div className="flex text-yellow-400 mt-1 md:mt-0">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <span className="texts_14_regular text-[#767676] block mt-1">
                      April 06, 2020
                    </span>
                  </div>
                </div>
                <p className="pt-5 md:pl-21 texts_14_regular text-[#767676] w-full lg:w-210 leading-6">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est…
                </p>
                 <Add_review/>
              </div>
            </div>
          )}
        </Container>
      </div>
       
    </div>
  );
};

export default Tabs_desc;