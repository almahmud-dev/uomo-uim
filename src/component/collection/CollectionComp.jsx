'use client';
import React from "react";
import Container from "../common/Container";
import CollectionSlider from "../common/CollectionSlider";

const CollectionComp = () => {
  return (
    <section className="mt-[85px] py-[50px] lg:py-[100px] ">
      <Container>
        <div>
          <div>
            <h1 className="head_70_bold  text-head text-center">
              Discover Timeless Elegance
            </h1>
            <p className="text-second mx-auto text-center max-w-[700px]  texts_16_regular mt-5 lg:mt-7">
              Explore our curated collection of premium menswear designed for
              the contemporary gentleman. From tailored classics to modern
              essentials, each piece is crafted with attention to detail and
              uncompromising quality. Elevate your style with uomo-ui.
            </p>
          </div>
          <div className="mt-[60px] lg:mt-[100px] space-y-10 lg:space-y-25">
            <div>
              <CollectionSlider
                collectionHeading={"Hot Deals"}
                prevButton={"prev-hot-deal-button"}
                nextButton={"next-hot-deal-button"}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Top Rated"}
                prevButton={"prev-top-rated-button"}
                nextButton={"next-top-rated-button"}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"New Arrivals"}
                prevButton={"prev-new-arrivals-button"}
                nextButton={"next-new-arrivals-button"}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Best Sellers "}
                prevButton={"prev-best-sellers-button"}
                nextButton={"next-best-sellers-button"}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Flash Sale"}
                prevButton={"prev-flash-sale-button"}
                nextButton={"next-flah-sale-button"}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Editor's Pick"}
                prevButton={"prev-editors-pick-button"}
                nextButton={"next-editors-pick-button"}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CollectionComp;
