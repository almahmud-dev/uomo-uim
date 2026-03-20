"use client";
import React from "react";
import Container from "../common/Container";
import CollectionSlider from "../common/CollectionSlider";

const CollectionComp = () => {
  return (
    <section className="pt-21.25 py-12.5 lg:py-25 ">
      <Container>
        <div>
          <div>
            <h1 className="head_70_bold  text-head text-center">
              Discover Timeless Elegance
            </h1>
            <p className="text-second mx-auto text-center max-w-175  texts_16_regular mt-5 lg:mt-7">
              Explore our curated collection of premium menswear designed for
              the contemporary gentleman. From tailored classics to modern
              essentials, each piece is crafted with attention to detail and
              uncompromising quality. Elevate your style with uomo-ui.
            </p>
          </div>
          <div className="pt-15 lg:pt-25 space-y-10 lg:space-y-25">
            <div>
              <CollectionSlider
                collectionHeading={"Hot Deals"}
                prevButton={"prev-hot-deal-button"}
                nextButton={"next-hot-deal-button"}
                skip={0}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Top Rated"}
                prevButton={"prev-top-rated-button"}
                nextButton={"next-top-rated-button"}
                skip={20}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"New Arrivals"}
                prevButton={"prev-new-arrivals-button"}
                nextButton={"next-new-arrivals-button"}
                skip={40}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Best Sellers"}
                prevButton={"prev-best-sellers-button"}
                nextButton={"next-best-sellers-button"}
                skip={60}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Flash Sale"}
                prevButton={"prev-flash-sale-button"}
                nextButton={"next-flah-sale-button"}
                skip={80}
              />
            </div>
            <div>
              <CollectionSlider
                collectionHeading={"Editor's Pick"}
                prevButton={"prev-editors-pick-button"}
                nextButton={"next-editors-pick-button"}
                skip={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CollectionComp;
