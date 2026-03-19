'use client';
import Container from "@/component/common/Container";
import React from "react";
const product = "/assets/images/feaureProducts.png";
import FeaturedProducts from "@/component/common/FeaturedProducts";

const Feature = () => {
  return (
    <>
      <section className=" mt-4 lg:mt-25">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7.5">
            <FeaturedProducts
              imgSrc={product}
              imgAlt={product}
              price={"STARTING AT $19"}
              category={"Men’s T-Shirts"}
            />
            <FeaturedProducts
              imgSrc={product}
              imgAlt={product}
              price={"STARTİNG AT $39"}
              category={"Men’s Sportswear"}
           />
          </div> 
        </Container>
      </section>
    </>
  );
};

export default Feature;
