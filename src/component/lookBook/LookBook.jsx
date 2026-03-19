'use client';
import Container from "@/component/common/Container";
import FeaturedProducts from "@/component/common/FeaturedProducts";
const lookBOne = "/assets/images/feaureProducts.png";
const lookBTwo = "/assets/images/lookbookTwo.png";
import React from "react";
import Images from "@/component/common/Images";
import Button from "@/component/common/Button";

const LookBook = () => {
  return (
    <section className="mt-[85px] pt-[60px] lg:pt-[80px] ">
      <Container>
        <h3 className="head_35_bold ">LOOKBOOK</h3>
        {/* Top  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-10.5">
          <div className="space-y-7.5">
            <FeaturedProducts
              imgSrc={lookBOne}
              imgAlt={lookBOne}
              price={"STARTING AT $19"}
              category={"Women’s T-Shirts"}
            />
            <FeaturedProducts
              imgSrc={lookBOne}
              imgAlt={lookBOne}
              price={"STARTING AT $21"}
              category={"Slim Fit Cotton Shorts"}
            />
          </div>
          <div className="relative group w-full overflow-hidden hover:bg-red">
            <Images imgSrc={lookBTwo} className={"w-full object-cover"} />
            <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-red/80 group-hover:h-full transition-all duration-500 ease-in-out"></div>
            <div className=" absolute bottom-10 left-10">
              <p className="texts_14_regular text-head group-hover:text-white transition-color duration-500">
                STARTİNG AT $39
              </p>
              <h3 className="head_26_medium text-head  group-hover:text-white transition-color duration-500 pb-1.25">
                Men’s Sportswear
              </h3>
            </div>
          </div>
        </div>
        {/* Bottom  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-7.5">
          <div className="relative group overflow-hidden w-full hover:bg-red">
            <Images imgSrc={lookBTwo} className={"w-full object-cover"} />
            <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-red/80 group-hover:h-full transition-all duration-500 ease-in-out"></div>
            <div className=" absolute bottom-10 left-10">
              <p className="texts_14_regular text-head group-hover:text-white transition-color duration-500">
                STARTİNG AT $39
              </p>
              <h3 className="head_26_medium text-head  group-hover:text-white transition-color duration-500 pb-1.25">
                Knee-length Cotton Shorts
              </h3>
            </div>
          </div>
          <div className="space-y-7.5">
            <FeaturedProducts
              imgSrc={lookBOne}
              imgAlt={lookBOne}
              price={"STARTING AT $19"}
              category={"Canvas Trainers"}
            />
            <FeaturedProducts
              imgSrc={lookBOne}
              imgAlt={lookBOne}
              price={"STARTING AT $21"}
              category={"Slim Fit Cotton Shorts"}
            />
          </div>
        </div>
        <Button
          className={
            "left-1/2 -translate-x-1/2 mt-12.5 mb-[60px] lg:mb-24.75 relative after:absolute after:bottom-0 after:left-0 after:contant-[''] after:bg-head after:w-[60px] after:h-[2px]"
          }
          btnText={"SHOW MORE"}
        />
      </Container>
    </section>
  );
};

export default LookBook;
