'use client';
import Container from "@/component/common/Container";
import React from "react";
import FeaturedProducts from "@/component/common/FeaturedProducts";

const Feature = () => {
  return (
    <>
      <section className=" mt-4 lg:mt-25">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7.5">
            <FeaturedProducts
              imgSrc="feaureProducts_s5rzpt"
              imgAlt="Men’s T-Shirts"
              price={"STARTING AT $19"}
              category={"Men’s T-Shirts"}
            />
            <FeaturedProducts
              imgSrc="feaureProducts_s5rzpt"
              imgAlt="Spring Collection"
              price={"STARTING AT $39"}
              category={"Men’s Sportswear"}
           />
          </div> 
        </Container>
      </section>
    </>
  );
};

export default Feature;
